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
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
function Slider() {
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
    <>
      <Box className="flex items-center justify-between mt-[50px] mx-20 mb-[15px]">
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Our Categories:
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "500", }} >
            Discover our stunning Categories to transform your space.
          </Typography>
        </Box>

        <Button sx={{background:"#545F71" , color:"white"}} className="w-[91px] rounded-[10px] ">View All</Button>
      </Box>
      <div className="flex items-center justify-center">
        <Carousel responsive={responsive} className=" sm:w-[1280px] ">
          {items.map((e, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={e.image}
                className="rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px]"
              />
              <p className="mt-2 text-center">Some contentt for card</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
