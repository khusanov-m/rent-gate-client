import { forgotPasswordAPI } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const ForgotPasswordAction = () => {
  const {
    mutate: handleForgotPassword,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: (payload: { email: string }) =>
      forgotPasswordAPI(payload.email),
    mutationKey: ["forgot/password"],
  });

  return { handleForgotPassword, data, isPending, error };
};
