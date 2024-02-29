 import { useMutation } from "@tanstack/react-query";
import { SignUpApi } from "../../services/signUpApi";
import toast from "react-hot-toast";

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ email, password }) => SignUpApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      toast.success("User signed up successfully");
    },
    onError: (err) => {
      //console.error(err.message);
      toast.error(err.message);
    },
  });
  return { isLoading, signup };
}
 