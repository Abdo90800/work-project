"use client";
// Icons from ReactIcons Library
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { LiaFacebook } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">
        {/* القسم العلوي من الفوتر */}
        <div className="footer-top grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-8">
          <div className="All flex flex-col">
            <div className="all-header mb-2">
              <h1 className="text-customheader text-base">All</h1>
            </div>
            <div className="items flex flex-col">
              <p className="my-1 text-customGray text-base">Home</p>
              <p className="my-1 text-customGray text-base">About Us</p>
              <p className="my-1 text-customGray text-base">Contact Us</p>
            </div>
          </div>

          <div className="contact-us flex flex-col">
            <div className="contact-title h-6 mb-2">
              <h1 className="text-customheader text-base font-medium">
                Contact Us
              </h1>
            </div>
            <div className="items contact-icons flex flex-col space-y-2">
              <p className="flex items-center">
                <span className="h-7 w-7 border border-gray-400 rounded-full shadow-lg flex items-center justify-center mr-2">
                  <GoMail className="m-1 text-customGray text-base" />
                </span>
                <span className="text-customGray text-base">
                  mail@companyname.com
                </span>
              </p>

              <p className="flex items-center">
                <span className="h-7 w-7 border border-gray-400 rounded-full shadow-lg flex items-center justify-center mr-2">
                  <FiPhone className="m-1 text-customGray text-base" />
                </span>
                <span className="text-customGray text-base">
                  002010063215487
                </span>
              </p>

              <p className="flex items-center">
                <span className="h-7 w-7 border border-gray-400 rounded-full shadow-lg flex items-center justify-center mr-2">
                  <CiLocationOn className="m-1 text-customGray text-base" />
                </span>
                <span className="text-customGray text-base">
                  Location, Lorem Ipsum is simply dummy text of the printing.
                </span>
              </p>
            </div>
          </div>

          <div className="Customer Service flex flex-col">
            <div className="customer-title mb-2">
              <h1 className="text-customheader text-base font-medium">
                Customer Service
              </h1>
            </div>
            <div className="items flex flex-col space-y-2">
              <p className="text-customGray text-base">FAQs</p>
              <p className="text-customGray text-base">Contact Us</p>
              <p className="text-customGray text-base">Contact Via WhatsApp</p>
            </div>
          </div>

          <div className="Policies flex flex-col">
            <div className="Policies-title mb-2">
              <h1 className="text-customheader text-base font-medium">
                Policies
              </h1>
            </div>
            <div className="items flex flex-col space-y-2">
              <p className="text-customGray text-base">Delivery Information</p>
              <p className="text-customGray text-base">Terms & Conditions</p>
              <p className="text-customGray text-base">Privacy Policy</p>
              <p className="text-customGray text-base">Returns & Refunds</p>
            </div>
          </div>

          <div className="Newsletters flex flex-col">
            <div className="Newsletters-title mb-2">
              <h1 className="text-customheader text-base font-medium">
                Newsletters
              </h1>
            </div>
            <div className="items flex flex-col space-y-4">
              <p className="font-light text-base text-customGray">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-transparent h-12 text-sm border-b-2 border-[#3AA6CD] rounded-none pl-3 pr-32 py-2 transition duration-300 ease focus:outline-none focus:border-transparent shadow-sm focus:shadow-none"
                  placeholder="Email Address"
                />
                <button
                  className="absolute right-0 top-0 bottom-0 m-auto h-12 flex items-center justify-center border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <img
                    src="/images/SighnUp-btn.png"
                    className="w-24 h-auto bg-cover"
                    alt="Sign Up"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* القسم السفلي من الفوتر */}
        <div className="footer-bottom text-center mt-8 flex flex-col items-center justify-around space-y-4">
          <img src="/images/logo.png" alt="Logo" className="w-28 h-auto" />
          <div className="icons flex items-center space-x-4">
            <span className="border border-black cursor-pointer p-1 rounded-full hover:bg-gray-200 transition duration-300">
              <RiTwitterXFill className="text-black" />
            </span>
            <span className="border border-black cursor-pointer p-1 rounded-full hover:bg-gray-200 transition duration-300">
              <FiYoutube className="text-black" />
            </span>
            <span className="border border-black cursor-pointer p-1 rounded-full hover:bg-gray-200 transition duration-300">
              <LiaFacebook className="text-black" />
            </span>
            <span className="border border-black cursor-pointer p-1 rounded-full hover:bg-gray-200 transition duration-300">
              <IoLogoInstagram className="text-black" />
            </span>
          </div>
          <p className="text-sm text-customGray">© 2024 Copyright Wolf. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
