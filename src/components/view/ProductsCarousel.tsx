"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { oneProductType } from "../utils/productDataAndTypes";
import Card from "../shared/Card";
const SwiperComp: FC<{ ProductData: Array<oneProductType> }> = ({
  ProductData,
}) => {
  let dataToItrate = ProductData.slice(0, 15);
  return (
    <div className="space-y-4 px-6 mt-24">
      <div className="text-center space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-center text-[#0062f5] ">
          PRODUCTS
        </h3>
        <h3 className="text-center text-3xl font-bold tracking-wider">
          Our Products
        </h3>
      </div>

      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={0}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {dataToItrate.map((item: oneProductType, index: number) => (
          <SwiperSlide key={index}>
            <Card singleProductData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
