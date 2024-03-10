"use client";

import useGetVehicles from "@/queries/vehicle/get-vehicles";
import { LineHeightIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import SortBy from "../input/SortBy";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import VehicleFilter from "./VehicleFilter";
import VehicleItem from "./VehicleItem";
import { SORT_BY_OPTIONS } from "./vehicle.const";

const VehiclesFeed = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!searchParams.get("page")) {
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      params.set(key, value);
    });
    params.set("page", "1");
    router.replace(`?${params.toString()}`, {});
  }
  if (!searchParams.get("limit")) {
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      params.set(key, value);
    });
    params.set("limit", "5");
    router.replace(`?${params.toString()}`, {});
  }

  const sortBy = searchParams.get("sortBy");
  const vehicleType = searchParams.get("type");
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  const { data, isError, isFetched, isLoading } = useGetVehicles();
  console.log(data);

  const vehicles = React.useMemo(() => {
    const arr = data?.vehicles.filter((vehicle) => {
      const filterResuts = [];

      if (vehicleType) {
        filterResuts.push(vehicleType === vehicle.type);
      }

      if (priceMin && priceMax) {
        filterResuts.push(
          vehicle.price_per_day >= Number(priceMin) &&
            vehicle.price_per_day <= Number(priceMax)
        );
      } else if (priceMin || priceMax) {
        if (priceMin) {
          filterResuts.push(vehicle.price_per_day >= Number(priceMin));
        }
        if (priceMax) {
          filterResuts.push(vehicle.price_per_day <= Number(priceMax));
        }
      }

      if (filterResuts.length === 0) return true;
      return filterResuts.every((result) => result);
    });

    if (sortBy && arr) {
      if (sortBy === "price-asc") {
        return arr.sort((a, b) => a.price_per_day - b.price_per_day);
      } else if (sortBy === "price-desc") {
        return arr.sort((a, b) => b.price_per_day - a.price_per_day);
      }
    }

    return arr || [];
  }, [vehicleType, priceMin, priceMax, sortBy, data?.vehicles]);

  const resetSorting = () => {
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      if (key !== "sortBy") {
        params.set(key, value);
      }
    });
    router.replace(`?${params.toString()}`, {});
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Find Your Perfect Ride</h1>
        <p className="text-gray-500">
          Choose from a wide range of vehicles for your next adventure.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <aside className="lg:col-span-1">
          <VehicleFilter />
        </aside>
        <main className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <span className="text-sm text-gray-500">
                {vehicles.length > 0
                  ? `Showing 1-${data?.count} of ${data?.pagination.total_items} results`
                  : `Showing 0 results of ${data?.pagination.total_items} results`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <SortBy
                icon={<LineHeightIcon className="w-4 h-4 mr-2" />}
                options={SORT_BY_OPTIONS}
                placeholder="Sort by"
              />

              <Button variant="outline" onClick={resetSorting}>
                Reset
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isLoading && <Skeleton />}
            {isError && <div>Something went wrong</div>}
            {isFetched && vehicles.length === 0 && (
              <div>No vehicles found for your search criteria</div>
            )}
            {vehicles.length !== 0 &&
              vehicles.map((vehicle) => (
                <VehicleItem key={vehicle.id} vehicle={vehicle} />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VehiclesFeed;
