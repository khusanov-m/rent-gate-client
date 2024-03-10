import { getUserLocationAPI } from "@/api/user/index";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserLocation() {
  const { data, isLoading, isError, isFetched } = useQuery({
    queryFn: getUserLocationAPI,
    queryKey: ["user", "location"],
    refetchInterval: 1000 * 60 * 60 * 24,
    retry: 0,
  });

  return { location: data, isLoading, isError, isFetched };
}
