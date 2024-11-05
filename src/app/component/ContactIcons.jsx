import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
const ContactIcons = () => {
  return (
    <section className="contact-icons bg-gray-100 ">
      <div className="icons py-8 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
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
    </section>
  );
};
export default ContactIcons;
