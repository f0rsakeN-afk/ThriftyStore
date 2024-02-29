import React from "react";
import { getUserData } from "./getProfileInfo";
import Spinner from "../../components/Spinner";
import { formatDistanceToNow } from "date-fns";

const ProfileInfo = () => {
  const { isLoading, data: userData } = getUserData();

  if (isLoading) return <Spinner />;
  const dateString = userData.created_at;
  const formattedDate = formatDistanceToNow(new Date(dateString), {
    addSuffix: true,
  });
  return (
    <div className="flex gap-2 flex-col bg-gray-300 w-max p-4 rounded-md shaodw-xl dark:bg-gray-800">
      <h2 className="text-xl text-gray-700 dark:text-gray-200">
        UserId: {userData.id}
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-200">
        Gmail Address: {userData.email}
      </p>
      <h3 className="text-xl text-gray-700 dark:text-gray-200">
        Confirmed At: {formattedDate}
      </h3>
    </div>
  );
};

export default ProfileInfo;
