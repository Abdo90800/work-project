import { IoMdArrowDropright } from "react-icons/io";
const ContactFrame = () => {
  return (
    <section className="contact-frame bg-[#F6F6F6] h-[66px]">
      <div className="container max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 flex items-center h-full gap-1">
        <h1 className="text-[14px] font-light">Home</h1>
        <span className="text-4xl text-[#5AE4CB]">
          <IoMdArrowDropright />
        </span>
        <h1 className="text-[14px] font-normal">Contact Us</h1>
      </div>
    </section>
  );
};
export default ContactFrame;
