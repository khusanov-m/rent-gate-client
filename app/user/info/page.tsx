"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AddCard from "@/components/user/add-card";
import useStore from "@/store/useStore";
import { type TUserStoreState, useUserStore } from "@/store/useUser";
import Image from "next/image";

export default function UserInfoPage() {
  const userStore = useStore<TUserStoreState, TUserStoreState>(
    useUserStore,
    (state) => state
  );

  return (
    <div className="w-full h-[calc(100svh-56px)] grid place-items-center">
      <Card className="w-full max-w-3xl ">
        <CardHeader>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-y-0.5">
              <Avatar className="size-16">
                {userStore?.user?.photo ? (
                  <>
                    <Image
                      alt="User avatar"
                      src="/placeholder.svg"
                      width={64}
                      height={64}
                    />
                    <span className="sr-only">User avatar</span>
                  </>
                ) : (
                  <span className="size-16 rounded-full border bg-gray-50"></span>
                )}
              </Avatar>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">{userStore?.user?.name}</h1>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                UX Designer at Acme Corporation
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-x-4 flex items-center">
            {userStore?.userCards?.map((card, i) => (
              <button
                className="rounded bg-slate-100 border p-2 space-y-2 hover:bg-slate-200 transition-colors duration-200 ease-in-out"
                key={i}
              >
                <p className="">**** **** **** {card.last4}</p>
                <div className="flex justify-between items-end">
                  <p className="text-sm">
                    {card.exp_month}/{card.exp_year}
                  </p>

                  <Image
                    alt={card.brand || "payment provider"}
                    className="object-cover flex-none ml-auto"
                    height="25"
                    src={"/payment-providers/" + card.brand + ".svg"}
                    width="40"
                  />
                </div>
              </button>
            ))}
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-2">
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-4 h-4 opacity-70" />
                <a className="underline" href="#">
                  {userStore?.user?.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-4 h-4 opacity-70" />
                <span>+(123) 456-7890</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <AddCard />
    </div>
  );
}
