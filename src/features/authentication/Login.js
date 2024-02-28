import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/loginApi";
import toast from "react-hot-toast";

export async function LoginUser() {
  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      toast.success("User logged in successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isLoading, login };
}
