import { getRentalsAPI } from "@/api/orders";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import UserOrders from "./orders";

export default async function UserOrdersPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["history/rental"],
    queryFn: () => getRentalsAPI(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserOrders />
    </HydrationBoundary>
  );
}
