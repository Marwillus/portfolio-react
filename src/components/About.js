const About = (props) => {
  return (
    <section className={"about"} id={"about"}>
      <div className={"about-text"}>
        I love being a part of the journey from an idea being born to becoming
        an actual thing. While I was working in various jobs I did accompanied
        this process a lot of times. I could construct you a shop, craft the
        products in it and finally build a webshop for it.
        <br /> Feel free to contact me if you're interested in the stuff I made
        or if you want to collab.
      </div>
      <div className={"about-button"} onClick={props.openModal}>
        <h1>My</h1>
        <h1>Skillz</h1>
      </div>
      <div className={"about-button"} onClick={props.openModal}>
        <h1>My</h1>
        <h1>Style</h1>
      </div>
    </section>
  );
};

export default About;
