import React from 'react';
import DestinationCards from '../Destinationcards/DestinationCards';
import { FaArrowRight } from 'react-icons/fa';
const FontDestination = async() => {
    const res=await fetch('http://localhost:2000/destination')
const destinations=await res.json()
  return (
    <div className='mx-10 space-y-7'>
     <div className='flex justify-between mx-auto items-center mt-16'>
            <span>
    <h1 className='text-5xl font-semibold'>Featured Destinations</h1>
    <p className='md:text-nowrap opacity-85'>Handpicked travel experinces for the adventure seekers</p>
            </span>
            <span>
              <button className='btn btn-info text-lg btn-outline'>All Destinations <FaArrowRight/></button>
            </span>
          </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {destinations.slice(0,3).map(destination=>
      <div key={destination._id}>
          <DestinationCards destination={destination}/>
      </div>
      )}
    </div>
    </div>
  );
};

export default FontDestination;