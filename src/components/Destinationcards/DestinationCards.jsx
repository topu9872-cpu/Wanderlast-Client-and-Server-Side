import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowOutward, MdOutlineDateRange } from "react-icons/md";
const DestinationCards = ({ destination }) => {
  const { category, country, departureDate, imageUrl, price, _id } =
    destination;

  return (
    <div>
      <div className="card bg-white w-96 h-110 text-black shadow-sm">
        <figure>
          <Image
            src={imageUrl}
            height={400}
            width={400}
            alt="image"
        className="h-100 object-cover"
          />
        
        </figure>
        <div className="card-body">
          <h2 className="card-title">
        
            <div className="flex items-center font-normal">
              <FaLocationDot />
              {country}
            </div>
          </h2>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{category}</h2>
            <h2 className="flex text-2xl font-bold">
              {`$${price}`}{" "}
              <p className="text-sm opacity-65 font-normal">/Preson</p>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center">
              <MdOutlineDateRange />
              {departureDate}
            </div>
            <Link
              href={`/destination/${_id}`}
              className="flex text-cyan-500 text-2xl font-bold items-center underline"
            >
              Book Now <MdArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCards;
