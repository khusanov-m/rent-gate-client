import { getRentalsAPI } from "@/api/orders";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import UserInfo from "./user-info";

export default async function UserInfoPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["history/rental"],
    queryFn: () => getRentalsAPI(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserInfo />
    </HydrationBoundary>
  );
}
