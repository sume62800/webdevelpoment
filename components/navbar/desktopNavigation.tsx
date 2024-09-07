import React from "react";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./dropdown";

function desktopNavigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        <div className="flex">
          <Link
            className="text-md rounded-md p-0.5 font-medium hover:bg-blue-600 focus:outline-none"
            href="/services"
          >
            {" "}
            Services
          </Link>
          <div className="mb-0.5">
            <button
              onClick={toggleDropdown}
              className="px-1 py-2 rounded-md text-sm font-medium hover:bg-blue-600 focus:outline-none"
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>

        <div className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 cursor-pointer">
          <Link href="/about-us">About</Link>
        </div>
        <div className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 cursor-pointer">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      {dropdownOpen && (
        <div className="absolute text-black bg-slate-50 w-full left-0 top-16 shadow-lg ">
          <div className="max-w-7xl">
            <Dropdown />
          </div>
        </div>
      )}
    </div>
  );
}

export default desktopNavigation;
