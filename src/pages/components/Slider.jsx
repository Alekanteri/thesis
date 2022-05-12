import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import "./Slider.scss";

export const Slider = (props) => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    loop={true}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay, Pagination]}
      className="mySwiper"
    style={{width: props.w, height: props.h}}
    >
      {props.children}
    </Swiper>
  );
};
