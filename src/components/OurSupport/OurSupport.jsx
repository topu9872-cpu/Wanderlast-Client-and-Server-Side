import Image from "next/image";
import React from "react";

const OurSupport = () => {
  return (
    <div className="m-10">
      <div>
        <h1 className="text-4xl">Why Choose Wanderlust</h1>
        <p>Your trusted partner for exceptional travel experience</p>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         <div className="card card-dash bg-base-100 w-96">
        <Image
          src={"/assets/ShieldCheck.png"}
          height={40}
          width={40}
          alt="image"
        />
        <div className="card-body">
          <h2 className="card-title">Safe & Secure</h2>
          <p>
            Your safety is our prioity with comprehensive travel insurance and
            24/7 support.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
         <div className="card card-dash bg-base-100 w-96">
        <Image
          src={"/assets/MapTrifold.png"}
          height={40}
          width={40}
          alt="image"
        />
        <div className="card-body">
          <h2 className="card-title">Edpert Guides</h2>
          <p>
           Local experts who bring destinations to lofe with authentic cultural insights.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
         <div className="card card-dash bg-base-100 w-96">
        <Image
          src={"/assets/Headset.png"}
          height={40}
          width={40}
          alt="image"
        />
        <div className="card-body">
          <h2 className="card-title">24/7 Support</h2>
          <p>
           Round-the -clock customer service to assist you wherever your journey takes you.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default OurSupport;
