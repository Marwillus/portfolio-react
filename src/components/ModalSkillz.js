const ModalSkillz = ({ closeModal, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className={"modal-main"}>
        <button onClick={closeModal} className={"close-btn"}>
          X
        </button>
      </section>
    </div>
  );
};

export default ModalSkillz;
