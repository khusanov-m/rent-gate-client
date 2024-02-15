import { loginAPI } from "@/api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const LoginAction = () => {
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries({
        queryKey: ["user"],
        refetchType: "all",
      });
    },
  });

  return { handleLogin, data, isPending, error };
};
