import { useMutation } from "@tanstack/react-query";
import { updateCredentials } from "../../services/updateCredentials";
import toast from "react-hot-toast";
export function updateProfileInfo() {
  const { isLoading, mutate: update } = useMutation({
    mutationFn: ({ email, password }) => updateCredentials({ email, password }),
    onSuccess: () => {
      toast.success("Updated successfully");
    },
    onError: (err) => {
      console.error(err.message);
      throw new Error("Updating credentials failed");
    },
  });
  return { isLoading, update };
}
