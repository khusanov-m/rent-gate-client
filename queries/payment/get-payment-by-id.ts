import { getPaymentInfoAPI } from "@/api/payment";
import { useQuery } from "@tanstack/react-query";

export default function useGetPaymentByID(id: string) {
  const { data, isLoading, isError, isFetched } = useQuery({
    queryFn: () => getPaymentInfoAPI(id),
    queryKey: ["payment", id],
  });

  return { data, isLoading, isError, isFetched };
}
