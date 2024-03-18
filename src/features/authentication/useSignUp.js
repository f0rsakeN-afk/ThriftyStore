import { useMutation } from "@tanstack/react-query";
import { SignUpApi } from "../../services/SignUpApi";
import toast from "react-hot-toast";

export function useSignUp() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn:SignUpApi,
    onSuccess: () => {
      toast.success("Signup success.Check your email");
    },
    onError: (error) => {
      console.log(error)
      toast.error("Signup failed");
    },
  });
  return { isLoading, signup };
}
