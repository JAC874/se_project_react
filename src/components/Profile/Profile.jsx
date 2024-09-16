import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  handleEditProfileClick,
  userData,
  handleCardLike,
  handleLogout,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleEditProfileClick={handleEditProfileClick}
          userData={userData}
          handleLogout={handleLogout}
        />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          handleCardLike={handleCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
