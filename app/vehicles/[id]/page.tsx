import { getVehicleItemAPI } from "@/api/vehicles";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Vehicle from "./vehicle";

export default async function VehiclePage({
  params,
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["vehicle", params.id],
    queryFn: () => getVehicleItemAPI(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Vehicle id={params.id} />
    </HydrationBoundary>
  );
}
