import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  handleCloseClick,
  isOpen,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className="modal__submit modal__submit_disabled"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
