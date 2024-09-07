import React from "react";
import Navcard from "./Navcard";

function Dropdown() {
  return (
    <div className="grid sm:grid-cols-5 w-full">
      <div className="col-span-1 shadow-sm border">
        <div className="mt-10 mb-10">
          <ul className="grid">
            <li className="ease-in duration-100 delay-100 hover:text-blue-800 hover:border-r-2 hover:bg-gray-200 hover:border-blue-600 p-3">
              CCTV Installations and Maintenance 
            </li>
            <li className="ease-in duration-100 delay-100 hover:text-blue-800 hover:border-r-2 hover:bg-gray-200 hover:border-blue-600 p-3">
              Building Services
            </li>
            <li className="ease-in duration-100 delay-100 hover:text-blue-800 hover:border-r-2 hover:bg-gray-200 hover:border-blue-600 p-3">
              Web Development
            </li>
            <li className="hover:text-blue-800 hover:border-r-2 hover:bg-gray-200 hover:border-blue-600 p-3">
              Digital Marketing
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-4 shadow-sm border p-5">
        <Navcard
          
        />
      </div>
    </div>
  );
}

export default Dropdown;
