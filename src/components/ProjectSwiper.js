import React from "react";
import Swiper from "react-id-swiper";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const ProjectSwiper = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  const versteckModal = (e) => {
    if (e.target.id === "modalFrame") {
      props.closeModal();
    }
  };

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
    <div
      id={"modalFrame"}
      className={showHideClassName}
      onClick={(e) => versteckModal(e)}
    >
      <section className={"swiper-main"}>
        <Swiper {...params}>
          {props.projects.map((project, index) => (
            <div key={index}>
              <div
                className="project-img"
                style={{
                  backgroundImage: `url(${index + 1}.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {" "}
              </div>
              <div className="project-info">
                <h1>{project.name}Project</h1>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default ProjectSwiper;
