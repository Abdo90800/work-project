"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";
const CardsSwipper = () => {
  const [CardsData, SetCardsData] = useState([]);
  const t = useTranslations("")
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/data/CardData.json");
        const data = response.data;
        SetCardsData(data);
      } catch (error) {
        console.error(`Error Fetching CardData: ${error}`);
      }
    };
    getData();
  }, []);

  return (
    <section className="Swipper-Cards text-center bg-[#F6F6F6] pb-6 mb-10">
      <div className="title py-8">
        <h1 className="font-bold text-xl text-customheader">
          {t("ourClient")}
        </h1>
        <p className="font-medium text-sm text-customGray">
         {t("lorem")}
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3} // عدد الشرائح في العرض الواحد
        breakpoints={{
          640: {
            slidesPerView: 2, // عرض 2 شرائح للشاشات الصغيرة
          },
          768: {
            slidesPerView: 3, // عرض 3 شرائح للشاشات المتوسطة والكبيرة
          },
        }}
        className="max-w-screen-xl mx-auto px-2"
      >
        {CardsData.map((product, index) => (
          <SwiperSlide key={index}>
            <CardComponent product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CardsSwipper;
