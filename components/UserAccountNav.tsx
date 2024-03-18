import { PersonIcon } from "@radix-ui/react-icons";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type UserAccountNavProps = {
  email: string | undefined;
  name: string;
  imageUrl: string;
};

const UserAccountNav = ({ email, imageUrl, name }: UserAccountNavProps) => {
  // load user subscription plan and check if user is subscribed or have active rental car
  // const subscriptionPlan = await getUserSubscriptionPlan();
  // const rentalCar = await getUserRentalCar();

  const router = useRouter();
  const queryClient = useQueryClient();

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    queryClient.invalidateQueries({
      queryKey: ["user"],
    });
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button className="rounded-full size-8 aspect-square bg-slate-400">
          <Avatar className="relative size-8">
            {imageUrl ? (
              <div className="relative aspect-square h-full w-full">
                <Image
                  fill
                  src={imageUrl}
                  alt="profile picture"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <AvatarFallback>
                <span className="sr-only">{name}</span>
                <PersonIcon className="size-4 text-zinc-900" />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            {name && <p className="font-medium text-sm text-black">{name}</p>}
            {email && (
              <p className="w-[200px] truncate text-xs text-zinc-700">
                {email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>

        {/* <DropdownMenuItem asChild>
          {subscriptionPlan?.isSubscribed ? (
            <Link href="/dashboard/billing">Manage Subscription</Link>
          ) : (
            <Link href="/pricing">
              Upgrade{" "}
              <SketchLogoIcon className="text-blue-600 h-4 w-4 ml-1.5" />
            </Link>
          )}
        </DropdownMenuItem> */}

        {/* <DropdownMenuItem asChild>
          {rentalCar ? (
            <Link href="/profile/rental">Manage rentals</Link>
          ) : (
            <Link href="/">
              View vehicles
            </Link>
          )}
        </DropdownMenuItem> */}

        <DropdownMenuSeparator />

        <DropdownMenuItem className="hover:bg-rose-600 focus:bg-rose-600 hover:text-white focus:text-white">
          <button onClick={onLogout}>Log out</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
