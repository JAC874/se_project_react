import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm.js";

function AddItemModal({ closeActiveModal, activeModal, onAddItem, isLoading }) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name && values.imageUrl && values.weather) {
      console.log("Submitting values:", values); // Log the data

      onAddItem(values)
        .then(() => {
          resetForm();
        })
        .catch(console.error);
    } else {
      alert("All fields are required.");
    }
  };

  const resetForm = () => {
    setValues({ name: "", imageUrl: "", weather: "" });
  };

  return (
    <ModalWithForm
      name="form1"
      title="New Garment"
      buttonText={isLoading ? "Saving..." : "Add garment"}
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
          name="name"
          placeholder="Name"
          value={values.name}
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          required
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
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
            onChange={handleChange}
            checked={values.weather === "hot"}
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
            onChange={handleChange}
            checked={values.weather === "warm"}
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
            onChange={handleChange}
            checked={values.weather === "cold"}
          />
          <span>Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
