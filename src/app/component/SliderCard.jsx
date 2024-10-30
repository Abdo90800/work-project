"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiDiscountPercentFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import items from "../../data/item";
import { useTranslations } from "next-intl";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
function Slider() {
  const t = useTranslations("");

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
      <Box className="flex items-center justify-between mt-[50px] mx-20 mb-[15px]">
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
          {t("Category button")}

          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
          {t("Discover")}.
          </Typography>
        </Box>

        <Link href="/filterProduct">
          <Button
            sx={{ background: "#545F71", color: "white" }}
            className="w-[91px] rounded-[10px]"
          >
        {t("View All")}
          </Button>
        </Link>
      </Box>

      <div className="flex items-center justify-center">
        <Carousel
          responsive={responsive}
          centerMode={true} // يضمن بقاء الكارد المركزي بين الأسهم
          className=" w-[1280px] flex justify-center"
        >
          {items.map((e) => (
            <div
              key={e.id}
              className="group relative block overflow-hidden lg:w-[416px] lg:h-[590px] sm:w-[200px] sm:h-[450px] md:w-[300px] md:h-[450px]  rounded-[16px] gap-[8px]"
            >
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
                className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative p-6 bg-white border border-gray-100">
                <p className="text-gray-700">
                  ${e.price}
                  <span className="text-gray-400 line-through">$80</span>
                </p>

                <h3 className="mt-1.5 text-lg font-medium text-gray-900">
                  {e.title}
                </h3>

                <form className="flex gap-4 mt-4">
                  <button
                    style={{
                      background: "linear-gradient(to right, #5AE4CB, #3EABCC)",
                    }}
                    type="button"
                    className="w-[116px] h-[40px] rounded-[10px]  bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                {t("Order Now")}
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
