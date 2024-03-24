import { TVehicle } from "@/types/vehicle.type";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const FeaturedVehicle = ({ vehicle }: { vehicle: TVehicle }) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <Image
          alt={vehicle.make}
          className="w-full h-48 object-cover"
          height="200"
          src={vehicle.image}
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          width="300"
        />
        <h3 className="mt-4 text-lg font-bold mb-2">
          {vehicle.make}
          {vehicle.model}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm text-gray-500">
            <span>${vehicle.price_per_day}/day</span>
          </p>
          <Link
            href={`/vehicles/${vehicle.id}`}
            className={buttonVariants({
              size: "sm",
            })}
          >
            View <ArrowRightIcon className="ml-1 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedVehicle;
