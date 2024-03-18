import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //if threre's no authenticated user redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  //show the spinner
  if (isLoading) return <Spinner />;

  //if user? render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
