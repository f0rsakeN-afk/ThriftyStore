import { useMutation } from "@tanstack/react-query";
import { LoginApi } from "../../services/loginApi";
import toast from "react-hot-toast";


export function useLogin() {

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => {
      return LoginApi({ email, password }); // Make sure LoginApi returns a promise
    },
    onSuccess: (user) => {
      //console.log(user);
      toast.success("User logged in successfully");
      
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, login };
}

