"use client";

import { UserDetails } from "@/server/auth";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import UserAccountNav from "./UserAccountNav";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  // React.useEffect(() => {
  //   fetch("http://localhost:8000/api/v1/users/me", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDgyOTIxNDIsImlhdCI6MTcwNzY4NzM0MiwibmJmIjoxNzA3Njg3MzQyLCJzdWIiOjF9.oSw0vY541QkPYLn-uvXx7azLlqsYrRLPRR2OhczWBv0",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data.user);
  //       setUser(data.data.user);
  //     });
  // }, []);

  // const {
  //   data: user,
  //   isPending,
  //   error,
  // } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: () =>
  //     fetch("http://localhost:8000/api/v1/users/me", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDgyOTIxNDIsImlhdCI6MTcwNzY4NzM0MiwibmJmIjoxNzA3Njg3MzQyLCJzdWIiOjF9.oSw0vY541QkPYLn-uvXx7azLlqsYrRLPRR2OhczWBv0",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => data.data.user),
  // });

  React.useEffect(() => {
    fetch("http://localhost:8000/api/v1/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDgyOTIxNDIsImlhdCI6MTcwNzY4NzM0MiwibmJmIjoxNzA3Njg3MzQyLCJzdWIiOjF9.oSw0vY541QkPYLn-uvXx7azLlqsYrRLPRR2OhczWBv0",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data.user);
        return data.data.user;
      });
  }, []);
  const [user, setUser] = React.useState<UserDetails | null>(null);

  return (
    <nav className="px-5 sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Rent Gate</span>
          </Link>

          <MobileNav isAuth={!!user} />

          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <Link
                  href={"/auth/login"}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Sign in
                </Link>
                <Link
                  href={"/auth/sign-up"}
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Get started <ArrowRightIcon className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"pricing"}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>

                <Link
                  href={"contacts"}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Contacts
                </Link>

                <UserAccountNav
                  // TODO : user data management
                  // name={
                  //   !user.firstName || !user.lastName
                  //     ? "Your Account"
                  //     : "${user.firstname} ${user.lastname}"
                  // }
                  // email={user.email ?? ""}
                  // imageUrl={user.photo_url ?? ""}
                  name={user.name ?? ""}
                  email={user.email ?? ""}
                  imageUrl={user.photo ?? ""}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
