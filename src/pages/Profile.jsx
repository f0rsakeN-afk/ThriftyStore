import React from "react";
import ProfileInfo from "../features/profile/ProfileInfo";
import SignOut from "../features/profile/SignOut";

function Profile() {
  return (
    <div className="flex justify-between">
      <ProfileInfo />
      <SignOut />
    </div>
  );
}

export default Profile;
