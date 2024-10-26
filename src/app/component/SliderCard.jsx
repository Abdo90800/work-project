"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import img from "../../../images/card2.png"; // تأكد أن المسار للصورة صحيح
// import img1 from "../../../images/card1.png"; // تأكد أن المسار للصورة صحيح
// import img2 from "../../../images/card3.png"; // تأكد أن المسار للصورة صحيح
import { RiDiscountPercentFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
// import items from "../../data/item";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
function Slider() {
  const items = [
    {
      img: "/images/swipper-1.png",
      title: "Product Name",
      rate: "/images/ratingSwipper.png",
    },
    {
      img: "/images/swipper-2.png",
      title: "Product Name",
      rate: "/images/ratingSwipper.png",
    },
    {
      img: "/images/swipper-3.png",
      title: "Product Name",
      rate: "/images/ratingSwipper.png",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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

  // const item = [
  //   { id: 1, image: img, title: "Category Name" },
  //   { id: 2, image: img1, title: "Category Name" },
  //   { id: 3, image: img2, title: "Category Name" },
  //   { id: 4, image: img, title: "Category Name" },
  //   { id: 5, image: img1, title: "Category Name" },
  //   { id: 6, image: img2, title: "Category Name" },
  //   { id: 7, image: img, title: "Category Name" },
  //   { id: 8, image: img1, title: "Category Name" },
  //   { id: 9, image: img2, title: "Category Name" },
  // ];

  return (
    <>
      <Box className="flex items-center justify-between mt-[50px]  mb-[15px] max-w-screen-xl mx-auto ">
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
      <div className="flex items-center justify-center">
  <Carousel
    responsive={responsive}
    centerMode={true} // يضمن بقاء الكارد المركزي بين الأسهم
    className="w-[1280px] flex justify-center"
  >
    {items.map((e) => (
      <div
        key={e.id}
        className="group relative block lg:w-[416px] lg:h-[590px] sm:w-[200px] sm:h-[450px] md:w-[300px] md:h-[450px] rounded-[16px] gap-[8px]"
      >
        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>
          <CiHeart className="text-[26.18px]" />
        </button>

        {/* صورة المنتج */}
        <div className="w-[416px] h-[480px] relative overflow-hidden">
          <Image
            src={e.img}
            alt="photo"
            className="w-full h-full transition duration-500 group-hover:scale-105 sm:h-72 absolute"
            fill
          />
        </div>

        {/* محتوى الكارد */}
        <div className="absolute bg-white border border-[#D3D3D3] rounded-b-xl pl-4 pt-1 z-10 w-full h-24 bottom-5">
          {/* النص والـ Rating */}
          <p className="text-customheader">{e.title}</p>
          <div className="mt-1.5 text-lg font-medium text-gray-900">
            <img src={e.rate} alt="photo" />
          </div>

          {/* الزرار المعدل */}
          <form className="flex">
            <button
              style={{
                background: "linear-gradient(to right, #5AE4CB, #3EABCC)",
              }}
              type="button"
              className="w-[116px] h-[40px] rounded-[10px] bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 ml-auto mr-4"
            >
              Order Now
            </button>
          </form>
        </div>
      </div>
    ))}
  </Carousel>
</div>

      </div>
    </>
  );
}

export default Slider;
