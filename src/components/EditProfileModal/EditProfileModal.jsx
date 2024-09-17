import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({
  closeActiveModal,
  isOpen,
  isLoading,
  handleUpdateUser,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
  });

  const { userData } = useContext(CurrentUserContext);

  useEffect(() => {
    if (userData && isOpen) {
      setValues({
        name: userData.name || "",
        avatar: userData.avatar || "",
      });
    }
  }, [userData, setValues, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(values);
  };

  return (
    <ModalWithForm
      name="edit profile"
      title="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save Changes"}
      isOpen={isOpen}
      handleCloseClick={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="username" className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          id="username"
          name="name"
          placeholder="Name"
          value={values.name}
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar URL *
        <input
          type="url"
          className="modal__input"
          id="avatar"
          name="avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          required
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
