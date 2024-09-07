import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from "next/image";
import AppointmentForm from "@/components/heroSection/form";

const Contactpagebanner = () => {
  return (
    <div className="bg-transparent p-8 rounded-lg shadow-md w-full max-w-5xl text-white text-start flex flex-col gap-5">
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">
        How Can You Reach Us?
      </h2>
      <div className="w-full md:w-3/4">
        <p className="mb-6">
          "What truly sets us apart is our unwavering commitment to your success. Your business becomes our business, and your goals become ours too."
        </p>
      </div>
      <div className="w-16">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Let's talk
        </button>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:flex lg:items-start lg:justify-center gap-4">
        <div className="lg:w-1/2 mb-20">
          <AppointmentForm />
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-10">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            If you have any questions or need further information, please feel free to contact us. We're here to help!
          </p>
          <ul className="mt-8 text-lg text-gray-500 list-none space-y-4">
            <li className="flex items-center">
              <FaMapMarkerAlt className="h-6 w-6 text-blue-500" />
              <span className="ml-4">Address: [Your Company Address]</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="h-6 w-6 text-blue-500" />
              <span className="ml-4">Phone: [Your Phone Number]</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="h-6 w-6 text-blue-500" />
              <span className="ml-4">Email: [Your Email Address]</span>
            </li>
            <li className="flex items-center">
              <FaGlobe className="h-6 w-6 text-blue-500" />
              <span className="ml-4">Website: www.mirhatech.uae</span>
            </li>
          </ul>
          <div className="mt-8 flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function Page() {
  return (
    <>
      <div className="w-full max-h-96 bg-[url('/building.jpg')] bg-cover">
        <div className="w-full min-h-screen bg-black/80 bg-cover grid place-items-center">
        <div className="w-full px-10 min-h-64">
            <Contactpagebanner />
          </div>
          
        </div>
      </div>
      <div className="mt-56" >
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">"Your Security <span className="text-blue-700">Our Technology</span>"</h2>
          </div>
     
      <div>
        <ContactUs />
      </div>
      <div className="w-full grid place-items-center mb-20">
        <div className="w-full md:w-3/4">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Find us on <span className="text-blue-700">Google Map</span></h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902947478803!2d90.41251801445585!3d23.81033059297839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b856bd15a4cb%3A0x1a9a4e5f17bc4e8d!2sDhaka!5e0!3m2!1sen!2sbd!4v1620035196851!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            className="rounded-2xl border shadow-2xl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Page;
