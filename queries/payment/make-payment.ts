import { makePaymentAPI } from "@/api/payment";
import { useMutation } from "@tanstack/react-query";

export const MakePaymentAction = () => {
  const {
    mutate: handlePayment,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: makePaymentAPI,
    mutationKey: ["confirm"],
    onSuccess() {},
  });

  return { handlePayment, data, isPending, error };
};
