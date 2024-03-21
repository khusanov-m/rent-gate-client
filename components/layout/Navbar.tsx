"use client";

import { Skeleton } from "@/components/ui/skeleton";
import useGetUserQuery from "@/queries/user/get-user";
import useStore from "@/store/useStore";
import { TUserStoreState, useUserStore } from "@/store/useUser";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import UserAccountNav from "../UserAccountNav";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user, isLoading } = useGetUserQuery();

  const userStore = useStore<TUserStoreState, TUserStoreState>(
    useUserStore,
    (state) => state
  );

  useEffect(() => {
    if (user) {
      userStore?.setUser(user);
    }
  }, [user]);

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    queryClient.invalidateQueries({
      queryKey: ["user"],
    });
    router.push("/");
  };

  const loaderView = (
    <>
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[100px]" />
    </>
  );
  const guestView = (
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
  );
  const authenticatedView = (
    <>
      <div>
        <Link
          href={"/subscription"}
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "gap-1",
          })}
        >
          Subscription
        </Link>
        <Badge>soon</Badge>
      </div>

      <Link
        href={"/contacts"}
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
        })}
      >
        Contacts
      </Link>

      <UserAccountNav
        name={user?.name ?? ""}
        email={user?.email ?? ""}
        imageUrl={""}
        onLogout={onLogout}
      />
    </>
  );

  return (
    <nav className="px-5 sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Rent Gate</span>
          </Link>

          <MobileNav isAuth={!!user} onLogout={onLogout} />
          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (isLoading ? loaderView : guestView) : authenticatedView}
          </div>
        </div>
      </div>
    </nav>
  );
}
