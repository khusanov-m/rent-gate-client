import { getVehiclesListAPI } from "@/api/vehicles/index";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useGetVehicles() {
  const params = useSearchParams();
  const { data, isLoading, isError, isFetched } = useQuery({
    queryFn: () => getVehiclesListAPI(params.toString()),
    queryKey: ["vehicles", params.toString()],
    refetchInterval: 1000 * 60,
    retry: 0,
  });

  return { data, isLoading, isError, isFetched };
}
