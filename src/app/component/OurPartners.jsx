"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const OurPartners = () => {
  return (
    <section className="our-partners max-w-screen-xl mx-auto py-5">
      <div className="title text-center mb-5">
        <h1 className="font-bold text-xl text-customheader">Our Partners</h1>
        <p className="font-medium text-sm text-customGray">
          Lorem ipsum dolor sit amet, consectetur elit
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={6}
      >
        <SwiperSlide>
          <img src="/images/Group.png" alt="Group" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Pringles.png" alt="Pringles" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Pfizer.png" alt="Pfizer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Nestlé.png" alt="Nestlé" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Spotify.png" alt="Spotify" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/airbnb.png" alt="Airbnb" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/H&M.png" alt="H&M" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/virgin.png" alt="Virgin" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OurPartners;
