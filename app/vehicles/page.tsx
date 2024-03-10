"use client";

import VehiclesFeed from "@/components/vehicle/VehiclesFeed";
import useGetVehicles from "@/queries/vehicle/get-vehicles";

export default function VehiclesPage() {
  const { data, isError, isFetched, isLoading } = useGetVehicles();
  console.log(data);

  return (
    <>
      <VehiclesFeed />
    </>
  );
}
