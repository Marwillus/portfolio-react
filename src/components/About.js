import "./styles/about.css";

const About = (props) => {
  return (
    <section className={"about"} id={"about"}>
      <div className={"about-text"}>
        I love being a part of the journey from an idea being born to becoming
        an actual thing. While I was working in various jobs I did accompanied
        this process a lot of times. I'm able to construct a shop, craft the
        products in it and in a few month I got the skills to build a webshop
        for it.
        <br /> Feel free to contact me if you're interested in the stuff I made
        or if you want to collab.
      </div>
      <div className={"about-button"} onClick={props.openSwiper}>
        <h1>MyStyle</h1>
      </div>
      <div className={"about-button"} onClick={props.openModal}>
        <h1>MySkills</h1>
      </div>
    </section>
  );
};

export default About;
