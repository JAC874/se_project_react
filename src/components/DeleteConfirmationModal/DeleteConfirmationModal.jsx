import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({
  isOpen,
  handleCloseClick,
  handleCardDelete,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__delete-container">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        ></button>
        <div className="modal__delete-content">
          <p className="modal__delete-content-text">
            Are you sure you want to delete this item? <br />
            This action is irreversible.
          </p>
          <button
            className="modal__delete-confirm-btn"
            type="text"
            onClick={handleCardDelete}
          >
            Yes, delete item
          </button>
          <button
            className="modal__delete-cancel-btn"
            type="text"
            onClick={handleCloseClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
