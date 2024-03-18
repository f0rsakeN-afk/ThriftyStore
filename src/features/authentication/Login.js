import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginApi } from "../../services/LoginApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function Login() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: (user) => {
      //console.log(user);
      toast.success("User login successfull");
      queryClient.setQueryData(["user", user.user]);
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      console.error("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { data, login };
}
