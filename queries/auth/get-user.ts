import { getUserAPI } from "@/server/auth/index";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserQuery() {
  const { data, isLoading, isError } = useQuery({
    queryFn: getUserAPI,
    queryKey: ["user"],
  });
  if (data?.status === "success") {
    return { user: data.data.user, isLoading, isError };
  }

  return { user: null, isLoading, isError };
}
