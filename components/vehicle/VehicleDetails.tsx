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
        src="/placeholder.svg"
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width="300"
      />
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg">{vehicle.name}</h3>
        <p className="text-gray-500 text-sm">{vehicle.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg">
            {vehicle.currency} {numberFormatter.format(vehicle.pricePerDay)}/day
          </span>
          <Link
            href={
              vehicle.availability === "Available"
                ? `vehicles/${vehicle.id}`
                : "#"
            }
            className={buttonVariants({ variant: "outline" })}
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
