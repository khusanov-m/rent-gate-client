import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RentForm from "@/components/vehicle/RentForm";
import VehicleDetails from "@/components/vehicle/VehicleDetails";
import { DEMOVEHICLES } from "@/components/vehicle/vehicle.const";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }: { params: { vehicle: string } }) => {
  const vehicle = DEMOVEHICLES.find((vehicle) => vehicle.id === params.vehicle);
  const featured = DEMOVEHICLES.filter(
    (v) =>
      v.id !== vehicle?.id &&
      ((vehicle?.type && v.type === vehicle?.type) || !vehicle?.type)
  ).slice(0, 3);

  const featuredVehicles = featured.map((vehicle) => (
    <Card key={vehicle.id}>
      <CardHeader className="p-2 md:p-6">
        <Image
          src={`/${vehicle.type}.png`}
          alt="Vehicle Image"
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          className="mx-auto"
          height="50"
          width="300"
        />
        <CardTitle>{vehicle.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-6">
        <p className="text-base font-bold">
          {vehicle.currency} {vehicle.price_per_day}/day
        </p>
        <p className="text-xs">
          {vehicle.currency} {vehicle.price_per_hour}/hour
        </p>
      </CardContent>
    </Card>
  ));

  if (!vehicle) {
    return (
      <div className="max-w-screen-xl px-4 mx-auto py-6 space-y-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-6">
            Vehicle not found
          </h1>
          <p className="text-lg">
            We couldn&apos;t find the vehicle you&apos;re looking for. Please
            try again.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-2xl lg:text-3xl">Check these out</h3>
          <div className="grid gap-2 md:gap-4 grid-cols-3">
            {featuredVehicles}
          </div>
          <Link href="/vehicles" className={buttonVariants()}>
            Browse all <ArrowRightIcon className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-screen-xl px-4 mx-auto py-6">
      <aside className="space-y-6">
        {vehicle && <VehicleDetails vehicle={vehicle} isForm={true} />}
        <h3 className="font-bold text-2xl lg:text-3xl">Consider these</h3>
        <div className="grid gap-2 md:gap-4 grid-cols-3">
          {featuredVehicles}
        </div>
      </aside>
      <RentForm />
    </div>
  );
};

export default Page;
