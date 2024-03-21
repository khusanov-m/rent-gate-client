import { cancelBookingAPI } from "@/api/payment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const CancelBookingAction = () => {
  const queryClient = useQueryClient();
  const {
    mutate: handleCancelBooking,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: cancelBookingAPI,
    mutationKey: ["cancel-booking"],
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["payment"],
        refetchType: "all",
      });
    },
  });

  return { handleCancelBooking, data, isPending, error };
};
