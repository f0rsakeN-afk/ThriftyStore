import React from "react";
import { signOutApi } from "../../services/signOut";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();
  function handleClick() {
    signOutApi();
    navigate("/login");
  }
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-600 font-semibold text-gray-100 rounded-sm focus:outline-none hover:bg-red-800 hover:drop-shadow-xl tracking-wide"
        onClick={handleClick}
      >
        SignOut
      </button>
    </div>
  );
}

export default SignOut;
