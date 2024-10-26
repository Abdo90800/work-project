"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiDiscountPercentFill } from "react-icons/ri";
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
        <Carousel
          responsive={responsive}
          centerMode={true}
          className="w-full max-w-screen-xl mx-auto"
        >
          {items.map((e) => (
            <div
              key={e.id}
              className="group relative block w-full lg:w-[416px] sm:w-[300px] mx-2 rounded-[16px] gap-[8px] grid-rows-2 lg:h-[590px] md:h-[450px] sm:h-[300px]"
            >
              <div className="row-span-2">
                <button className="absolute end-3 top-3 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>
                  <CiHeart className="text-[26.18px]" />
                </button>
                {/* ProductImage */}
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

              {/*  Card Description */}
              <div className="absolute bg-white border border-[#D3D3D3] rounded-b-xl pl-4 pt-1 z-10 w-full h-auto bottom-5 row-span-1">
                <p className="text-customheader">{e.title}</p>
                <div className="mt-1.5 text-lg font-medium text-gray-900">
                  <img src={e.rate} alt="photo" />
                </div>

                <form className="flex">
                  <button
                    style={{
                      background: "linear-gradient(to right, #5AE4CB, #3EABCC)",
                    }}
                    type="button"
                    className="w-[116px] h-[40px] rounded-[10px] bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 ml-auto mr-2 mb-2"
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
