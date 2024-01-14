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
import { Slider } from "@/components/ui/slider";
import { LineHeightIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import VehicleDetails from "./VehicleDetails";

const vehicleTypes = [
  {
    type: "Motorbikes",
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
    type: "Cars",
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
  const vehicleTypeParam =
    vehicleTypes.find((v) => v.type === type)?.list || [];

  const [numberFormatter] = React.useState(() => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  });

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

  return (
    // <section className="container pt-6 px-4 md:px-6 grid gap-10 items-start">
    //   <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
    //     <div className="text-sm font-semibold pl-4 sm:pl-0">Filter: </div>
    //     <DropdownMenu>
    //       <DropdownMenuTrigger asChild>
    //         <Button variant="link">
    //           Vehicle Type: {vehicleTypeFilterParam}
    //           <PlusIcon className="w-4 h-4 ml-2" />
    //         </Button>
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent align="start">
    //         <ScrollArea className="h-80 w-48">
    //           {vehicleTypes.map((vehicle) => (
    //             <div key={vehicle.type}>
    //               <DropdownMenuLabel
    //                 onClick={() => {
    //                   setVehicleTypeFilter(vehicle.list);
    //                 }}
    //               >
    //                 {vehicle.type}
    //               </DropdownMenuLabel>
    //               <DropdownMenuSeparator />
    //               {vehicle.list.map((item) => (
    //                 <DropdownMenuCheckboxItem
    //                   key={item}
    //                   checked={vehicleTypeFilter?.includes(item)}
    //                   onCheckedChange={(checked) => {
    //                     return checked
    //                       ? setVehicleTypeFilter((val) => [...val, item])
    //                       : setVehicleTypeFilter((val) =>
    //                           val?.filter((value) => value !== item)
    //                         );
    //                   }}
    //                 >
    //                   {item}
    //                 </DropdownMenuCheckboxItem>
    //               ))}
    //             </div>
    //           ))}
    //         </ScrollArea>
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //     <DropdownMenu>
    //       <DropdownMenuTrigger asChild>
    //         <Button variant="link">
    //           Price Range
    //           <PlusIcon className="w-4 h-4 ml-2" />
    //         </Button>
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent align="start">
    //         {priceRanges.map((item) => (
    //           <DropdownMenuCheckboxItem
    //             key={item}
    //             checked={priceRangeFilter?.includes(item)}
    //             onCheckedChange={(checked) => {
    //               return checked
    //                 ? setPriceRangeFilter((val) => [...val, item])
    //                 : setPriceRangeFilter((val) =>
    //                     val?.filter((value) => value !== item)
    //                   );
    //             }}
    //           >
    //             {item}
    //           </DropdownMenuCheckboxItem>
    //         ))}
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //     <DropdownMenu>
    //       <DropdownMenuTrigger asChild>
    //         <Button variant="link">
    //           Availability
    //           <PlusIcon className="w-4 h-4 ml-2" />
    //         </Button>
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent align="start">
    //         <DropdownMenuRadioGroup
    //           value={availabilityFilter}
    //           onValueChange={(val) => {
    //             if (availabilityFilter === val) {
    //               setAvailabilityFilter("");
    //             } else {
    //               setAvailabilityFilter(val);
    //             }
    //           }}
    //         >
    //           {availability.map((item) => (
    //             <DropdownMenuRadioItem key={item} value={item}>
    //               {item}
    //             </DropdownMenuRadioItem>
    //           ))}
    //         </DropdownMenuRadioGroup>
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   </div>

    //   <div className="grid gap-6 md:gap-8">
    //     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    //       {vehicles.map((vehicle) => (
    //         <VehicleDetails
    //           key={vehicle.id}
    //           vehicle={vehicle}
    //           numberFormatter={numberFormatter}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </section>
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
                  <Label htmlFor="price-range">Price Range</Label>
                  <Slider id="price-range" max={500} min={0} step={10} />
                </div>
                <div>
                  <Label htmlFor="vehicle-type">Vehicle Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">Car</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="rv">RV</SelectItem>
                      <SelectItem value="boat">Boat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter a location" />
                </div>
                <div>
                  <Label htmlFor="availability">Availability</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
        <main className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <span className="text-sm text-gray-500">
                Showing 1-10 of 100 results
              </span>
            </div>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="sm:ml-auto shrink-0" variant="outline">
                    <LineHeightIcon className="w-4 h-4 mr-2" />
                    Sort by
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuRadioGroup value="featured">
                    <DropdownMenuRadioItem value="featured">
                      Featured
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Newest">
                      Newest
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">
                      Price: Low to High
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="high">
                      Price: High to Low
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline">Reset</Button>
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
