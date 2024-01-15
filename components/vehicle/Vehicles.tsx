"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DashIcon, LineHeightIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import SortBy from "../SortBy";
import { Button } from "../ui/button";
import VehicleDetails from "./VehicleDetails";

const sortByOptions = [
  {
    key: "featured",
    value: "Featured",
  },
  {
    key: "newest",
    value: "Newest",
  },
  {
    key: "low",
    value: "Price: Low to High",
  },
  {
    key: "high",
    value: "Price: High to Low",
  },
];

const demovehicles = [
  {
    id: "ford_mustang_convertible",
    name: "Ford Mustang Convertible",
    description: "Sporty and stylish",
    type: "car",
    subType: "Sedan",
    pricePerDay: 99,
    pricePerHour: 20,
    currency: "USD",
    availability: "Available",
    imageUrl: "url_to_ford_mustang_image",
  },
  {
    id: "toyota_sienna_minivan",
    name: "Toyota Sienna Minivan",
    description: "Spacious and comfortable",
    type: "car",
    subType: "Van",
    pricePerDay: 79,
    pricePerHour: 15,
    currency: "USD",
    availability: "Unavailable",
    imageUrl: "url_to_toyota_sienna_image",
  },
  {
    id: "chevrolet_silverado_truck",
    name: "Chevrolet Silverado Truck",
    description: "Powerful and rugged",
    type: "motorbike",
    subType: "Truck",
    pricePerDay: 89,
    pricePerHour: 17,
    currency: "USD",
    availability: "Available",
    imageUrl: "url_to_chevrolet_silverado_image",
  },
  {
    id: "ford_mustang_convertible2",
    name: "Ford Mustang Convertible",
    description: "Sporty and stylish",
    type: "car",
    subType: "Sedan",
    pricePerDay: 99,
    pricePerHour: 20,
    currency: "USD",
    availability: "Available",
    imageUrl: "url_to_ford_mustang_image",
  },
  {
    id: "toyota_sienna_minivan2",
    name: "Toyota Sienna Minivan",
    description: "Spacious and comfortable",
    type: "car",
    subType: "Coupe",
    pricePerDay: 79,
    pricePerHour: 15,
    currency: "USD",
    availability: "Unavailable",
    imageUrl: "url_to_toyota_sienna_image",
  },
  {
    id: "boat_lambo",
    name: "Lamborghini Aventador",
    description: "Powerful and rugged",
    type: "boat",
    subType: "SUV",
    pricePerDay: 89,
    pricePerHour: 17,
    currency: "USD",
    availability: "Available",
    imageUrl: "url_to_chevrolet_silverado_image",
  },
];

const Vehicles = () => {
  const [numberFormatter] = React.useState(() => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  });

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [sortBy, setSortBy] = React.useState<string>("");

  const [vehicleType, setVehicleType] = React.useState<string>(
    () => searchParams.get("type") ?? ""
  );
  const [priceMin, setPriceMin] = React.useState<string>(
    () => searchParams.get("priceMin") ?? ""
  );
  const [priceMax, setPriceMax] = React.useState<string>(
    () => searchParams.get("priceMax") ?? ""
  );

  const vehicles = React.useMemo(() => {
    return demovehicles.filter((vehicle) => {
      const filterResuts = [];

      if (vehicleType) {
        filterResuts.push(vehicleType === vehicle.type);
      }

      if (priceMin && priceMax) {
        filterResuts.push(
          vehicle.pricePerDay >= Number(priceMin) &&
            vehicle.pricePerDay <= Number(priceMax)
        );
      } else if (priceMin) {
        filterResuts.push(vehicle.pricePerDay >= Number(priceMin));
      } else if (priceMax) {
        filterResuts.push(vehicle.pricePerDay <= Number(priceMax));
      }

      if (filterResuts.length === 0) return true;
      return filterResuts.every((result) => result);
    });
  }, [vehicleType, priceMin, priceMax]);

  const onReset = () => {
    setVehicleType("");
    setPriceMin("");
    setPriceMax("");
  };

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setPrice: (val: string) => void
  ) => {
    const value = event.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setPrice(value);
    }
  };

  React.useEffect(() => {
    const params = new URLSearchParams();
    if (vehicleType) {
      params.set("type", vehicleType);
    }
    if (priceMin) {
      params.set("priceMin", priceMin.toString());
    }
    if (priceMax) {
      params.set("priceMax", priceMax.toString());
    }
    router.replace(`${pathname}?${params.toString()}`, {});
  }, [pathname, router, vehicleType, priceMin, priceMax]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Find Your Perfect Ride</h1>
        <p className="text-gray-500">
          Choose from a wide range of vehicles for your next adventure.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <aside className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Filter Vehicles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter a location" />
                </div>
                <div>
                  <Label htmlFor="price-range">Price Range</Label>

                  <div className="flex items-center justify-between gap-2">
                    <Input
                      id="price-range"
                      placeholder="0"
                      value={priceMin}
                      onChange={(e) => handlePriceChange(e, setPriceMin)}
                    />
                    <DashIcon className="w-4 h-4" />
                    <Input
                      placeholder="100"
                      value={priceMax}
                      onChange={(e) => handlePriceChange(e, setPriceMax)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="vehicle-type">Vehicle Type</Label>
                  <Select value={vehicleType} onValueChange={setVehicleType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">Car</SelectItem>
                      <SelectItem value="motorbike">Motorbike</SelectItem>
                      <SelectItem value="rv">RV</SelectItem>
                      <SelectItem value="boat">Boat</SelectItem>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="bus">Bus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
        <main className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <span className="text-sm text-gray-500">
                {vehicles.length > 0
                  ? `Showing 1-${vehicles.length} of ${demovehicles.length} results`
                  : `Showing 0 results of ${demovehicles.length} results`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <SortBy
                icon={<LineHeightIcon className="w-4 h-4 mr-2" />}
                options={sortByOptions}
                placeholder="Sort by"
                setValue={setSortBy}
                value={sortBy}
              />

              <Button variant="outline" onClick={onReset}>
                Reset
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vehicles.map((vehicle) => (
              <VehicleDetails
                key={vehicle.id}
                vehicle={vehicle}
                numberFormatter={numberFormatter}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Vehicles;
