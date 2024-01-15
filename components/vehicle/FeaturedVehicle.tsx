import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const FeaturedVehicle = ({
  vehicle,
}: {
  vehicle: {
    name: string;
    description: string;
    src: string;
    alt: string;
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
        <h3 className="mt-4 text-lg font-bold">{vehicle.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{vehicle.description}</p>
      </CardContent>
    </Card>
  );
};

export default FeaturedVehicle;
