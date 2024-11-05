import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const BlogRate = () => {
  return (
    <section className="blog-frame max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 my-24">
      <div className="container w-full h-auto lg:h-[202px] bg-custom-gradient flex flex-col justify-around items-center rounded-md p-4 lg:p-0">
        <h1 className="text-white font-bold text-lg lg:text-xl">
          Was this helpful?
        </h1>
        <div className="icons w-full lg:w-[188px] flex items-center justify-around gap-3">
          <button className="h-[40px] w-full bg-[#EFFBFF] rounded-md flex justify-center items-center">
            <AiOutlineDislike className=" text-customheader text-xl" />
            <span className="p-1 text-customheader">No</span>
          </button>

          <button className="h-[40px] w-full bg-[#6C788B] rounded-md flex justify-center items-center">
            <AiOutlineLike className=" text-gray-300 text-xl" />
            <span className="p-1 font-normal text-white">Yes</span>
          </button>
        </div>
        <p className="font-normal text-customheader">
          28 out of 52 found this helpful
        </p>
      </div>
    </section>
  );
};
export default BlogRate;
