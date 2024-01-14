import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const VehicleDetails = ({
  vehicle,
  numberFormatter,
}: {
  vehicle: {
    id: string;
    name: string;
    description: string;
    pricePerDay: number;
    currency: string;
    availability: string;
  };
  numberFormatter: Intl.NumberFormat;
}) => {
  return (
    <div className="relative group">
      <Link className="absolute inset-0 z-10" href={`/${vehicle.id}`}>
        <span className="sr-only">View</span>
      </Link>
      <Image
        alt="Vehicle Image"
        className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        height={200}
        src="/placeholder.svg"
        width={200}
      />
      <div className="flex-1 py-4">
        <h3 className="font-semibold tracking-tight">{vehicle.name}</h3>
        <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
          {vehicle.description}
        </small>
        <h4 className="font-semibold">
          {vehicle.currency} {numberFormatter.format(vehicle.pricePerDay)}
        </h4>
        <p
          className={cn(
            vehicle.availability === "Available"
              ? "text-green-500"
              : "text-red-500"
          )}
        >
          {vehicle.availability}
        </p>
      </div>
    </div>
  );
};

export default VehicleDetails;
