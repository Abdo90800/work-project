"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imgs1 from "../../../public/images/image4.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useTranslations } from "next-intl";
import Container from "@mui/material/Container";
import { IoIosArrowRoundBack } from "react-icons/io";

import { IoIosArrowRoundForward } from "react-icons/io";

export default function App() {
  const t = useTranslations("");
  const swiperRef = useRef(null);

  return (
    <>
      <div className="mt-8 flex items-center justify-center bg-[#F6F6F6]">
        <Box sx={{ width: "1200px", height: "640px", position: "relative" }}>
          <Swiper
            ref={swiperRef}
            cssMode={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide className="hover:cursor-grab">
              <Image
                src={imgs1}
                alt="Image 1"
                style={{ borderRadius: "16px" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                  width: "716px",
                  height: "164px",
                  gap: "16px",
                }}
              >
                <h1 className="flex items-center justify-center">
                  <div className="border-b-4 border-[#FFFFFF] w-24 rounded-[5px]" />
                  <span className="text-[40px] font-[700] text-[#FFFFFF] mx-4">
                    {t("Carosil2")}
                  </span>
                  <div className="border-b-4 border-[#FFFFFF] w-24 rounded-[5px]" />
                </h1>
                <p className="lg:text-[32px] sm:text-[24px] font-[700] text-[#FFFFFF]">
                  {t("Carosil1")}
                </p>
                <Button
                  style={{
                    background: "linear-gradient(to right, #5AE4CB, #3EABCC)",
                  }}
                  variant="contained"
                  className="hover:bg-[#5AE4CB] rounded-[12px] w-[145px] h-[40] text-[#fff]"
                >
                  {t("ExploreAll")}
                </Button>
              </Box>
            </SwiperSlide>

            <SwiperSlide className="hover:cursor-grab">
              <Image
                src={imgs1}
                alt="Image 1"
                style={{ borderRadius: "16px" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                  width: "716px",
                  height: "164px",
                  gap: "16px",
                }}
              >
                <h1 className="flex items-center justify-center">
                  <div className="border-b-4 border-[#FFFFFF] w-24 rounded-[5px]" />
                  <span className="text-[40px] font-[700] text-[#FFFFFF] mx-4">
                    {t("Carosil2")}
                  </span>
                  <div className="border-b-4 border-[#FFFFFF] w-24 rounded-[5px]" />
                </h1>
                <p className="lg:text-[32px] sm:text-[24px] font-[700] text-[#FFFFFF]">
                  {t("Carosil1")}
                </p>
                <Button
                  style={{
                    background: "linear-gradient(to right, #5AE4CB, #3EABCC)",
                  }}
                  variant="contained"
                  className="hover:bg-[#5AE4CB] rounded-[12px] w-[145px] h-[40] text-[#fff]"
                >
                  {t("ExploreAll")}
                </Button>
              </Box>
            </SwiperSlide>
            <SwiperSlide className="hover:cursor-grab">
              <Image
                src={imgs1}
                alt="Image 1"
                style={{ borderRadius: "16px" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                  width: "716px",
                  height: "164px",
                  gap: "16px",
                }}
              >
                <h1 className="flex items-center justify-center">
                  <div className="border-b-4 border-[#FFFFFF] w-24 rounded-[5px]" />
                  <span className="text-[40px] font-[700] text-[#FFFFFF] mx-4">
                    {t("Carosil2")}
                  </span>
                  <div className="border-b-4 border-[#FFFFFF] w-24 rounded-[5px]" />
                </h1>
                <p className="lg:text-[32px] sm:text-[24px] font-[700] text-[#FFFFFF]">
                  {t("Carosil1")}
                </p>
                <Button
                  style={{
                    background: "linear-gradient(to right, #5AE4CB, #3EABCC)",
                  }}
                  variant="contained"
                  className="hover:bg-[#5AE4CB] rounded-[12px] w-[145px] h-[40] text-[#fff]"
                >
                  {t("ExploreAll")}
                </Button>
              </Box>
            </SwiperSlide>
          </Swiper>

        
          <div
            style={{
              position: "absolute",
              bottom: "10px", 
              right: "10px", 
              display: "flex",
              gap: "12px",
            }}
            className="bg-[#F6F6F6]"
          >
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              variant="contained"
              style={{
                backgroundColor: "#545F71",
                color: "#fff",
                width: "40px",
              }}
              className="flex items-center justify-center w-[40px] h-[40px] rounded-full"
            >
              <IoIosArrowRoundBack className="text-[30px]" />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext() }
              variant="contained"
              style={{
                backgroundColor: "#545F71",
                color: "#fff",
                width: "40px",
              }}
              className="flex items-center justify-center w-[40px] h-[40px] rounded-full"
            >
              <IoIosArrowRoundForward className="text-[30px]" />
            </button>
          </div>
        </Box>
      </div>
    </>
  );
}
