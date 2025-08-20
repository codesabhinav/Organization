"use client";

import React from "react";
import HeaderSlide1 from "./HeaderSlide1";
import { headingTexts } from "../../seeds/HeadingSlider1.seeds";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function HeaderSlider() {
  return (
    <>
      <div className="tz-text-slider ">
        <div className="swiper-wrapper">
          <Swiper
            className="tz-brand2-slider"
            modules={[Autoplay]}
            spaceBetween={20}
            speed={4000}
            slidesPerView={3}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            loop={true}
            freeMode={false}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 6,
                spaceBetween: 35,
              },
            }}
          >
            {headingTexts.map((text, index) => (
              <SwiperSlide key={index}>
                <HeaderSlide1 text={text} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeaderSlider;
