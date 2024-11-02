import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import MapComponent from "./MapComponent";

const ContactUs = () => {
  return (
    <section className="contact-us max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <header className="my-8">
        <h1 className="text-left text-customheader font-bold">Contact Us</h1>
        <span className="border w-full border-[#EAEEF0] flex my-2"></span>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-10">
        <div className="img-container lg:w-[476px] lg:h-[397px] md:w-full md:h-full w-full h-full col-span-1 md:col-span-2">
          <Image
            src="/images/contact.png"
            alt="contact-image"
            width={476}
            height={397}
            className="object-cover w-full h-full"
          />
        </div>

        <aside className="flex justify-center items-center w-full h-auto col-span-1 md:col-span-3">
          <form className="bg-white p-8 w-full max-w-full md:max-w-[740px] h-auto rounded-md shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-formColor font-normal mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-formColor font-normal mb-2"
                >
                  E-mail Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-formColor font-normal mb-2"
                >
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="+02"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-formColor font-normal mb-2"
                >
                  Service:
                </label>
                <input
                  type="text"
                  id="service"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter the service"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                className="block text-formColor font-normal mb-2"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter the subject"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-formColor font-normal mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="w-[164px] h-[40px] flex justify-center items-center bg-[#545F71] hover:bg-[#545f71e6] border border-[#6C7888] text-white font-normal rounded-md transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </aside>
      </main>

      <div className="icons bg-gray-100 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
          {/* Phone */}
          <div className="w-full h-auto p-5 bg-white rounded-xl flex gap-4 items-center shadow-lg">
            <div className="icon w-[60px] h-[60px] bg-gradient-to-l from-[#5AE4CB] to-[#3EABCC] flex justify-center items-center rounded-md">
              <FaPhone className="text-white text-2xl" />
            </div>
            <div className="description flex-1">
              <h1 className="text-customheader font-medium">Phone</h1>
              <p className="font-light text-[#8E8E8E]">002010063215487</p>
            </div>
          </div>

          {/* Location */}
          <div className="w-full h-auto p-5 bg-white rounded-xl flex gap-4 items-center shadow-lg">
            <div className="icon w-[60px] h-[60px] bg-gradient-to-l from-[#5AE4CB] to-[#3EABCC] flex justify-center items-center rounded-md">
              <IoLocationSharp className="text-white text-2xl" />
            </div>
            <div className="description flex-1">
              <h1 className="text-customheader font-medium">Address</h1>
              <p className="font-light text-[#8E8E8E]">
                Location, Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="w-full h-auto p-5 bg-white rounded-xl flex gap-4 items-center shadow-lg">
            <div className="icon w-[60px] h-[60px] bg-gradient-to-l from-[#5AE4CB] to-[#3EABCC] flex justify-center items-center rounded-md">
              <MdOutlineMail className="text-white text-2xl" />
            </div>
            <div className="description flex-1">
              <h1 className="text-customheader font-medium">Email</h1>
              <p className="font-light text-[#8E8E8E]">mail@companyname.com</p>
            </div>
          </div>
        </div>
      </div>
      <MapComponent />
    </section>
  );
};

export default ContactUs;
