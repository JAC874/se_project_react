import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function RegisterModal({
  closeActiveModal,
  isOpen,
  isLoading,
  handleRegistration,
}) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
  });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", values);

    handleRegistration({
      email: values.email,
      password: values.password,
      name: values.name,
      avatar: values.avatarUrl,
    });
    closeActiveModal();
  };

  return (
    <ModalWithForm
      name="register"
      title="Sign Up"
      buttonText={isLoading ? "Saving..." : "Sign Up"}
      isOpen={isOpen}
      handleCloseClick={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email}
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Password"
          value={values.password}
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name*
        <input
          type="text"
          className="modal__input"
          id="register-name"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          value={values.name}
        />
      </label>
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL*
        <input
          type="url"
          className="modal__input"
          id="avatar-url"
          placeholder="Avatar URL"
          name="avatarUrl"
          onChange={handleChange}
          value={values.avatarUrl}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;