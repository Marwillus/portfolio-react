import Job from "./Job";
import "./styles/modals.css";

// import { IoClose } from "react-icons/io5";

const SkillsModal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  const versteckModal = (e) => {
    if (e.target.id === "modalFrame") {
      props.closeModal();
    }
  };
  return (
    // Hier habe ich ein ID hinzugefügt, um schnell das element finden zu können
    <div
      id="modalFrame"
      className={showHideClassName}
      onClick={(e) => versteckModal(e)}
    >
      {/* <IoClose
        onClick={(e) => versteckModal(e)}
        size="3rem"
        style={{
          position: "absolute",
          color: "#f4f4f4",
          top: "1rem",
          right: "1rem",
        }} */}
      />
      <section className={"modal-main"}>
        <div className="modal-left-bg">
          <div className="timeline">
            <p>2021</p>
            <p>2002</p>
          </div>
        </div>

        <div className="skill-container">
          <div className="jobs">
            <ul className="job-list">
              {props.jobs.map((el, index) => {
                return <Job key={index} job={el.job} employer={el.employer} />;
              })}
            </ul>
          </div>
          <div className="job-info">
            <img
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              alt=""
            />
            <h1 className="date">2021</h1>
            <h3>Fullstack Developer</h3>
            <p>
              I had a lot of fun programming the escape games and gadgets and so
              I decided to get a course to be able to do this professionaly
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsModal;
