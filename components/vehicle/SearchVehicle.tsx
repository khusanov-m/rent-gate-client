"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import * as React from "react";
import { DatePickerWithPresets } from "../DatePickerWithPresets";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";

const SearchVehicle = () => {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [location, setLocation] = React.useState<string>("");

  const router = useRouter();

  const onSubmit = () => {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (startDate) params.set("startDate", startDate.toISOString());
    if (endDate) params.set("endDate", endDate.toISOString());
    router.push(`/vehicles?${params.toString()}`);
  };

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 w-full">
      <Input
        placeholder="Location"
        className={cn(buttonVariants({ variant: "outline" }), "md:col-span-2")}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
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

export default SearchVehicle;
