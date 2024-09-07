"use client";
import React from "react";
import { StickyScroll } from "../ui/stickyscroll";
import Image from "next/image";
import { SiExpertsexchange } from "react-icons/si";

const content = [
    {
      title: "Expertise and Experience",
      description:
        "With years of experience in the industry, our team of professionals is equipped to handle all your security and digital needs, ensuring top-notch service and reliability.",
      content: (
        <div className="h-full w-full bg-slate-300 flex items-center justify-center text-white">
          <SiExpertsexchange size={150}/>
        </div>
      ),
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize our clients' needs and work closely with them to deliver customized solutions that meet their specific requirements, fostering strong partnerships and satisfaction.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/building.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Customer-Centric Approach"
          />
        </div>
      ),
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We use the latest technology and industry best practices to ensure that our services are reliable, efficient, and effective, staying ahead of the competition.",
      content: (
        <div className="h-full w-full bg-gradient-to-b to-slate-700 from-teal-400 flex items-center justify-center text-white">
          <Image
            src="/services.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Customer-Centric Approach"
          />
        </div>
      ),
    },
    {
      title: "Comprehensive Solutions",
      description:
        "From physical security to digital marketing, we provide a wide range of services under one roof, making it easier for you to manage your business seamlessly and effectively.",
      content: (
        <div className="h-full w-full bg-gradient-to-b to-slate-700 from-teal-400 flex items-center justify-center text-white">
          Comprehensive Solutions
        </div>
      ),
    },
  ];
  
  
export function StickyScrollRevealDemo() {
  return (
    <div className="py-10 bg-slate-100">
        <h1 className="text-4xl  text-black font-extrabold text-center pt-20 pb-10 ">Why Choose Us?</h1>
      <StickyScroll content={content} />
    </div>
  );
}



