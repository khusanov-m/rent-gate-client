import { cn } from "@/lib/utils";
import { DoorOpen, Fuel, Navigation, Sliders, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const VehicleDetails = ({
  vehicle,
  numberFormatter,
}: {
  vehicle: {
    id: string;
    name: string;
    description: string;
    pricePerDay: number;
    pricePerHour: number;
    currency: string;
    availability: string;
  };
  numberFormatter: Intl.NumberFormat;
}) => {
  return (
    <Card className="relative group">
      <Image
        alt="Vehicle Image"
        className="object-cover w-full h-48 rounded-t-lg group-hover:opacity-50 transition-opacity"
        height="200"
        src="/sedan.png"
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width="300"
      />
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg">{vehicle.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{vehicle.description}</p>
        <div className="text-sm flex items-center gap-4">
          <p className="flex gap-2">
            <UsersRound size={"20"} /> 5
          </p>
          <p className="flex gap-2">
            <DoorOpen size={"20"} /> 4
          </p>
          <p className="flex gap-2">
            <Fuel size={"20"} /> Petrol
          </p>
          <p className="flex gap-2">
            <Sliders size={"20"} /> Automatic
          </p>
          <p className="flex gap-2">
            <Navigation size={"20"} /> Driver
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="font-bold text-lg">
              {vehicle.currency} {numberFormatter.format(vehicle.pricePerDay)}
              /day
            </p>
            <p className="text-xs">
              {vehicle.currency} {numberFormatter.format(vehicle.pricePerHour)}
              /hour
            </p>
          </div>
          <Link
            href={
              vehicle.availability === "Available"
                ? `vehicles/${vehicle.id}`
                : "#"
            }
            className={cn(
              buttonVariants({ variant: "outline" }),
              vehicle.availability !== "Available" &&
                "pointer-events-none opacity-50 cursor-not-allowed"
            )}
          >
            {vehicle.availability === "Available"
              ? "Book Now"
              : "Currently Unavailable"}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleDetails;
