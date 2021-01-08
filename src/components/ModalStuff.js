const ModalStuff = ({ closeModal, show }) => {
  const showHideClassName = show
    ? "modal-stuff display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName} onClick={() => closeModal}>
      <section className={"modal-main"}>
        <button onClick={closeModal}>X</button>
      </section>
    </div>
  );
};

export default ModalStuff;
