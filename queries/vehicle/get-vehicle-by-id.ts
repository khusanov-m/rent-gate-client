import { getVehicleItemAPI } from "@/api/vehicles/index";
import { useQuery } from "@tanstack/react-query";

export default function useGetVehicleByID(id: string) {
  const { data, isLoading, isError, isFetched } = useQuery({
    queryFn: () => getVehicleItemAPI(id),
    queryKey: ["vehicle", id],
  });

  return { data, isLoading, isError, isFetched };
}
