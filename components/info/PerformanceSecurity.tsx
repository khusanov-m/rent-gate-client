import Link from "next/link";
import { buttonVariants } from "../ui/button";

const PerformanceSecurity = () => {
  return (
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
            <Link className={buttonVariants()} href={"/auth/sign-up"}>
              Get Started
            </Link>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Security
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Fully managed infrastructure designed to scale dynamically with
              your traffic, a global edge to ensure your site is fast for every
              customer, and the tools to monitor every aspect of your app.
            </p>
            <Link className={buttonVariants()} href="#">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSecurity;
