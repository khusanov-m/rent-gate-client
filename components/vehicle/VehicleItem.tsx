import { cn } from "@/lib/utils";
import type { TVehicle } from "@/types/vehicle.type";
import { Fuel, Luggage, Navigation, UsersRound, Zap } from "lucide-react";
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
      <div>
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
      </div>
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg relative">
          <span>
            {vehicle.make} {vehicle.model}
          </span>
          <span
            className={cn(
              "size-6 rounded-full inline-block border border-gray-400 absolute right-0 top-1/2 -translate-y-1/2"
            )}
            style={{
              background: `${vehicle.color}`,
            }}
          ></span>
        </h3>
        <div className="text-sm flex-wrap justify-center sm:justify-start flex items-center gap-4">
          <p className="flex gap-2">
            <UsersRound size={20} /> {vehicle.number_of_seats}
          </p>
          <p className="flex gap-2">
            <Luggage size={20} /> {vehicle.luggage_capacity}kg
          </p>
          <p className="flex gap-2">
            {vehicle.power_type === "electric" ? (
              <Zap size={20} />
            ) : (
              <Fuel size={20} />
            )}
            {vehicle.power_type}
          </p>

          <p className="flex gap-2">
            <Navigation size={20} /> {vehicle.driver_option}
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
