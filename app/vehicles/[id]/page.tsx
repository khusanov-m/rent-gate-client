import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RentForm from "@/components/vehicle/RentForm";
import VehicleItem from "@/components/vehicle/VehicleItem";
import { DEMO_VEHICLES } from "@/components/vehicle/vehicle.const";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ArrowLeft } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  // fetch data
  const product = DEMO_VEHICLES.find((vehicle) => vehicle.id === id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.name || "Vehicle not found",
    description: product?.description || "",
    openGraph: {
      images: [`/${product?.type}.png`, ...previousImages],
    },
  };
}

export default function VehiclePage({ params }: { params: { id: string } }) {
  const vehicle = DEMO_VEHICLES.find((vehicle) => vehicle.id === params.id);
  const featured = DEMO_VEHICLES.filter(
    (v) =>
      v.id !== vehicle?.id &&
      v.availability === "Available" &&
      ((vehicle?.type && v.type === vehicle?.type) || !vehicle?.type)
  ).slice(0, 3);

  const featuredVehicles = featured.map((vehicle) => (
    <Card key={vehicle.id}>
      <Link href={`${vehicle.id}`}>
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
        <CardContent className="">
          <p className="text-base font-bold">
            {vehicle.currency} {vehicle.price_per_day}/day
          </p>
          <p className="text-xs">
            {vehicle.currency} {vehicle.price_per_hour}/hour
          </p>
        </CardContent>
      </Link>
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
        <div className="flex gap-4 items-center">
          <Link
            href="/vehicles"
            className={buttonVariants({ variant: "outline" })}
          >
            <ArrowLeft className="h-4 w-4 -mx-2" />
            <span className="sr-only">Back</span>
          </Link>

          <h3 className="font-bold text-2xl lg:text-3xl">Consider these</h3>
        </div>
        <div className="grid gap-2 md:gap-4 grid-cols-3">
          {featuredVehicles}
        </div>

        {vehicle && <VehicleItem vehicle={vehicle} isForm={true} />}
      </aside>

      <RentForm id={vehicle.id} />
    </div>
  );
}
