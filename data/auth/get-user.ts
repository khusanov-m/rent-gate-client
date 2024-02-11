import { getUserAPI } from "@/server/auth/index";
import { useQuery } from "@tanstack/react-query";

export function useGetUser() {
  const {
    data: user,
    isPending,
    error,
  } = useQuery({
    queryFn: async () => getUserAPI(),
    queryKey: ["user"],
    refetchInterval: 1000 * 60 * 60 * 24,
    enabled: false,
    initialData: null,
  });

  return { user, isPending, error };
}
