import React from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "./styles/modals.css";

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
    shouldSwiperUpdate: true,
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
    themeColor: "#f4f4f4",
  };
  return (
    <div
      id={"modalFrame"}
      className={showHideClassName}
      onClick={(e) => versteckModal(e)}
    >
      <section className={"swiper-main"}>
        <Swiper {...params}>
          <div className={"swiper-intro"}>
            <div className="project-intro-img"></div>
            <div className="project-intro-info">
              <img src="logo_nobg.svg" alt="logo" />
              <p>
                Over the past years I created a lot of stuff. Furniture,
                Gadgets, everything I was interested in and mostly to learn new
                skills during the crafting-process. I present you a few projects
                I build in my sparetime of and I hope you like them as much as i
                do.
              </p>
            </div>
          </div>
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
                <h1>{project.name}</h1>
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
