import { useMutation } from "@tanstack/react-query";
import { SignUpApi } from "../../services/signUpApi";
import toast from "react-hot-toast";

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ email, password }) => SignUpApi({ email, password }),
    onSuccess: () => {
      toast.success("Signup successful");
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("Signup failed");
    },
  });
    return{isLoading,signup}
}
