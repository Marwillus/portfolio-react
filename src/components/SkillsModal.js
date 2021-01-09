import Job from "./Job";

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
      <section className={"modal-main"}>
        <div className="modal-left-bg"></div>
        <div className="skill-container">
          <div className="jobs">
            <h1>MyJobs</h1>
            <ul className="job-list">
              {props.jobs.map((el, index) => {
                return <Job key={index} job={el.job} employer={el.employer} />;
              })}
            </ul>
          </div>
          <div className="skillz">
            <div className="bar">
              <span className="bar-content">{props.skill}</span>
              <span className="bar-percent">{props.skillPercent}</span>
              <div className="bar-filling"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsModal;
