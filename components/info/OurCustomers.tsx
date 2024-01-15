import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const OurCustomers = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet our Customers
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Trusted by the best teams in the world. We help teams of all sizes.
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
  );
};

export default OurCustomers;
