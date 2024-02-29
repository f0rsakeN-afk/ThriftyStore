import React, { useState } from "react";
import { getUserData } from "./getProfileInfo";
import Spinner from "../../components/Spinner";
import { formatDistanceToNow } from "date-fns";
import UpdateProfileForm from "./UpdateProfileForm";

const ProfileInfo = () => {
  const { isLoading, data: userData } = getUserData();
  const [showForm, setShowForm] = useState(false);

  if (isLoading) return <Spinner />;
  const dateString = userData.created_at;
  const formattedDate = formatDistanceToNow(new Date(dateString), {
    addSuffix: true,
  });

  function handleClick() {
    setShowForm(!showForm);
  }
  return (
    <div className="">
      <div className="flex gap-2 flex-col bg-gray-300 w-max p-4 rounded-md shaodw-xl dark:bg-gray-800 mt-6">
        <h2 className="text-sm text-gray-700 dark:text-gray-200">
          UserId: {userData.id}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          Email Address: {userData.email}
        </p>
        <h3 className="text-sm text-gray-700 dark:text-gray-200">
          Confirmed At: {formattedDate}
        </h3>

        <section className="flex justify-center">
          <button
            className="text-gray-200 w-max text-center mt-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 transition-colors ease-linear duration-150 font-semibold focus:outline-none rounded-sm"
            onClick={handleClick}
          >
            {showForm ? "Close form" : "Edit credentials"}
          </button>
        </section>
      </div>
      {showForm && <UpdateProfileForm />}
    </div>
  );
};

export default ProfileInfo;
