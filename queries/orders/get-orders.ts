import { getRentalsAPI } from "@/api/orders";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useGetRentals() {
  const params = useSearchParams();
  const { data, isLoading, isError, isFetched } = useQuery({
    queryFn: () => getRentalsAPI(params.toString()),
    queryKey: ["history/rental", params.toString()],
    refetchInterval: 1000 * 60,
    retry: 0,
  });

  return { data, isLoading, isError, isFetched };
}
