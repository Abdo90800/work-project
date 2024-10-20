"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../../images/image 10.png"; // تأكد أن المسار للصورة صحيح
import img1 from "../../../images/image 11.png"; // تأكد أن المسار للصورة صحيح
import img2 from "../../../images/image 16.png"; // تأكد أن المسار للصورة صحيح
import img3 from "../../../images/image 18.png"; // تأكد أن المسار للصورة صحيح
import img4 from "../../../images/image 18.png"; // تأكد أن المسار للصورة صحيح

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
    { id: 4, image: img3, title: "Category Name" },
    { id: 5, image: img4, title: "Category Name" },
    { id: 6, image: img, title: "Category Name" },
    { id: 7, image: img1, title: "Category Name" },
    { id: 8, image: img2, title: "Category Name" },
    { id: 9, image: img3, title: "Category Name" },
    { id: 10, image: img4, title: "Category Name" },
  ];

  return (
    <div className="flex items-center justify-center">
      <Carousel
        responsive={responsive}
        className="mt-[50px] sm:w-[1280px] "
      >
        {items.map((e, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={e.image}
              className="rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px]"
            />
            <p className="mt-2 text-center">Some content for card</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
