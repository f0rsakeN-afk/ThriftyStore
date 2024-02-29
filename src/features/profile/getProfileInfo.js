import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/loginApi";

export function getUserData() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["userData"],
    queryFn: getCurrentUser,
  });
  return { isLoading, data, error };
}
