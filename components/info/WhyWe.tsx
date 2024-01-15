import Link from "next/link";
import { buttonVariants } from "../ui/button";

const WhyWe = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Why Rent Gate
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
            <h3 className="text-lg font-bold">Wide Selection of Vehicles</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose from a wide range of vehicles to suit your needs.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Affordable Prices</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We offer competitive prices to ensure you get the best value for
              your money.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Convenient Booking Process</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our easy-to-use platform makes booking a vehicle quick and
              hassle-free.
            </p>
          </div>

          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Wide Selection of Vehicles</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose from a wide range of vehicles to suit your needs. We offer
              competitive prices to ensure you get the best value
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Affordable Prices</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We offer competitive prices
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Convenient Booking Process</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our easy-to-use platform makes booking a vehicle quick and
              hassle-free. Booking a vehicle quick
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <Link className={buttonVariants({ size: "lg" })} href={"vehicles"}>
            View All Vehicles
          </Link>
        </div>
      </div>
    </section>
  );
};
export default WhyWe;
