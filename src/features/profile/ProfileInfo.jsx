import React from "react";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "../authentication/useUser";
import Spinner from '../../components/Spinner'

const ProfileInfo = () => {
  const { user, isLoading, isAuthenticated } = useUser();
  //console.log(user);
  const dateString = user.email_confirmed_at;
  const formattedDate = formatDistanceToNow(new Date(dateString), {
    addSuffix: true,
  });

  if(isLoading) return <Spinner/>
  return (
    <div className="flex justify-between ">
      <div className="flex gap-2 flex-col bg-gray-300 w-max p-4 rounded-md shaodw-xl dark:bg-gray-800 mt-6">
        <h2 className="text-sm text-gray-700 dark:text-gray-200">
          UserId:{user.id}
        </h2>
        <h2 className="text-sm text-gray-700 dark:text-gray-200">Username:{user.user_metadata.fullName}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          Email Address:{user.email}
        </p>
        <h3 className="text-sm text-gray-700 dark:text-gray-200">
          Confirmed At:{formattedDate}
        </h3>
      </div>
     
    </div>
  );
};

export default ProfileInfo;
