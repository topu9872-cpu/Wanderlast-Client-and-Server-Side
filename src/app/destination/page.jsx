
import React, { Suspense } from 'react';
import DestinationCards from '../../components/Destinationcards/DestinationCards';


const DestinationPage =async() => {

const res=await fetch(`${process.env.NEXT_PUBLIC_SERVEL_URL}/destination`)
const destinations=await res.json()
console.log(destinations)
  return (
    <div >
     
    <h1 className='text-5xl p-10 t'>All   Destination</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10'>
        {
            destinations.map(destination=><div key={destination._id}>
               <Suspense fallback={<p className='text-5xl text-cyan-500 mx-auto my-auto'>Loding........</p>}>
                 <DestinationCards destination={destination} />
               </Suspense>
            </div>
            )}
    </div>
    </div>
  );
};

export default DestinationPage;