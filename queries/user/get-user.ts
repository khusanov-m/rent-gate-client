import { getUserAPI } from "@/api/auth/index";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserQuery() {
  const { data, isLoading, isError, isFetched } = useQuery({
    queryFn: getUserAPI,
    queryKey: ["user"],
    refetchInterval: 1000 * 60 * 60 * 24,
    retry: 0,
  });
  if (data?.status === "success") {
    return { user: data.user, isLoading, isError };
  }

  return { user: null, isLoading, isError, isFetched };
}
