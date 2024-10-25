"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const CardsSwipper = () => {
  const [CardsData, SetCardsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/data/CardData.json");
        const data = response.data;
        SetCardsData(data);
      } catch (error) {
        console.error(`Error Fetching CardData : ${error}`);
      }
    };
    getData();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={3} 
      className="max-w-screen-xl mx-auto px-2"
    >
      {CardsData.map((product, index) => (
        <SwiperSlide key={index}>
          <CardComponent product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardsSwipper;
