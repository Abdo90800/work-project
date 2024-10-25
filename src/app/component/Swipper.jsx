// components/SliderComponent.js
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export default function SliderComponent({ cards }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="card bg-white p-4 rounded-lg shadow-md">
            <img src={card.image} alt={card.title} className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
