import "./ItemModal.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, card, handleCloseClick, onCreateModal }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser?.userData?._id;
  const itemDeleteButtonClassName = `modal__delete ${
    isOwn ? "" : "modal__delete-button_hidden"
  }`;
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
            className={itemDeleteButtonClassName}
            type="submit"
            onClick={() => onCreateModal(card._id)}
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
