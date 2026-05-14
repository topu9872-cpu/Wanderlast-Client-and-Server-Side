import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookings = async() => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user=session?.user
console.log(session)
    const res=await fetch(`http://localhost:2000/booking/${user?.id}`)
    const data= await res.json();
    console.log(data)
  return (
    <div>
   
    </div>
  );
};

export default MyBookings;