import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ closeActiveModal, activeModal, onAddItem }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setImageUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      name="form1"
      title="New Garment"
      buttonText="Add garment"
      isOpen={activeModal === "add-garment"}
      handleCloseClick={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="Url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className="modal__radio-container">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__radio_label">
          <input
            id="hot"
            type="radio"
            className="modal__radio-box"
            name="weather"
            value="hot"
            onChange={handleWeatherChange}
          />
          <span>Hot</span>
        </label>
        <label htmlFor="warm" className="modal__radio_label">
          <input
            id="warm"
            type="radio"
            className="modal__radio-box"
            name="weather"
            value="warm"
            onChange={handleWeatherChange}
          />
          <span>Warm</span>
        </label>
        <label htmlFor="cold" className="modal__radio_label">
          <input
            id="cold"
            type="radio"
            className="modal__radio-box"
            name="weather"
            value="cold"
            onChange={handleWeatherChange}
          />
          <span>Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
