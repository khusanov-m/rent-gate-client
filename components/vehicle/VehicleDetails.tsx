import Image from "next/image";
import { Button } from "../ui/button";
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
    // <div className="relative group">
    //   <Link className="absolute inset-0 z-10" href={`/${vehicle.id}`}>
    //     <span className="sr-only">View</span>
    //   </Link>
    //   <Image
    //     alt="Vehicle Image"
    //     className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
    //     height={200}
    //     src="/placeholder.svg"
    //     width={200}
    //   />
    //   <div className="flex-1 py-4">
    //     <h3 className="font-semibold tracking-tight">{vehicle.name}</h3>
    //     <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
    //       {vehicle.description}
    //     </small>
    //     <h4 className="font-semibold">
    //       {vehicle.currency} {numberFormatter.format(vehicle.pricePerDay)}
    //     </h4>
    //     <p
    //       className={cn(
    //         vehicle.availability === "Available"
    //           ? "text-green-500"
    //           : "text-red-500"
    //       )}
    //     >
    //       {vehicle.availability}
    //     </p>
    //   </div>
    // </div>
    <Card>
      <Image
        alt="Vehicle Image"
        className="object-cover w-full h-48 rounded-t-lg"
        height="200"
        src="/placeholder.svg"
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width="300"
      />
      <CardContent>
        <h3 className="font-semibold text-lg">{vehicle.name}</h3>
        <p className="text-gray-500 text-sm">{vehicle.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg">
            {vehicle.currency} {numberFormatter.format(vehicle.pricePerDay)}/day
          </span>
          <Button variant="outline">Book Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleDetails;
