import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/LoginApi";

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { isLoading, user };
}
