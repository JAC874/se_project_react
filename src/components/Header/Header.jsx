import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";

function Header({ handleAddClick }) {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <p className="header__date-and-location">{currentDate}, New York</p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
