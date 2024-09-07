import React from "react";

function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-700 to-green-700">
      <div className="pt-40 w-full min-h-full grid md:grid-cols-2 place-items-center">
        <div className=" md:min-h-40 md:w-40 rounded-md">
          <h1 className="text-center text-7xl  md:text-7xl text-slate-100 font-extrabold font-serif">
            MIRHA TECH UAE
          </h1>
        </div>
        <div className="bg-white min-h-40 w-40 rounded-md">b</div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFFFFF"
          fill-opacity="1"
          d="M0,64L60,80C120,96,240,128,360,133.3C480,139,600,117,720,138.7C840,160,960,224,1080,240C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default HeroSection;
