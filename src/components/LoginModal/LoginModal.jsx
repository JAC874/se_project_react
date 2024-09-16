import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginModal({
  closeActiveModal,
  isOpen,
  isLoading,
  handleLogin,
  handleTextButton,
}) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values)
      .then(() => {
        closeActiveModal();
        navigate("/profile");
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  return (
    <ModalWithForm
      name="login"
      title="Log in"
      buttonText={isLoading ? "Logging in..." : "Log In"}
      redirectButtonText="or Sign Up"
      handleTextButton={handleTextButton}
      isOpen={isOpen}
      handleCloseClick={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="user-email"
          name="email"
          placeholder="Email"
          value={values.email}
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="user-password"
          name="password"
          placeholder="Password"
          value={values.password}
          required
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
