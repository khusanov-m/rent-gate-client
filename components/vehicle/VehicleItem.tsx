import { cn } from "@/lib/utils";
import { TVehicle } from "@/schema/vehicle";
import { Fuel, Luggage, Navigation, Sliders, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const VehicleItem = ({
  vehicle,
  isForm,
}: {
  vehicle: TVehicle;
  isForm?: boolean;
}) => {
  const numberFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Card className="relative group overflow-hidden">
      <div className="relative">
        <Image
          alt="Vehicle Image"
          className="object-cover w-full h-48 rounded-t-lg group-hover:scale-110 transition-transform duration-300"
          height="200"
          src={vehicle.image}
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
        <span
          className={cn(
            "w-8 h-8 rounded-full inline-block absolute -top-3 -right-3"
          )}
          style={{
            backgroundColor: `${vehicle.color}`,
          }}
        ></span>
      </div>
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg">
          {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-gray-500 text-sm mb-3">
          {vehicle.description} / {vehicle.year}
        </p>
        <div className="text-sm flex-wrap justify-center sm:justify-start flex items-center gap-4">
          <p className="flex gap-2">
            <UsersRound size={"20"} /> {vehicle.number_of_seats}
          </p>
          <p className="flex gap-2">
            <Luggage size={"20"} /> {vehicle.luggage_capacity}kg
          </p>
          <p className="flex gap-2">
            <Fuel size={"20"} /> {vehicle.fuel_type}
          </p>
          <p className="flex gap-2">
            <Sliders size={"20"} /> {vehicle.gear_type}
          </p>
          <p className="flex gap-2">
            <Navigation size={"20"} /> {vehicle.driver_option}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="font-bold text-lg">
              {vehicle.currency} {numberFormatter.format(vehicle.price_per_day)}
              /day
            </p>
            <p className="text-xs">
              {vehicle.currency}{" "}
              {numberFormatter.format(vehicle.price_per_hour)}
              /hour
            </p>
          </div>
          {!isForm && (
            <Link
              href={`vehicles/${vehicle.id}`}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Book now
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleItem;
