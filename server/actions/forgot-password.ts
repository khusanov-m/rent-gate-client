import { forgotPasswordAPI } from "@/server/auth";
import { useMutation } from "@tanstack/react-query";

export const ForgotPasswordAction = () => {
  const {
    mutate: handleForgotPassword,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: (payload: { email: string }) => forgotPasswordAPI(payload),
    mutationKey: ["forgot/password"],
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

  return { handleForgotPassword, data, isPending, error };
};
