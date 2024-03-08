import { getUserCountryAPI } from "@/api/user/index";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserCountry() {
  const { data, isLoading, isError, isFetched } = useQuery({
    queryFn: getUserCountryAPI,
    queryKey: ["user/country"],
    refetchInterval: 1000 * 60 * 60 * 24,
    retry: 0,
  });

  return { data: data?.country, isLoading, isError, isFetched };
}
