import { loginAPI } from "@/server/auth";
import { useMutation } from "@tanstack/react-query";

export const LoginAction = () => {
  const {
    mutate: handleLogin,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginAPI,
    mutationKey: ["login"],
    onSuccess(token) {
      localStorage.setItem("token", token || "");
    },
    retry: 0,
  });

  return { handleLogin, data, isPending, error };
};
