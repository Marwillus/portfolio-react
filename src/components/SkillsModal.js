import Job from "./Job";
import "./styles/modals.css";
// import { IoCaretUpSharp } from "react-icons/io5";

const SkillsModal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  const versteckModal = (e) => {
    if (e.target.id === "modalFrame") {
      props.closeModal();
    }
  };
  const showJob = (job) => {
    const img = job.img;
    const name = job.job;
    const time = job.start;
    const quali = job.qualification;
    return [img, name, time, quali];
  };
  return (
    <div
      id="modalFrame"
      className={showHideClassName}
      onClick={(e) => versteckModal(e)}
    >
      <section className={"modal-main"}>
        <div className="modal-left-bg"></div>

        <div className="skill-container">
          <div className="jobs">
            <div className="timeline">
              <p>2021</p>
              <p>2002</p>
            </div>
            <ul className="job-list">
              {props.jobs.map((el, index) => {
                return (
                  <Job
                    onClick={showJob(el)}
                    key={index}
                    job={el.job}
                    employer={el.employer}
                  />
                );
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
            <p>HTML / CSS / JS / React / Redux </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsModal;
