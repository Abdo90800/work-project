import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Image from "next/image";
import SwipperBlog from "./SwipperBlog";

const BlogDetails = () => {
  return (
    <section className="blog-details max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <header className="my-8">
        <h1 className="text-left text-customheader font-bold text-lg sm:text-xl lg:text-2xl">
          Blog details
        </h1>
        <span className="border w-full border-[#EAEEF0] flex my-2"></span>
      </header>

      <main className="flex flex-col lg:flex-row gap-3">
        <div className="img-container w-full lg:w-auto">
          <Image
            src="/images/BlogPhoto.png"
            alt="blogImg"
            width={416}
            height={292}
            className="w-full h-auto lg:w-[416px]"
          />
        </div>
        <aside className="flex-1 h-auto lg:h-[391px]">
          <div className="title">
            <h1 className="text-left text-customheader font-bold text-lg sm:text-xl lg:text-2xl">
              Featured article title
            </h1>
            <h2 className="text-left text-customGray font-normal text-sm sm:text-base lg:text-lg">
              Updated on 14th January, 2024
            </h2>
            <span className="border w-full border-[#545F71] flex my-2"></span>
            <div className="paragraphs flex flex-col gap-5">
              <p className="text-customGray font-normal leading-3 text-sm sm:text-base lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-customGray font-normal leading-3 text-sm sm:text-base lg:text-base">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
              </p>
              <p className="text-customGray font-normal leading-3 text-sm sm:text-base lg:text-base">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
            </div>
          </div>
        </aside>
      </main>

      {/* قسم التقييم */}
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

      {/* المقالات ذات الصلة */}
      <header className="my-8">
        <h1 className="text-left text-customheader font-bold text-lg sm:text-xl lg:text-2xl">
          Related Articles:
        </h1>
      </header>
      <SwipperBlog />
    </section>
  );
};

export default BlogDetails;
