import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        name="form1"
        title="New Garment"
        buttonText="Add garment"
        handleActiveModal={activeModal}
        handleCloseClick={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="Url"
            className="modal__input"
            id="name"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-container">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__radio_label">
            <input id="hot" type="radio" className="modal__radio-box" />
            Hot
          </label>
          <label htmlFor="warm" className="modal__radio_label">
            <input id="warm" type="radio" className="modal__radio-box" />
            Warm
          </label>
          <label htmlFor="cold" className="modal__radio_label">
            <input id="cold" type="radio" className="modal__radio-box" />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        handleActiveModal={activeModal}
        card={selectedCard}
        handleCloseClick={closeActiveModal}
      />
    </div>
  );
}

export default App;
