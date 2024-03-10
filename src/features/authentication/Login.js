import { useMutation } from "@tanstack/react-query";
import { LoginApi } from "../../services/LoginApi";
import toast from "react-hot-toast";

export default function Login() {
  const { data, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: () => {
      toast.error("User login successfull");
    },
    onError: () => {
      toast.error("User login failed");
    },
  });
  return { data, login };
}
