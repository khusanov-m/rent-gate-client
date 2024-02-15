import { resetPasswordAPI, resetPasswordPayload } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const ResetPasswordAction = () => {
  const {
    mutate: handleResetPassword,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: (payload: resetPasswordPayload) => resetPasswordAPI(payload),
    mutationKey: ["reset/password"],
  });

  return { handleResetPassword, data, isPending, error };
};
