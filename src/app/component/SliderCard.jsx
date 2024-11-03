"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { CiHeart } from "react-icons/ci";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

function Slider() {
  const items = [
    {
      id: 1,
      img: "/images/swipper-1.png",
      title: "Product Name",
      rate: "/images/ratingSwipper.png",
    },
    {
      id: 2,
      img: "/images/swipper-2.png",
      title: "Product Name",
      rate: "/images/ratingSwipper.png",
    },
    {
      id: 3,
      img: "/images/swipper-3.png",
      title: "Product Name",
      rate: "/images/ratingSwipper.png",
    },
    {
      id: 4,
      img: "/images/swipper-1.png",
      title: "Product Name",
      rate: "/images/ratingSwipper.png",
    },
    {
      id: 5,
      img: "/images/swipper-2.png",
      title: "Product Name",
      rate: "/images/ratingSwipper.png",
    },
    {
      id: 6,
      img: "/images/swipper-3.png",
      title: "Product Name",
      rate: "/images/ratingSwipper.png",
    },
  ];

  return (
    <>
      <Box className="flex items-center justify-between mt-[50px] mb-[15px] max-w-screen-xl mx-auto">
        <Box>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "700", color: "#545F71" }}
          >
            Best selling:
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "#757575" }}
          >
            Our products offer the perfect blend of customization, quality, and
            affordability.
          </Typography>
        </Box>

        <Link href="/filterProduct">
          <Button
            sx={{ background: "#545F71", color: "white" }}
            className="w-[91px] rounded-[10px]"
          >
            View All
          </Button>
        </Link>
      </Box>

      <div className="flex items-center justify-center">
        <Swiper
          navigation
          modules={[Navigation]}
          className="w-full max-w-screen-xl mx-auto"
          spaceBetween={30} // زيادة المسافة بين الصور
          slidesPerView={2}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20, // المسافة بين الشرائح في الشاشات الصغيرة
            },
            464: {
              slidesPerView: 2,
              spaceBetween: 30, // المسافة بين الشرائح في الشاشات المتوسطة
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30, // المسافة بين الشرائح في الشاشات الكبيرة
            },
            3000: {
              slidesPerView: 3,
              spaceBetween: 30, // المسافة بين الشرائح في الشاشات الكبيرة جدًا
            },
          }}
        >
          {items.map((e) => (
            <SwiperSlide key={e.id} className="relative group">
              <div className="relative block w-full lg:w-[416px] sm:w-[300px] rounded-[16px] gap-[8px] lg:h-[590px] md:h-[450px] sm:h-[300px]">
                <div className="row-span-2">
                  <button className="absolute end-3 top-3 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                    <span className="sr-only">Wishlist</span>
                    <CiHeart className="text-[26.18px]" />
                  </button>
                  <div className="w-[416px] h-[480px] relative overflow-hidden rounded-t-[16px]">
                    <Image
                      src={e.img}
                      alt="photo"
                      className="w-[100%] transition duration-500 group-hover:scale-105"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>

                <div className="absolute bg-white border border-[#D3D3D3] rounded-b-xl pl-4 pt-1 z-10 w-full h-auto bottom-5">
                  <p className="text-customheader">{e.title}</p>
                  <div className="mt-1.5 text-lg font-medium text-gray-900">
                    <img src={e.rate} alt="photo" />
                  </div>

                  <form className="flex">
                    <button
                      style={{
                        background:
                          "linear-gradient(to right, #5AE4CB, #3EABCC)",
                      }}
                      type="button"
                      className="w-[116px] h-[40px] rounded-[10px] bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 ml-auto mr-2 mb-2"
                    >
                      Order Now
                    </button>
                  </form>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
