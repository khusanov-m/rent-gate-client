"use client";

import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PopoverTrigger } from "@radix-ui/react-popover";
import Link from "next/link";
import * as React from "react";
import { DateRange } from "react-day-picker";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent } from "../ui/popover";

const RentForm = ({ id }: { id: string }) => {
  const [date, setDate] = React.useState<DateRange | undefined>();

  return (
    <Card role="form">
      <CardHeader>
        <CardTitle className="font-bold text-3xl lg:text-4xl">
          One step closer to book
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:gap-6">
        <div className="space-y-2">
          <Label htmlFor="pickup-location">Pickup Location</Label>
          <Input id="pickup-location" placeholder="Enter pickup location" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="return-location">Return Location</Label>
          <Input id="return-location" placeholder="Enter return location" />
        </div>
        <div>
          <Label htmlFor="rent-dates">Select dates</Label>
          <DatePickerWithRange
            id="rent-dates"
            date={date}
            setDate={setDate}
            btnClassName="w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pickup-date">Pickup time</Label>
            <Input id="pickup-date" type="time" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="return-date">Return time</Label>
            <Input id="return-date" type="time" />
          </div>
        </div>
        <div className="space-y-2">
          <Popover>
            <PopoverTrigger
              className={buttonVariants({
                variant: "outline",
                className: "w-full text-left",
              })}
            >
              Additional Services
            </PopoverTrigger>
            <PopoverContent align="start" className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox value="gps" id="gps" />
                <Label htmlFor="gps">GPS Navigation +10$</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox value="child-seat" id="child-seat" />
                <Label htmlFor="child-seat"> Child Seat +2$</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox value="bike-rack" id="bike-rack" />
                <Label htmlFor="bike-rack">Bike Rack +5$</Label>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="coverage">Coverage</Label>
          <Select>
            <SelectTrigger id="coverage">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard Coverage +30$</SelectItem>
              <SelectItem value="premium">Premium Coverage +50$</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/vehicles/${id}/payment`}
          className={buttonVariants({ className: "ml-auto" })}
        >
          Book Now
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RentForm;
