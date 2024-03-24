"use client";

import useGetVehicles from "@/queries/vehicle/get-vehicles";
import { Skeleton } from "../ui/skeleton";
import FeaturedVehicle from "./FeaturedVehicle";

export default function FeaturedFeed() {
  const { data, isLoading } = useGetVehicles();
  console.log(data);

  return (
    <section>
      <div className="flex-1 px-4 py-12 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold">Featured Vehicles</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {isLoading &&
            Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-[332px] w-full" />
            ))}
          {!isLoading &&
            data &&
            data.vehicles
              .slice(0, 4)
              .map((item) => <FeaturedVehicle vehicle={item} key={item.id} />)}
        </div>
      </div>
    </section>
  );
}
