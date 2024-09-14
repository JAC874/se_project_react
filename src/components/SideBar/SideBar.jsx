import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar() {
  const { isLoggedin, userData } = useContext(CurrentUserContext);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__profile-info">
        {!imageError && userData?.avatar ? (
          <img
            src={userData.avatar} // Use user's avatar URL
            alt="" // Leave alt blank, since we will use avatar initials on error
            className="sidebar__avatar"
            onError={handleImageError} // Handle error when image fails to load
          />
        ) : (
          <div className="sidebar__avatar-initial">
            {userData?.name?.charAt(0).toUpperCase() || ""}
          </div>
        )}
        <p className="sidebar__username">{userData?.name || "User Name"}</p>
      </div>
      <button type="button" className="sidebar__profile-edit-btn">
        Change profile data
      </button>
      <button type="button" className="sidebar__profile-logout-btn">
        Logout
      </button>
    </div>
  );
}

export default SideBar;
