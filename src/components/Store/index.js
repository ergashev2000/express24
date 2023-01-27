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
        <h2 className="store__title">Магазины</h2>
        <div className="restaurant">
          <Swiper
            slidesPerView={5}
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
