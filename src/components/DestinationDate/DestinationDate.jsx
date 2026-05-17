'use client'

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {DateField, Label} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
const DestinationDate = ({destination}) => {

    const {data:session}=authClient.useSession();
    const user = session?.user;

const handleBooking=async()=>{
    const bookingData={
        userId:user.id,
        userName:user.name,
        userImage:user.image,
        destinationId:destination._id,
        destinationName:destination.destinationName,
        destinationPrice:destination.price,
        destinationImage:destination.imageUrl,
        destinationCountry:destination.country
,
        departureDate:new Date(date)
    }

    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVEL_URL}/booking`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(bookingData)
    })
const data=await res.json();

toast.success('Booking is Successfull')
 
}

     const [date,setDate]=useState(null)

  return (
    <div>
        <div className='card'>
          <p>Starting from</p>
          <h1 className='text-cyan-500 text-3xl'>$1299</h1>
          <p>per person</p>
          <DateField onChange={setDate} className="w-[256px]" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
          <button onClick={handleBooking} className='text-center text-white font-semibold bg-cyan-500 flex p-2 pl-20 items-center gap-3'>Book Now <FaArrowRight/> </button>
         <span className='opacity-65'>
           <p className='flex text-nowrap items-center'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 48 48">
<path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.41"></path></svg>Free cancellation up to 7 days</p>
          <p className='flex text-nowrap items-center'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 48 48">
<path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.41"></path></svg>Travel insurance included</p>
          <p className='flex text-nowrap items-center'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 48 48">
<path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.41"></path></svg>24/7 customer support</p>
         </span>
        </div>
    </div>
  );
};

export default DestinationDate;