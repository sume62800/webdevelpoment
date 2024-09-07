"use client"
import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { TbSpeakerphone } from "react-icons/tb";
import { BiCctv } from "react-icons/bi";
import { TbBuildingCommunity } from "react-icons/tb";


interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="p-8 py-10 w-80 min-h-32 md:min-h-32 md:w-56 lg:w-64 rounded-2xl md:rounded-md border-2 border-gray-300 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:border-gray-400 bg-white hover:bg-slate-50">
      <div className="flex flex-col items-center gap-6">
        {icon}
        <h1 className="text-lg md:text-2xl font-sans">{title}</h1>
        <p className="text-wrap text-sm text-slate-800">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-700/95 to-blue-400 flex justify-center pb-40">
      <div>
        <h1 className="text-4xl text-white text-center mt-8 md:text-5xl font-extrabold">
          Our Services
        </h1>
        <div className="mt-20 text-center grid grid-cols-1 md:grid-cols-4 gap-4">
       
          <ServiceCard
            icon={<BsGlobe2 size={50} />}
            title="Web Development"
            description="Tailored website design, e-commerce solutions, mobile-friendly designs, and UX optimization for seamless user experience."
          />
        
          
          <ServiceCard
            icon={<TbSpeakerphone size={50} />}
            title="Digital Marketing"
            description="Digital marketing boosts online presence with SEO, SEM, and SMO, focusing on search visibility, ads, and social media engagement."
          />
          <ServiceCard
            icon={<TbBuildingCommunity size={50} />}
            title="Building Services"
            description="Full-spectrum building maintenance, including electrical, plumbing, HVAC installations, repairs, and facility management."
          />
          <ServiceCard
            icon={<BiCctv size={50} />}
            title="CCTV Services"
            description="Advanced surveillance systems, expert installation, ongoing support, and remote monitoring for comprehensive security."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
