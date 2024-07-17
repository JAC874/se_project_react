import "./ItemModal.css";

function ItemModal({ isOpen, card, handleCloseClick, handleCardDelete }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close modal__close_type_image"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__description">{card.name}</h2>
          <button
            className="modal__delete"
            type="submit"
            onClick={handleCardDelete}
          >
            Delete item
          </button>
        </div>
        <div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
