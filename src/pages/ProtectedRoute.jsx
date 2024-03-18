import Spinner from "../components/Spinner";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  //load the authenticated user
  const { user, isLoading } = useUser();
  //show the spinner
  if (isLoading) return <Spinner />;
  //if threre's no authenticated user redirect to login

  //if user? render the app

  return children;
}

export default ProtectedRoute;
