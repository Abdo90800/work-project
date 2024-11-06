"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../../public/images/image 10.png"; // تأكد أن المسار للصورة صحيح
import img1 from "../../../public/images/image 11.png"; // تأكد أن المسار للصورة صحيح
import img2 from "../../../public/images/image 16.png"; // تأكد أن المسار للصورة صحيح
import img3 from "../../../public/images/image 18.png"; // تأكد أن المسار للصورة صحيح
import img4 from "../../../public/images/image 18.png"; // تأكد أن المسار للصورة صحيح
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslations } from "next-intl";
import Container from '@mui/material/Container';
function Slider() {
  const t = useTranslations("");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const items = [
    { id: 1, image: img, title: "Category Name" },
    { id: 2, image: img1, title: "Category Name" },
    { id: 3, image: img2, title: "Category Name" },
    { id: 4, image: img3, title: "Category Name" },
    { id: 5, image: img4, title: "Category Name" },
    { id: 6, image: img, title: "Category Name" },
    { id: 7, image: img1, title: "Category Name" },
    { id: 8, image: img2, title: "Category Name" },
    { id: 9, image: img3, title: "Category Name" },
    { id: 10, image: img3, title: "Category Name" },
    { id: 11, image: img2, title: "Category Name" },
    { id: 12, image: img, title: "Category Name" },
    { id: 13, image: img4, title: "Category Name" },
    { id: 14, image: img4, title: "Category Name" },
    { id: 15, image: img1, title: "Category Name" },
  ];

  return (
    <Box sx={{width:"100%"}}>
      <Box className="flex items-center justify-between mt-[50px] mx-[10px] mb-[15px] flex-wrap  ">
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            {t("Category button")}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
            {t("Discover")}
          </Typography>
        </Box>

        <Button
          sx={{ background: "#545F71", color: "white" }}
          className="w-[91px] rounded-[10px] "
        >
          {t("View All")}
        </Button>
      </Box>
      <div className="relative flex items-center justify-center">
        <Box
          className="left-shadow"
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "100px",
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
            zIndex: 5,
            pointerEvents: "none", // تعطيل التفاعل مع الظلال
          }}
        />
        <Carousel responsive={responsive} className="sm:w-[1280px] ">
          {items.map((e, index) => (
            <div key={index} className="flex flex-col items-center ">
              <Image
                src={e.image}
                className="rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px]"
              />
              <p className="mt-2 text-center">{t("somecontent")}</p>
            </div>
          ))}
        </Carousel>
        <Box
          className="right-shadow"
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "150px",
            background:
              "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
            zIndex: 5,
            pointerEvents: "none", // تعطيل التفاعل مع الظلال
          }}
        />
      </div>
    </Box>
  );
}

export default Slider;