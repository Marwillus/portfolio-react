import React from "react";
import Slider from "./Swiper";

const ProjectSwiper = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  const versteckModal = (e) => {
    if (e.target.id === "modalFrame") {
      props.closeModal();
    }
  };
  const settings = {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 90, // Slide rotate in degrees
      stretch: 40, // Stretch space between slides (in px)
      depth: 300, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false, // Enables slides shadows
    },
  };
  const data = [...Array(10).keys()];

  return (
    <div
      id={"modalFrame"}
      className={showHideClassName}
      onClick={(e) => versteckModal(e)}
    >
      <section className={"swiper-main"}>
        {/* <Swiper
          // effect={"coverflow"}
          spaceBetween={50}
          // pagination={{ el: ".swiper-pagination" }}
        >
          {props.projects.map((project, index) => {
            <SwiperSlide>
              <div
                className="project-img"
                style={{ backgroundImage: project.mainImage }}
              >
                <div className="project-info">
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </SwiperSlide>;
          })}

          <div class="swiper-pagination"></div>
        </Swiper> */}
        <Slider settings={settings}>
          {data.map((item) => (
            <img src="https://picsum.photos/200/300" key={item} alt="swipe" />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default ProjectSwiper;
