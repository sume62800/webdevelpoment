import React from "react";
import Image from "next/image";

function hero2() {
  return (
    <div className="relative h-96 w-full">
    <Image
      src="/building.jpg"
      alt="Background"
      layout="fill"
      objectFit="cover"
      className="z-0"
    />
    <div className="absolute inset-0 bg-gradient-to-b to-blue-700 from-green-700 opacity-65 z-10"></div>
    <div className="relative z-20 flex items-center justify-center h-full">
      <div className="text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-5xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
          Services
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white">
          MirhaTech UAE is a leading provider of comprehensive security
          solutions and digital services
        </p>
      </div>
    </div>
  </div>
  );
}

export default hero2;
