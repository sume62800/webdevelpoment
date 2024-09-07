import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/movingBorder";
import Aboutsection from "@/components/aboutsection";

const Aboutpagebanner=()=>{
  return (
    <div className="bg-transparent p-8 rounded-lg shadow-md w-full max-w-5xl text-white text-start flex flex-col gap-5">
    <h2 className="text-5xl md:text-5xl font-semibold mb-4">Who WE Are</h2>
    <div className=" w-3/4">
    <p className="mb-6">
    "What truly sets us apart is our unwavering commitment to your success. Your business becomes our business, and your goals become ours too."
    </p>
    </div>
    <div className="W-16">
    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
      Let's talk
    </button>
    </div>
  </div>
  )
}



const Mission = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center  bg-gray-100 min-h-screen">
      <div className="mt-8 ml-20">
        <img src="building.jpg" alt="Mission" className="w-full max-w-md rounded shadow-md" />
      </div>
      <div className="text-start">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Aim, Mission & Vision</h1>
      
      <p className="max-w-4xl text-lg">
      Our vision is to be a trusted tech partner, building lasting relationships with exceptional service. We create a positive workplace that attracts top talent and make a positive community impact through social responsibility.
      </p>
      <div className="max-w-4xl text-lg mt-8">
        MirhaTech UAE ensures secure, efficient operations with cutting-edge CCTV, building services, web development, and digital marketing, empowering businesses to excel with peace of mind and a robust digital presence.
      </div>
      </div>
      
    </div>
  );
};






const page: React.FC = () => {
  return (
    <>
      <div className="w-full max-h-96 bg-[url('/building.jpg')] bg-cover">
        <div className="w-full min-h-96 bg-black/80 bg-cover grid place-items-center">
                <div className='w-full px-10 min-h-64'>
                 <Aboutpagebanner/>
                </div>
                <div className=''>
                 
                </div>
        </div>
    </div>
    <Aboutsection/>
    <Mission/>
    </>
  );
};

export default page;
