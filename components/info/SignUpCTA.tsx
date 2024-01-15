import Link from "next/link";
import { buttonVariants } from "../ui/button";

const SignUpCTA = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="px-4 py-12 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold">Ready to find your perfect ride?</h2>
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
  );
};

export default SignUpCTA;
