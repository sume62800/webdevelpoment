// pages/index.js
import React from 'react';
// import ServiceCard from '../components/ServiceCard';
// import services from '../services';

// services.js
import { FaTv, FaBuilding, FaCode, FaSearch, FaBullhorn, FaShareAlt } from 'react-icons/fa';

const services = [
  {
    title: 'CCTV Installations and Maintenance',
    icon: <FaTv color='black' size={32}/>,
  },
  {
    title: 'Building Services',
    icon: <FaBuilding color='black' size={32}/>,
  },
  {
    title: 'Web Development',
    icon: <FaCode color='black' size={32}/>,
  },
  {
    title: 'SEO (Search Engine Optimization)',
    icon: <FaSearch color='black' size={32}/>,
  },
  {
    title: 'SEM (Search Engine Marketing)',
    icon: <FaBullhorn color='black' size={32}/>,
  },
  {
    title: 'SMO (Social Media Optimization)',
    icon: <FaShareAlt color='black' size={32} />,
  },
];




interface ServiceCardProps {
  title: string;
  icon: React.ReactElement;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="w-12 h-12 mb-4 text-black">{icon}</div>
      <h3 className="text-xl font-semibold text-black">{title}</h3>
    </div>
  );
};

const Page = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-black mb-8">
        We offer Commercial, Residential & Emergency Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} icon={service.icon} />
        ))}
      </div>
      <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-blue-800">
        Click to View All Services
      </button>
    </div>
  );
};

export default Page;
