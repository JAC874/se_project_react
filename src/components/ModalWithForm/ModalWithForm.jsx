import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  handleActiveModal,
  handleCloseClick,
}) {
  return (
    <div
      className={`modal ${
        handleActiveModal === "add-garment" && "modal_opened"
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        ></button>
        <form className="modal__form">{children}</form>
        <button type="submit" className="modal__submit modal__submit_disabled">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
export default ModalWithForm;
