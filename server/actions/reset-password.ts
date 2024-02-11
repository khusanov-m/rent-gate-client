import { resetPasswordAPI, resetPasswordPayload } from "@/server/auth";
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
    onMutate: (variables) => {
      // Do stuff before the mutation
    },
    onError: (error, variables, context) => {
      // Do stuff on error
    },
    onSuccess: (data, variables, context) => {
      // Do stuff on success
    },
  });

  return { handleResetPassword, data, isPending, error };
};
