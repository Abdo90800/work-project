"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

function SwipperBlog() {
  const items = [
    {
      id: 1,
      img: "/images/blog-swipper-4.png",
      title: "Featured article title",
      rate: "/images/ratingSwipper.png",
      para: "Short blurb or introduction to the article’s subject matter",
    },
    {
      id: 2,
      img: "/images/blog-swipper-1.png",
      title: "Featured article title",
      rate: "/images/ratingSwipper.png",
      para: "Short blurb or introduction to the article’s subject matter",
    },
    {
      id: 3,
      img: "/images/blog-swipper-2.png",
      title: "Featured article title",
      rate: "/images/ratingSwipper.png",
      para: "Short blurb or introduction to the article’s subject matter",
    },
    {
      id: 4,
      img: "/images/blog-swipper-3.png",
      title: "Featured article title",
      rate: "/images/ratingSwipper.png",
      para: "Short blurb or introduction to the article’s subject matter",
    },
    {
      id: 5,
      img: "/images/blog-swipper-4.png",
      title: "Featured article title",
      rate: "/images/ratingSwipper.png",
      para: "Short blurb or introduction to the article’s subject matter",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <Swiper
          navigation
          modules={[Navigation]}
          className="w-full max-w-screen-xl mx-auto"
          spaceBetween={20}
          slidesPerView={1} // عرض شريحة واحدة على الشاشات الصغيرة بشكل افتراضي
          breakpoints={{
            640: {
              slidesPerView: 3, // شريحتين على الشاشات المتوسطة
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // ثلاث شرائح على الشاشات الكبيرة
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4, // أربع شرائح على الشاشات الأكبر
              spaceBetween: 40,
            },
          }}
        >
          {items.map((e) => (
            <SwiperSlide key={e.id} className="group relative">
              <div className="block w-full sm:w-[200px] lg:w-[300px] border border-[#D3D3D3] rounded-[16px] gap-[8px] h-auto lg:h-[370px]">
                <div className="relative overflow-hidden rounded-t-[16px] w-full">
                  <Image
                    src={e.img}
                    alt="photo"
                    className="w-full h-[200px] object-cover transition duration-500 group-hover:scale-105"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="p-3 flex flex-col gap-3">
                  <h1 className="font-semibold text-base sm:text-sm md:text-lg text-customheader">
                    {e.title}
                  </h1>
                  <p className="font-normal text-xs sm:text-sm text-customGray">
                    {e.para}
                  </p>
                  <button className="w-full h-[40px] border border-[#6C788B] font-medium bg-customheader text-white rounded-md text-xs sm:text-sm">
                    View article
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SwipperBlog;
