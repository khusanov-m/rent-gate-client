import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SearchVehicle from "@/components/vehicle/SearchVehicle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="relative w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Looking for a vehicle to rent for your next trip?
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We provide a wide range of vehicles for rent. Choose the one
                  that suits your needs and enjoy a hassle-free rental
                  experience.
                </p>

                <SearchVehicle />
              </div>
            </div>
            <Image
              alt="A modern and sophisticated vehicle showcase, set on a private, elegantly designed road. The scene is arranged like an exclusive exhibition, with a variety of vehicles lined up in a presentable manner. The lineup includes a sleek motorbike, a stylish car, a robust SUV, a large truck, and a spacious bus, each positioned to highlight its unique features. The road has a luxurious feel, with ambient lighting and a clean, minimalist design, creating an atmosphere of a high-end vehicle showcase rather than a public road. The style is modern, realistic, and refined, emphasizing the exclusivity of the setting."
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/home_main.png"
              width="1270"
            />
          </div>
        </header>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Experience the best vehicle rental service
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a wide selection of vehicles, affordable prices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Wide Selection of Vehicles
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Choose from a wide range of vehicles to suit your needs.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Affordable Prices</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We offer competitive prices to ensure you get the best value
                  for your money.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Convenient Booking Process
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our easy-to-use platform makes booking a vehicle quick and
                  hassle-free.
                </p>
              </div>

              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Wide Selection of Vehicles
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Choose from a wide range of vehicles to suit your needs. We
                  offer competitive prices to ensure you get the best value
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Affordable Prices</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We offer competitive prices
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Convenient Booking Process
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our easy-to-use platform makes booking a vehicle quick and
                  hassle-free. Booking a vehicle quick
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                className={buttonVariants({ size: "lg" })}
                href={"vehicles"}
              >
                View All Vehicles
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800">
          <div className="flex-1 px-4 py-12 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <h2 className="text-2xl font-bold">Vehicle Categories</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <Link href={"vehicles?type=Cars"}>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <CarIcon className="h-6 w-6" />
                    <span>Cars</span>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href={"vehicles?type=Motorbikes"}>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <BikeIcon className="h-6 w-6" />
                    <span>Motorbikes</span>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href={"vehicles?type=Trucks"}>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <TruckIcon className="h-6 w-6" />
                    <span>Trucks</span>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href={"vehicles?type=Buses"}>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <BusIcon className="h-6 w-6" />
                    <span>Buses</span>
                  </CardContent>
                </Link>
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
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet our Customers
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Trusted by the best teams in the world. We help teams of all
                sizes.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
              </div>
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link className={buttonVariants({ size: "lg" })} href="#">
                Contact Sales
              </Link>
              <Link
                className={buttonVariants({ variant: "outline", size: "lg" })}
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Performance
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Traffic spikes should be exciting, not scary.
                </h2>
                <Link className={buttonVariants()} href={"sign-up"}>
                  Get Started
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Security
                </div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Fully managed infrastructure designed to scale dynamically
                  with your traffic, a global edge to ensure your site is fast
                  for every customer, and the tools to monitor every aspect of
                  your app.
                </p>
                <Link className={buttonVariants()} href="#">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800">
          <div className="px-4 py-12 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <h2 className="text-2xl font-bold">
              Ready to find your perfect ride?
            </h2>
            <p className="mt-2 text-lg">
              Sign up now and explore our vast selection of vehicles.
            </p>
            <div className="mt-6 space-x-3">
              <Link className={buttonVariants()} href={"sign-up"}>
                Sign Up
              </Link>
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Vehicle Rental. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              About Us
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              FAQ
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>
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
