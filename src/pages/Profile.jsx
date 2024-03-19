import React from "react";
import ProfileInfo from "../features/profile/ProfileInfo";
import LogOut from "../features/authentication/LogOut";

function Profile() {
  return (
    <div className="flex justify-between">
      <ProfileInfo />
      <LogOut/>
    </div>
  );
}

export default Profile;
