"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@mui/material/Container";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
import imgs1 from "../../../images/image4.png";
import { useTranslations } from "next-intl";

// import required modules
import { Pagination } from "swiper/modules";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function carousel() {
  const t = useTranslations("");

  return (
    <Container className="mt-8">
      <Box sx={{ width: "1,376px", height: "640px" }}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper rounded-xl"
        >
          <SwiperSlide className="hover:cursor-grab">
            <Image src={imgs1} alt="Image 1" />
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
              <h1 className="text-[40px] font-[700]  text-[#FFFFFF]">
                {t("Carosil2")}
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
            <Image src={imgs1} alt="Image 1" />
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
              <h1 className="text-[40px] font-[700]  text-[#FFFFFF]">
                {t("Carosil2")}
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
            <Image src={imgs1} alt="Image 1" />

            <Box className="absolute top-[30%] left-[50%] translate(-50%, -50%) text-center w-[716px] h-[164] gap-[16px]">
              <h1 className="text-[40px] font-[700]  text-[#FFFFFF]">
                {t("Carosil2")}
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
      </Box>
    </Container>
  );
}

export default carousel;
