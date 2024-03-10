import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const FeaturedVehicle = ({
  vehicle,
}: {
  vehicle: {
    id: string;
    name: string;
    description: string;
    src: string;
    alt: string;
    price_per_day: number;
    price_per_hour: number;
  };
}) => {
  return (
    <Card>
      <CardContent>
        <Image
          alt={vehicle.alt}
          className="w-full h-48 object-cover"
          height="200"
          src={vehicle.src}
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          width="300"
        />
        <h3 className="mt-4 text-lg font-bold mb-2">{vehicle.name}</h3>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm text-gray-500">
            <span>${vehicle.price_per_day}/day</span>
            <sub>${vehicle.price_per_hour}/hour</sub>
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
