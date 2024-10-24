"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../../images/card2.png"; // تأكد أن المسار للصورة صحيح
import img1 from "../../../images/card1.png"; // تأكد أن المسار للصورة صحيح
import img2 from "../../../images/card3.png"; // تأكد أن المسار للصورة صحيح
import { RiDiscountPercentFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
function Slider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = [
    { id: 1, image: img, title: "Category Name" },
    { id: 2, image: img1, title: "Category Name" },
    { id: 3, image: img2, title: "Category Name" },
    { id: 4, image: img, title: "Category Name" },
    { id: 5, image: img1, title: "Category Name" },
    { id: 6, image: img2, title: "Category Name" },
    { id: 7, image: img, title: "Category Name" },
    { id: 8, image: img1, title: "Category Name" },
    { id: 9, image: img2, title: "Category Name" },
  ];

  return (
    <>
      <Box className="flex items-center justify-between mt-[50px] mx-20 mb-[15px]">
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Our Categories:
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
            Discover our stunning Categories to transform your space.
          </Typography>
        </Box>

        <Button
          sx={{ background: "#545F71", color: "white" }}
          className="w-[91px] rounded-[10px] "
        >
          View All
        </Button>
      </Box>

      <div className="flex items-center justify-center">
        <Carousel responsive={responsive} className=" sm:w-[1280px] ">
          {items.map((e, index) => (
            <div className="group relative block overflow-hidden w-[416px] h-[590px] rounded-[16px] gap-[8px]">
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>
                <CiHeart className="text-[26.18px]" />
              </button>{" "}
              <button className="absolute left-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <div className="w-[105px] h-[40] bg-white rounded-[20px] p-[8px] gap-[4px] flex items-center">
                  <RiDiscountPercentFill className="text-[#9B0202] text-[24px] " />
                  <span className="text-[#9B0202]">15% off</span>
                </div>
              </button>
              <Image
                src={e.image}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <p className="text-gray-700">
                  $49.99
                  <span className="text-gray-400 line-through">$80</span>
                </p>

                <h3 className="mt-1.5 text-lg font-medium text-gray-900">
                  {e.title}
                </h3>

                <form className="mt-4 flex gap-4">
                  <button
                    style={{
                      background: "linear-gradient(to right, #5AE4CB, #3EABCC)",
                    }}
                    type="button"
                    className="w-[116px] h-[40px] rounded-[10px]  bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                    Order Now
                  </button>
                </form>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
