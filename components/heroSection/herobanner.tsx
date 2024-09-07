import React from 'react';
import {FlipWordsDemo} from "@/components/flipwords/flippingwords"
import { Button } from '../ui/movingBorder';

const HeroBanner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent md:py-5">
      <div className="bg-transparent p-8 rounded-lg shadow-md w-full max-w-4xl text-white text-start">
        <div className="bg-gray-800 rounded-lg py-2 px-4 mb-6 inline-block">
          <span role="img" aria-label="wave" className="mr-2">👋</span>
          Hey there! We're MirhaTech UAE
        </div>
        <h2 className="text-5xl md:text-4xl font-semibold mb-4">We are Expert in Providing</h2>
        <h3 className="text-4xl md:text-3xl font-semibold mb-4"><FlipWordsDemo/></h3>
        <h4 className="text-3xl md:text-2xl font-semibold text-orange-500 mb-4">
        solutions that accelerate growth
        </h4>
        <p className="mb-6">
        "Empowering safety, amplifying presence – MirhaTech UAE, your digital guardians."
        </p>
        <Button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
