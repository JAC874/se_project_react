import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleLoginClick,
  handleRegisterClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { isLoggedin, userData } = useContext(CurrentUserContext);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="header__container">
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="WTWR Logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
        <div className="header__toggle-switch">
          <ToggleSwitch />
        </div>
        <button
          onClick={handleAddClick}
          type="button"
          className={`header__add-clothes-btn ${
            !isLoggedin ? "header_element-hidden" : ""
          }`}
        >
          + Add clothes
        </button>
        <button
          onClick={handleLoginClick}
          type="button"
          className={`header__log-in-btn ${
            isLoggedin ? "header_element-hidden" : ""
          }`}
        >
          Log In
        </button>
        <button
          onClick={handleRegisterClick}
          type="button"
          className={`header__register-btn ${
            isLoggedin ? "header_element-hidden" : ""
          }`}
        >
          Sign Up
        </button>
        <div
          className={`header__user-container ${
            !isLoggedin ? "header_element-hidden" : ""
          }`}
        >
          <Link to="/profile" className="header__profile-link">
            <p className="header__username">{userData?.name}</p>{" "}
          </Link>
          {!imageError && userData?.avatar ? (
            <img
              src={userData.avatar} // Use user's avatar URL
              alt="" // Leave alt blank, since we will use avatar initials on error
              className="header__avatar"
              onError={handleImageError} // Handle error when image fails to load
            />
          ) : (
            <div className="header__avatar-initial">
              {userData?.name?.charAt(0).toUpperCase() || ""}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
