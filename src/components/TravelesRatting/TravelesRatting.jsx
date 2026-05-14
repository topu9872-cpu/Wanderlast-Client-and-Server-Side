import Image from "next/image";
import React from "react";

const TravelesRatting = () => {
  return (
    <div className="m-10  mb-20">
      <div className="">
        <h1 className="text-5xl">What Travelers Say</h1>
        <p className="pt-2">Real experiences from wur happy travelers</p>
      </div>
      <div className="mt-6 flex justify-between mx-auto ">
        <div className="card  w-130 h-50 card-side bg-base-100 shadow-sm">
          <div className="">
            <p className="text-wrap">
              "TheBail Trip Wal Absolutely Magival! Every Detail Wal Perfectly
              Planned. The Resorts Were Luxurious And The Cultural Experiences
              Were Unforgettable"
            </p>
            <div >
              <span className="pt-2 ">
                <h1 className="text-cyan-500 ">-Michael Chen</h1>
                <p className="text-sm">Singapore</p>
              </span>
            </div>
          </div>

          <Image
            src={"/assets/person2.png"}
            width={120}
            height={80}
            alt="person"
            className="object-cover w-60 h-40"
          />
        </div>
        <div className="card w-110 h-50 card-side bg-base-100 shadow-sm">
          <div className="">
            <p className="text-wrap">
             "Swiss Alps Adventure Exceeded All Expectations. The Mountan Views were Breathking And Our Guide Was Incredibly Knowledgeable.highly Recommend!"
            </p>
            
              <span className="pt-2">
                <h1 className="text-cyan-500 ">-sarah Johnson</h1>
                <p className="text-sm">New York, USA</p>
              </span>
            
          </div>

          <Image
            src={"/assets/person1.png"}
            width={160}
            height={120}
            alt="person"
            className="object-cover w-60 h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelesRatting;
