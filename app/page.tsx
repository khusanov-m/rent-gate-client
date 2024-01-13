"use client";

import { DatePickerWithPresets } from "@/components/DatePickerWithPresets";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function Home() {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="relative h-[600px] bg-[#f5f5f5]">
          <Image
            alt="Hero"
            className="absolute inset-0 object-cover w-full h-full"
            height="600"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1920/600",
              objectFit: "cover",
            }}
            width="1920"
          />
          <div className="relative z-10 px-4 py-12 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <h1 className="text-4xl font-bold text-white">
              Rent the perfect vehicle for your needs
            </h1>
            <p className="mt-2 text-lg text-white">
              Enter your location and desired rental dates below.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Input
                className={buttonVariants({
                  variant: "outline",
                })}
                placeholder="Location"
              />
              <DatePickerWithPresets
                className="w-full"
                date={startDate}
                setDate={setStartDate}
              />
              <DatePickerWithPresets
                className="w-full"
                date={endDate}
                setDate={setEndDate}
              />
              <Button className="md:col-span-3">Search</Button>
            </div>
          </div>
        </header>
        <main className="flex-1 px-4 py-12 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold">Vehicle Categories</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card>
              <CardContent className="flex items-center gap-4 pt-6">
                <CarIcon className="h-6 w-6" />
                <span>Cars</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 pt-6">
                <BikeIcon className="h-6 w-6" />
                <span>Motorcycles</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 pt-6">
                <TruckIcon className="h-6 w-6" />
                <span>Trucks</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 pt-6">
                <BusIcon className="h-6 w-6" />
                <span>Buses</span>
              </CardContent>
            </Card>
          </div>
          <h2 className="mt-12 text-2xl font-bold">Featured Vehicles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card>
              <CardContent>
                <Image
                  alt="Vehicle"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="mt-4 text-lg font-bold">Sedan Car</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Comfortable and fuel-efficient.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  alt="Vehicle"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="mt-4 text-lg font-bold">Sport Motorcycle</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Fast and thrilling.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  alt="Vehicle"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="mt-4 text-lg font-bold">Pickup Truck</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Strong and spacious.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  alt="Vehicle"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="mt-4 text-lg font-bold">Tour Bus</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Perfect for group travels.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800">
          <div className="px-4 py-12 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <h2 className="text-2xl font-bold">
              Ready to find your perfect ride?
            </h2>
            <p className="mt-2 text-lg">
              Sign up now and explore our vast selection of vehicles.
            </p>
            <div className="mt-6">
              <Link className={buttonVariants()} href={"/auth"}>
                Sign Up
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function BikeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  );
}

function BusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}

function CarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}
