import { verifyAPI } from "@/server/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const VerifyEmailAction = () => {
  const queryClient = useQueryClient();

  const {
    mutate: handleVerify,
    data,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["verify/email"],
    mutationFn: verifyAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: ["user"],
        refetchType: "all",
      });
    },
  });

  return { handleVerify, isPending, error, data };
};
