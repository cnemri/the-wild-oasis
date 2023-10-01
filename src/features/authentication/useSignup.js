import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard");
      toast.success("Account created successfully, please verify your email");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Provided email or password incorrect");
    },
  });

  return {
    signup,
    isLoading,
  };
}
