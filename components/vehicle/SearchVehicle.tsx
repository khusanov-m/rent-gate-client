"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { DatePickerWithPresets } from "../DatePickerWithPresets";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";

const SearchVehicle = () => {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [pickup, setPickup] = React.useState<string>("");

  const router = useRouter();

  const onSubmit = () => {
    const params = new URLSearchParams();
    if (pickup) params.set("pickup", pickup);
    if (startDate) params.set("startDate", startDate.toISOString());
    if (endDate) params.set("endDate", endDate.toISOString());
    router.push(`/vehicles?${params.toString()}`);
  };

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <Input
        placeholder="pick-up"
        className={buttonVariants({ variant: "outline" })}
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
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
      <Button onClick={onSubmit} className="md:col-span-3">
        Search
      </Button>
    </div>
  );
};

export default SearchVehicle;
