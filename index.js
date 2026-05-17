// this is for mongodb DNS error
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const cors = require('cors')
const express = require('express');
const app = express()
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 2000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");
const uri = process.env.MONGODB_URI;



app.use(express.json());
app.use(cors())
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


/**
 * ! Meddleware
 */
const JWKS = createRemoteJWKSet(
  new URL(`${process.env.CELINT_URL}/api/auth/jwks`)
)

const varifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthrized' });
  }
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ massage: 'unauthrized' });
  };
  try {
    const { payload } = await jwtVerify(token, JWKS);
    next();
    console.log(payload)
  } catch {
    return res.status(403).json({ message: 'Forbidden' });
  }
}




async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const db = client.db('wanderlust');
    const destinationCollection = db.collection('destinations');
    const bookingCollection = db.collection('booking');
    

    app.post('/destination', async (req, res) => {
      const destinationData = req.body;
      const result = await destinationCollection.insertOne(destinationData)
      res.json(result);
    });

    app.get('/destination', async (req, res) => {
      const result = await destinationCollection.find().toArray();
      res.json(result)
    })

    app.get('/destination/:id', varifyToken, async (req, res) => {
      const { id } = req.params;
      const result = await destinationCollection.findOne({ _id: new ObjectId(id) })
      res.json(result)
    });

    app.patch('/destination/:id', async (req, res) => {
      const { id } = req.params
      const updateData = req.body
      console.log(updateData)
      const result = await destinationCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }

      )
      res.json(result)
    });

    app.delete('/destination/:id', async (req, res) => {
      const { id } = req.params;
      const result = await destinationCollection.deleteOne({ _id: new ObjectId(id) })
      console.log(result)
      res.json(result)
    });

    /**
     * ! this is for Booking 
     */
    app.post('/booking',varifyToken, async (req, res) => {
      const bookingData = req.body;
      const result = await bookingCollection.insertOne(bookingData);
      res.json(result)
    });

    app.get('/booking/:userId', async (req, res) => {
      const { userId } = req.params
      const result = await bookingCollection.find({ userId: userId }).toArray();
      res.json(result)
    })

    app.delete('/booking/:id',varifyToken, async (req, res) => {
      const { id } = req.params;
      const result = await bookingCollection.deleteOne({ _id: new ObjectId(id) })
      res.json(result)
    });




  
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hollo world')
});


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})