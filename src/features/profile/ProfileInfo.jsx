import React from "react";
import { formatDistanceToNow } from "date-fns";
import LogOut from '../authentication/LogOut'

const ProfileInfo = () => {


  //const dateString = userData.created_at;
 /*  const formattedDate = formatDistanceToNow(new Date(dateString), {
    addSuffix: true,
  }); */


  return (
    <div className="">
      <LogOut/>
      <div className="flex gap-2 flex-col bg-gray-300 w-max p-4 rounded-md shaodw-xl dark:bg-gray-800 mt-6">
        <h2 className="text-sm text-gray-700 dark:text-gray-200">
          UserId: 
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          Email Address
        </p>
        <h3 className="text-sm text-gray-700 dark:text-gray-200">
          Confirmed At: 
        </h3>

       
      </div>
    
    </div>
  );
};

export default ProfileInfo;
