import { makeBookingAPI } from "@/api/payment";
import { useMutation } from "@tanstack/react-query";

export const MakeBookingAction = () => {
  const {
    mutate: handleBooking,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: makeBookingAPI,
    mutationKey: ["booking"],
    onSuccess() {},
  });

  return { handleBooking, data, isPending, error };
};
