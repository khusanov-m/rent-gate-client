import { RegisterPayload, registerAPI } from "@/server/auth";
import { useMutation } from "@tanstack/react-query";

export const RegisterAction = () => {
  const {
    mutate: handleRegister,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: (payload: RegisterPayload) => registerAPI(payload),
    mutationKey: ["register"],
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

  return { handleRegister, data, isPending, error };
};
