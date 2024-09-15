import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useEffect } from "react";

function SideBar({ handleEditProfileClick }) {
  const { isLoggedin, userData } = useContext(CurrentUserContext);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    console.log("User data updated: ", userData); // Check if the user data updates correctly
  }, [userData]);

  return (
    <div className="sidebar">
      <div className="sidebar__profile-info">
        {!imageError && userData?.avatar ? (
          <img
            src={userData.avatar}
            alt=""
            className="sidebar__avatar"
            onError={handleImageError}
          />
        ) : (
          <div className="sidebar__avatar-initial">
            {userData?.name?.charAt(0).toUpperCase() || ""}
          </div>
        )}
        <p className="sidebar__username">{userData?.name || "User Name"}</p>
      </div>
      <button
        type="button"
        className="sidebar__profile-edit-btn"
        onClick={handleEditProfileClick}
      >
        Change profile data
      </button>
      <button type="button" className="sidebar__profile-logout-btn">
        Logout
      </button>
    </div>
  );
}

export default SideBar;
