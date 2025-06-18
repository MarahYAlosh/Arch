import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideItem } from "./SlideItem";
import { Slides } from "../utils/data";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect="fade"
      loop
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", height: "100vh" }}
    >
      {Slides.map((slide, index) => (
        <SwiperSlide key={index}>
<SlideItem {...slide} height="100vh" />

        </SwiperSlide>
      ))}
    </Swiper>
  );
};
