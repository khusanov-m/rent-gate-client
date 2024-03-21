"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const RootSearchVehicle = () => {
  const router = useRouter();

  const onSubmit = () => {
    router.push("/vehicles");
  };

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 w-full">
      <Button onClick={onSubmit} className="md:col-span-2">
        Search
      </Button>
    </div>
  );
};

export default RootSearchVehicle;
