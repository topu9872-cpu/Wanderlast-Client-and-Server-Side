
import React from 'react';
import DestinationCards from '../../components/Destinationcards/DestinationCards';

const DestinationPage =async() => {

const res=await fetch('http://localhost:2000/destination')
const destinations=await res.json()
console.log(destinations)
  return (
    <div>
    <h1 className='text-5xl p-10'>All   Destination</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10'>
        {
            destinations.map(destination=><div key={destination._id}>
                <DestinationCards destination={destination} />
            </div>
            )}
    </div>
    </div>
  );
};

export default DestinationPage;