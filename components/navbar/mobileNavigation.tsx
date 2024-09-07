import React, { useState } from "react";
import { LuAlignRight } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <div className="mr-5 flex justify-end md:hidden">
      <div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button onClick={() => setIsOpen(true)}>
              <LuAlignRight size={27} />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className="flex flex-col gap-4 mt-5">
                  <Link href="/" onClick={closeSheet}><h1>MIRHA TECH</h1></Link>
                  <span className="text-sm font-mono">
                    Your Security, Our Technology
                  </span>
                </div>
              </SheetTitle>
              <SheetDescription>
                <div>
                  <div>
                    <ul className="text-lg font-semibold mt-5">
                      <li className="p-5 rounded-md m-2 hover:bg-slate-200 hover:shadow-md hover:ease-in-out hover:duration-100 hover:delay-75">
                        <Link href="/services" onClick={closeSheet}>
                          Service
                        </Link>
                      </li>
                      <li className="p-5 rounded-md m-2 hover:bg-slate-200 hover:shadow-md hover:ease-in-out hover:duration-100 hover:delay-75">
                        <Link href="/about-us" onClick={closeSheet}>
                          About Us
                        </Link>
                      </li>
                      <li className="p-5 rounded-md m-2 hover:bg-slate-200 hover:shadow-md hover:ease-in-out hover:duration-100 hover:delay-75">
                        <Link href="/contact" onClick={closeSheet}>
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* social icons */}
                  <div id="social-icons" className="flex space-x-5 justify-center mt-8">
                    <Link className="hover:bg-slate-200 rounded-md p-3" href="#" onClick={closeSheet}>
                      <FaFacebookF />
                    </Link>
                    <Link className="hover:bg-slate-200 rounded-md p-3" href="#" onClick={closeSheet}>
                      <FaInstagram />
                    </Link>
                    <Link className="hover:bg-slate-200 rounded-md p-3" href="#" onClick={closeSheet}>
                      <FaLinkedin />
                    </Link>
                    <Link className="hover:bg-slate-200 rounded-md p-3" href="#" onClick={closeSheet}>
                      <FaTiktok />
                    </Link>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default MobileNavigation;
