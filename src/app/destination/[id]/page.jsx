import DeleteModal from '@/components/DeleteModal/DeleteModal';
import DestinationDate from '@/components/DestinationDate/DestinationDate';
import { EditForm } from '@/components/EditModal/EditModal';
import Image from 'next/image';
import Link from 'next/link';

import { FaCalendar, FaRegTrashAlt, FaStar } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight, FaLocationDot } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:2000/destination/${id}`);
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
    <div className='min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 xl:px-32 2xl:px-46 text-black bg-white pt-16 sm:pt-20'>
      <div>
        {/* Header with Back Button and Action Buttons */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 sm:pb-8 md:pb-10'>
          <Link 
            className='flex items-center text-base sm:text-lg md:text-xl font-semibold hover:text-blue-600 transition-colors duration-200' 
            href={'/destination'}
          >
            <FaArrowLeft className="mr-2 text-sm sm:text-base"/> 
            Back to Destinations
          </Link>
          <div className='flex space-x-3 sm:space-x-4 w-full sm:w-auto justify-start sm:justify-end'>
            <EditForm destination={destination} />
            <DeleteModal destination={destination} />
          </div>
        </div>
        
        {/* Hero Image Section */}
        <div className='mx-auto flex justify-center rounded-t-xl overflow-hidden'>
          <div className='relative w-full max-w-5xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]'>
            <Image 
              src={imageUrl} 
              fill
              className='object-cover rounded-t-xl'
              alt={category || 'Destination image'}
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Content Grid - Responsive Layout */}
      <div className='mt-8 sm:mt-12 md:mt-16 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12'>
        
        {/* Main Content Section */}
        <div className='space-y-4 sm:space-y-5 lg:col-span-2'> 
          <p className='flex items-center gap-2 text-sm sm:text-base opacity-75'>
            <FaLocationDot className="text-red-500 flex-shrink-0"/> 
            {country}
          </p>
          
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words'>
            {category}
          </h1>
          
          <div className='flex flex-wrap gap-3 sm:gap-5'>
            <h2 className='flex items-center gap-1 text-sm sm:text-base opacity-75'>
              <FaStar className='text-yellow-500 text-sm sm:text-base'/>
              4.9 (234 reviews)
            </h2>
            <h2 className='flex items-center gap-1 text-sm sm:text-base opacity-75'>
              <FaCalendar className="text-blue-500"/>
              {departureDate}
            </h2>
          </div>
          
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium pt-2 sm:pt-4'>
            Overview
          </h1>
          
          <p className='opacity-70 leading-relaxed text-sm sm:text-base'>
            {description}
          </p>
        </div>
        
        {/* Sidebar - Destination Date Component */}
        <div className='lg:col-span-1'>
          <DestinationDate destination={destination} />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;