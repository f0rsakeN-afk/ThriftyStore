import { useMutation } from "@tanstack/react-query";
import { SignUpApi } from "../../services/SignUpApi";
import toast from "react-hot-toast";

export function SignUp() {
  const { data, mutate: signup } = useMutation({
    mutationFn: ({ email, password }) => SignUpApi({ email, password }),
    onSuccess: () => {
      toast.success("Signup success.Check your email");
    },
    onError: () => {
      toast.error("Signup failed");
    },
  });
  return { data, signup };
}
