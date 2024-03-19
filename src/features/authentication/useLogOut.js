import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogoutApi } from "../../services/LogoutApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
      toast.success("User logout successfull");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { isLoading, logout };
}
