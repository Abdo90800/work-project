import Image from "next/image";
const BlogHead = () => {
  return (
    <section className="blog-header max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
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
    </section>
  );
};
export default BlogHead;
