"use client";

import { cn } from "@/lib/utils";
import useGetUserCountry from "@/queries/user/get-country";
import { useRouter } from "next/navigation";
import * as React from "react";
import { DatePickerWithPresets } from "../DatePickerWithPresets";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";

const RootSearchVehicle = () => {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [location, setLocation] = React.useState<string>("");

  const router = useRouter();
  const { data, isLoading: isCountryLoading, isFetched } = useGetUserCountry();

  React.useEffect(() => {
    if (isFetched && typeof data === "string") {
      setLocation(data);
    }
  }, [data]);

  const onSubmit = () => {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (startDate) params.set("startDate", startDate.toISOString());
    if (endDate) params.set("endDate", endDate.toISOString());
    router.push(`/vehicles?${params.toString()}`);
  };

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 w-full">
      {isCountryLoading ? (
        <Skeleton className={cn("h-9 w-full md:col-span-2 border")} />
      ) : (
        <Input
          placeholder="Location"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "md:col-span-2"
          )}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      )}

      <DatePickerWithPresets
        className="w-full"
        date={startDate}
        setDate={setStartDate}
      />
      <DatePickerWithPresets
        className="w-full"
        date={endDate}
        setDate={setEndDate}
      />
      <Button onClick={onSubmit} className="md:col-span-2">
        Search
      </Button>
    </div>
  );
};

export default RootSearchVehicle;
