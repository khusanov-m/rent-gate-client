"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { PlusIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import VehicleDetails from "./VehicleDetails";

const vehicleTypes = [
  {
    type: "Motorbike",
    list: [
      "Scooter",
      "Moped",
      "Cruiser",
      "Sport",
      "Touring",
      "Dual Sport",
      "Dirt Bike",
      "Trials",
      "Off-Road",
    ],
  },
  {
    type: "Car",
    list: [
      "Sedan",
      "SUV",
      "Truck",
      "Van",
      "Convertible",
      "Coupe",
      "Wagon",
      "Sports",
      "Off-road",
    ],
  },
];

const priceRanges = ["<< $50", ">> $50", ">> $100", ">> $150", ">> $200"];

const availability = ["Available", "Unavailable"];

const demovehicles = [
  {
    id: "ford_mustang_convertible",
    name: "Ford Mustang Convertible",
    description: "Sporty and stylish",
    type: "Sedan",
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
    type: "Van",
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
    type: "Truck",
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
    type: "Sedan",
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
    type: "Coupe",
    pricePerDay: 79,
    pricePerHour: 15,
    currency: "USD",
    availability: "Unavailable",
    imageUrl: "url_to_toyota_sienna_image",
  },
  {
    id: "chevrolet_silverado_truck2",
    name: "Chevrolet Silverado Truck",
    description: "Powerful and rugged",
    type: "SUV",
    pricePerDay: 89,
    pricePerHour: 17,
    currency: "USD",
    availability: "Available",
    imageUrl: "url_to_chevrolet_silverado_image",
  },
];

const Vehicles = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const vehicleTypeParam = type === "Car" ? ["Sedan"] : type ? [type] : [];

  const [numberFormatter] = React.useState(
    () =>
      new Intl.NumberFormat(window.navigator.language, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
  );

  const [vehicleTypeFilter, setVehicleTypeFilter] =
    React.useState<string[]>(vehicleTypeParam);
  const vehicleTypeFilterParam = vehicleTypeFilter.join(", ");
  const [priceRangeFilter, setPriceRangeFilter] = React.useState<string[]>([]);
  const [availabilityFilter, setAvailabilityFilter] =
    React.useState<string>("");

  const vehicles = React.useMemo(() => {
    return demovehicles.filter((vehicle) => {
      const filterResuts = [];
      if (vehicleTypeFilter.length > 0) {
        filterResuts.push(vehicleTypeFilter.includes(vehicle.type));
      }
      if (priceRangeFilter.length > 0) {
        filterResuts.push(
          priceRangeFilter.includes(vehicle.pricePerDay.toString())
        );
      }
      if (availabilityFilter) {
        filterResuts.push(vehicle.availability === availabilityFilter);
      }

      if (filterResuts.length === 0) return true;
      return filterResuts.every((result) => result);
    });
  }, [vehicleTypeFilter, priceRangeFilter, availabilityFilter]);

  console.log(vehicles);

  return (
    <section className="container pt-6 px-4 md:px-6 grid gap-10 items-start">
      <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
        <div className="text-sm font-semibold pl-4 sm:pl-0">Filter: </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link">
              Vehicle Type: {vehicleTypeFilterParam}
              <PlusIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <ScrollArea className="h-80 w-48">
              {vehicleTypes.map((vehicle) => (
                <div key={vehicle.type}>
                  <DropdownMenuLabel>{vehicle.type}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {vehicle.list.map((item) => (
                    <DropdownMenuCheckboxItem
                      key={item}
                      checked={vehicleTypeFilter?.includes(item)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? setVehicleTypeFilter((val) => [...val, item])
                          : setVehicleTypeFilter((val) =>
                              val?.filter((value) => value !== item)
                            );
                      }}
                    >
                      {item}
                    </DropdownMenuCheckboxItem>
                  ))}
                </div>
              ))}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link">
              Price Range
              <PlusIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {priceRanges.map((item) => (
              <DropdownMenuCheckboxItem
                key={item}
                checked={priceRangeFilter?.includes(item)}
                onCheckedChange={(checked) => {
                  return checked
                    ? setPriceRangeFilter((val) => [...val, item])
                    : setPriceRangeFilter((val) =>
                        val?.filter((value) => value !== item)
                      );
                }}
              >
                {item}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link">
              Availability
              <PlusIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuRadioGroup
              value={availabilityFilter}
              onValueChange={(val) => {
                if (availabilityFilter === val) {
                  setAvailabilityFilter("");
                } else {
                  setAvailabilityFilter(val);
                }
              }}
            >
              {availability.map((item) => (
                <DropdownMenuRadioItem key={item} value={item}>
                  {item}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-6 md:gap-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleDetails
              key={vehicle.id}
              vehicle={vehicle}
              numberFormatter={numberFormatter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
