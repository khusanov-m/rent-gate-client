"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { DatePickerWithPresets } from "../input/DatePickerWithPresets";
import { Button } from "../ui/button";

const RootSearchVehicle = () => {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

  const router = useRouter();

  const onSubmit = () => {
    const params = new URLSearchParams();
    if (startDate) params.set("fromDate", startDate.toISOString());
    if (endDate) params.set("endDate", endDate.toISOString());
    router.push(`/vehicles?${params.toString()}`);
  };

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 w-full">
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
