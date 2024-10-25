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
      <footer className="grid grid-rows-2 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">
        <div className="footer-top grid grid-cols-[101px_287px_217px_217px_294px] justify-between gap-4">
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
            <div className="items contact-icons flex flex-col">
              <p className="flex items-center">
                <span className="h-7 w-7 border border-gray-400 rounded-full shadow-lg flex items-center justify-center mr-2">
                  <GoMail className="m-1 text-customGray text-base" />
                </span>
                <span className="text-customGray text-base">
                  mail@companyname.com
                </span>
              </p>

              <p className="flex items-center">
                <span className="h-7 w-7 border border-gray-400 rounded-full shadow-lg flex items-center justify-center mr-2 mt-1">
                  <FiPhone className="m-1 text-customGray text-base" />
                </span>
                <span className="text-customGray text-base">
                  002010063215487
                </span>
              </p>

              <p className="flex items-center">
                <span className="h-7 w-7 border border-gray-400 rounded-full shadow-lg flex items-center justify-center mr-2 ">
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
            <div className="items flex flex-col">
              <p className="text-customGray text-base my-1">FAQs</p>
              <p className="text-customGray text-base my-1">Contact Us</p>
              <p className="text-customGray text-base my-1">
                Contact Via WhatsApp
              </p>
            </div>
          </div>

          <div className="Policies flex flex-col">
            <div className="Policies-title mb-2">
              <h1 className="text-customheader text-base font-medium">
                Policies
              </h1>
            </div>
            <div className="items flex flex-col">
              <p className="text-customGray text-base my-1">
                Delivery Information
              </p>
              <p className="text-customGray text-base my-1">
                Terms & Conditions
              </p>
              <p className="text-customGray text-base my-1">Privacy Policy</p>
              <p className="text-customGray text-base my-1">
                Returns & Refunds
              </p>
            </div>
          </div>

          <div className="Newsletters flex flex-col">
            <div className="Newsletters-title mb-2">
              <h1 className="text-customheader text-base font-medium">
                Newsletters
              </h1>
            </div>
            <div className="items flex flex-col">
              <p className="font-light text-base text-customGray my-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="relative mt-5">
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
        <div className="footer-bottom text-center mt-4 flex flex-col items-center justify-around">
          <img src="/images/logo.png" alt="Logo" />
          <div className="icons w-1/4 items-center flex  justify-evenly">
            <span className="border border-black cursor-pointer p-1  rounded-full hover:bg-gray-200 transition duration-300">
              <RiTwitterXFill className="text-black" />
            </span>
            <span className="border border-black cursor-pointer p-1  rounded-full hover:bg-gray-200 transition duration-300">
              <FiYoutube className="text-black" />
            </span>
            <span className="border border-black cursor-pointer p-1  rounded-full hover:bg-gray-200 transition duration-300">
              <LiaFacebook className="text-black" />
            </span>
            <span className="border border-black cursor-pointer p-1  rounded-full hover:bg-gray-200 transition duration-300">
              <IoLogoInstagram className="text-black" />
            </span>
          </div>
          <p>© 2024 Copyright Wolf. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
