import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  getItems,
  addItems,
  deleteCard,
  getCurrentUser,
  updateCurrentUser,
} from "../../utils/api";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { setToken, getToken, removeToken } from "../../utils/token";
import { authorization, registration, isTokenValid } from "../../utils/auth";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    avatar: "",
  });

  // const navigate = useNavigate();

  // Check Token

  useEffect(() => {
    const token = getToken();
    if (!token) return;
    getCurrentUser(token)
      .then((res) => {
        setIsLoggedin(true);
        setUserData(res);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    console.log("User data:", userData);
    console.log("Is Logged In:", isLoggedin);
  }, [userData, isLoggedin]);

  const handleRegistration = (values) => {
    registration(values)
      .then((res) => {
        setToken(res.token);
        setIsLoggedin(true);
        setUserData({
          id: res._id,
          name: res.name,
          avatar: res?.avatar,
        });
        localStorage.setItem("userData", JSON.stringify(user));
      })
      .catch((err) => {
        console.error("Authorization failed:", err);
        return Promise.reject(err);
      });
  };

  const handleLogin = (values) => {
    if (!values) return Promise.reject("No values provided");

    return authorization(values)
      .then((res) => {
        const token = res.token;
        setToken(res.token);
        console.log(token);
        return isTokenValid(res.token);
      })
      .then((res) => {
        setIsLoggedin(true);
        setUserData(res);
      })
      .catch((err) => {
        console.error("Authorization failed:", err);
        return Promise.reject(err);
      });
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleDeleteConfirmationModal = () => {
    setActiveModal("delete");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const handleUpdateUser = (updatedData) => {
    const token = getToken();
    return updateCurrentUser(updatedData, token)
      .then((res) => {
        setUserData({
          ...userData,
          name: res.data.name,
          avatar: res.data.avatar,
        });
      })
      .catch((err) => {
        console.error("Failed to update user: ", err);
      });
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleCardDelete = () => {
    deleteCard(selectedCard._id)
      .then(() => {
        const filteredCards = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });
        setClothingItems(filteredCards);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    setIsLoading(true);
    return addItems({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem.data, ...prevItems]);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then(({ data }) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, [isLoggedin]);

  return (
    <CurrentUserContext.Provider value={{ isLoggedin, userData }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              handleLoginClick={handleLoginClick}
              handleRegisterClick={handleRegisterClick}
              weatherData={weatherData}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedin={isLoggedin}>
                    <Profile
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      handleEditProfileClick={handleEditProfileClick}
                      userData={userData}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          <Footer />
          <AddItemModal
            closeActiveModal={closeActiveModal}
            activeModal={activeModal}
            onAddItem={handleAddItemSubmit}
            isLoading={isLoading}
          />
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            handleCloseClick={closeActiveModal}
            onCreateModal={handleDeleteConfirmationModal}
          />
          <DeleteConfirmationModal
            isOpen={activeModal === "delete"}
            onCreateModal={handleDeleteConfirmationModal}
            handleCloseClick={closeActiveModal}
            handleCardDelete={handleCardDelete}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            closeActiveModal={closeActiveModal}
            isLoading={isLoading}
            handleLogin={handleLogin}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            closeActiveModal={closeActiveModal}
            isLoading={isLoading}
            handleRegistration={handleRegistration}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            closeActiveModal={closeActiveModal}
            isLoading={isLoading}
            handleUpdateUser={handleUpdateUser}
            userData={userData}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
