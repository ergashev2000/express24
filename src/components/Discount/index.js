import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import Product from "../../assets/images/product.jpg";

const index = () => {
  return (
    <>
      <section className="container">
        <div className="discount">
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            slidesPerGroup={1}
            loop={false}
            navigation={true}
            modules={[Navigation]}
            allowTouchMove={true}
            className="mySwiper"
          >
            <SwiperSlide className="swiper__class">
              <a href="#">
                <img src={Product} alt="Product" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper__class">
              <a href="#">
                <img src={Product} alt="Product" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper__class">
              <a href="#">
                <img src={Product} alt="Product" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper__class">
              <a href="#">
                <img src={Product} alt="Product" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper__class">
              <a href="#">
                <img src={Product} alt="Product" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper__class">
              <a href="#">
                <img src={Product} alt="Product" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper__class">
              <a href="#">
                <img src={Product} alt="Product" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper__class">
              <a href="#">
                <img src={Product} alt="Product" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default index;
