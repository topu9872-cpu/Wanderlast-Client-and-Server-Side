import DeleteModal from '@/components/DeleteModal/DeleteModal';
import { EditForm } from '@/components/EditModal/EditModal';
import Image from 'next/image';
import Link from 'next/link';

import { FaCalendar, FaRegTrashAlt, FaStar } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight, FaLocationDot } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';

const DestinationDetailsPage = async({params}) => {
  const {id}=await params;
 const res=await fetch(`http://localhost:2000/destination/${id}`)
 const destination = await res.json();
  const {
    category,
    country,
    departureDate,
    description,
    destinationName,
    duration,
    imageUrl,
    price,
    _id
  } = destination;
  return (
    <div className='p-10 px-46 text-black bg-white pt-20'>
      <div>
        <div className='flex justify-between  pb-10'>
        <span><Link className=' flex items-center text-xl font-semibold' href={'/destination'}><FaArrowLeft/> Back to Destions</Link></span>
        <span className='space-x-4 flex '>
         <EditForm destination={destination} />
          <DeleteModal destination={destination}/>
        </span>
      </div >
       <div className='mx-auto flex justify-center'>
      
        <Image src={imageUrl} width={900} height={200} alt='image' className='rounded-t-xl'/>
       </div>
       </div>
       <div className='mt-16 mb-8 grid grid-cols-3'>
        <div className='space-y-5 col-span-2'> 
          <p className='flex items-center gap-1 opacity-75'> <FaLocationDot />{country}</p>
          <h1 className='text-6xl'>{ category}</h1>
          <span className='flex gap-5'>
            <h2 className='flex items-center gap-1 opacity-75 '><FaStar className='text-green-500'/>4.9 (234 rewews)  </h2>
            <h2 className='flex items-center gap-1'><FaCalendar/>{`${departureDate}`}</h2>
          </span>
          <h1 className='text-4xl font-medium'>Overviwe</h1>
          <p className='opacity-60'>{ description}</p>
        </div>
        <div className='card'>
          <p>Starting from</p>
          <h1 className='text-cyan-500 text-3xl'>$1299</h1>
          <p>per person</p>
          <h3 className='bg-gray-200 py-2 pl-2'>05/15/2026</h3>
          <button className='text-center text-white font-semibold bg-cyan-500 flex p-2 pl-20 items-center gap-3'>Book Now <FaArrowRight/> </button>
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
    </div>
  );
};

export default DestinationDetailsPage;