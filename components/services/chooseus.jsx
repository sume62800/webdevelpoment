import React from "react";


const ChooseUS = () => {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us?
            </h2>
           
            <ul className="mt-4 text-lg text-gray-800 list-disc list-inside">
              <li><strong>Expertise and Experience:</strong> With years of experience in the industry, our team of professionals is equipped to handle all your security and digital needs.</li>
              <li><strong>Customer-Centric Approach:</strong> We prioritize our clients' needs and work closely with them to deliver customized solutions that meet their specific requirements.</li>
              <li><strong>Cutting-Edge Technology:</strong> We use the latest technology and industry best practices to ensure that our services are reliable, efficient, and effective.</li>
              <li><strong>Comprehensive Solutions:</strong> From physical security to digital marketing, we provide a wide range of services under one roof, making it easier for you to manage your business.</li>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-16">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src="/building.jpg"
              alt="MirhaTech UAE"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ChooseUS;
  