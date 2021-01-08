const ModalSkillz = (props) => {
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
        {/*         <button onClick={closeModal} className={"close-btn"}>
          X
        </button> */}
        <div className="modal-left-bg"></div>
        <div className="skill-container">
          <div className="jobs">
            <div className="cv-block">
              <h3>My Jobs</h3>
            </div>
            <div className="cv-block">
              <div className="cv-step">
                <h3>Fullstack Developer</h3>
                <h5>Digital Carreer Institute</h5>
              </div>
              <div className="cv-step">
                <h3>Techniker</h3>
                <h5>Final Escape GmbH</h5>
              </div>
            </div>
            <div className="cv-block">
              <div className="cv-step">
                <h3>Tischler</h3>
                <h5>VANPEY Möbeldesign GmbH</h5>
              </div>
              <div className="cv-step">
                <h3>Analyst</h3>
                <h5>Daimler Benz</h5>
              </div>
            </div>
            <div className="cv-block">
              <div className="cv-step">
                <h3>Maschinenbaustudium</h3>
                <h5>HTW Berlin</h5>
              </div>
              <div className="cv-step">
                <h3>Industriemechaniker</h3>
                <h5>Fiberweb Berlin GmbH</h5>
              </div>
            </div>
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

export default ModalSkillz;
