const About = (props) => {
  return (
    <section className={"about"} id={"about"}>
      <div className={"about-text"}>
        I love the journey of an idea from being born to becoming an actual
        thing. Learning how the whole process works and becoming better while
        trying something new is really exciting. I learned a lot in my various
        jobs in the past and I'm still curious about the future.
        <br /> Feel free to contact me if you're interested in the stuff I made
        or if you want a collab.
      </div>
      <div className={"about-button"} onClick={props.openModal}>
        <h1>My</h1>
        <h1>Skillz</h1>
      </div>
      <div className={"about-button"} onClick={props.openModal}>
        <h1>My</h1>
        <h1>Stuff</h1>
      </div>
    </section>
  );
};

export default About;
