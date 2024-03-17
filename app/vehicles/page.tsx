import { getVehiclesListAPI } from "@/api/vehicles";
import VehiclesFeed from "@/app/vehicles/vehicles-feed";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function VehiclesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["vehicles"],
    queryFn: () => getVehiclesListAPI(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <VehiclesFeed />
    </HydrationBoundary>
  );
}
