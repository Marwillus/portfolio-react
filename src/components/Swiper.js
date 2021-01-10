import React from "react";
import Swiper from "react-id-swiper";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import Bild1 from "./Trees/1.jpg";
import Bild2 from "./Trees/2.jpg";
import Bild3 from "./Trees/3.jpg";
import Bild4 from "./Trees/4.jpg";
import Bild5 from "./Trees/5.jpg";

import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const CoverflowEffect = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 70,
      stretch: 60,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <Swiper {...params}>
      <img src={Bild1} alt="" key="1" />
      <img src={Bild2} alt="" key="2" />
      <img src={Bild3} alt="" key="3" />
      <img src={Bild4} alt="" key="4" />
      <img src={Bild5} alt="" key="5" />
    </Swiper>
  );
};
export default CoverflowEffect;
