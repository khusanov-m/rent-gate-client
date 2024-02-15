import { RegisterPayload, registerAPI } from "@/api/auth";
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
  });

  return { handleRegister, data, isPending, error };
};
