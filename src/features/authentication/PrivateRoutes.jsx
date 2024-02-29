import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../services/loginApi";
import Spinner from "../../components/Spinner";

function PrivateRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Call getCurrentUser asynchronously and wait for the result
        const user = await getCurrentUser();
        //console.log(user.role);
        // Check if user exists (i.e., user is logged in)
        if (user.role === "authenticated") {
          setIsLoggedIn(true);
          navigate('/home')
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking user authentication", error);
      } finally {
        // Update isLoading state after authentication check is complete
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  // If isLoading is true, render a Spinner component while waiting for authentication check
  if (isLoading) return <Spinner />;

  // If user is logged in, render the Outlet component to render child routes
  // If user is not logged in, redirect to the login page
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
