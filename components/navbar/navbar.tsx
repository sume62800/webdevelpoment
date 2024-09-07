"use client";

import Link from "next/link";
import MobileNavigation from "./mobileNavigation";
import DesktopNavigation from "./desktopNavigation";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-2xl bg-fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between w-full md:justify-start ">
            <div className="text-2xl font-bold">
              <Link href="/">Mirha Tech</Link>
            </div>

            {/* Navbar for Desktop start */}
            <DesktopNavigation />

            {/* Navbar for Mobile start */}
            <div>
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
