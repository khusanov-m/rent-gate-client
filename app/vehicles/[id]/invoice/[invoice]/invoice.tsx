"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn, formatPrice } from "@/lib/utils";
import { CancelBookingAction } from "@/queries/payment/cancel-booking";
import useGetPaymentByID from "@/queries/payment/get-payment-by-id";
import useStore from "@/store/useStore";
import { TUserStoreState, useUserStore } from "@/store/useUser";
import { TVehicleStoreState, useVehicleStore } from "@/store/useVehicle";
import { differenceInDays, format } from "date-fns";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export default function InvoicePage({ id }: { id: string }) {
  const vehicleStore = useStore<TVehicleStoreState, TVehicleStoreState>(
    useVehicleStore,
    (state) => state
  );
  const userStore = useStore<TUserStoreState, TUserStoreState>(
    useUserStore,
    (state) => state
  );

  const { handleCancelBooking, isPending: isCancelling } =
    CancelBookingAction();

  const onSubmit = () => {
    handleCancelBooking(id, {
      onSuccess: () => {
        toast.success("Booking has been cancelled");
      },
    });
  };

  const { data } = useGetPaymentByID(id);

  if (!vehicleStore || !userStore) {
    return <>NOT FOUND</>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 px-2 bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-3xl p-8 space-y-6">
        <CardHeader>
          <CardTitle>Receipt</CardTitle>
          <CardDescription>
            Billing address: <span>{userStore?.billingAddress?.address}</span>
          </CardDescription>
          <div className="flex gap-1">
            Status:{" "}
            <Badge className="capitalize">
              {vehicleStore.rentForm?.paymentType === "cashless" &&
              data?.payment_status === "init"
                ? "Waiting at the checkout"
                : data?.payment_status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Vehicle Details</h3>
              <div className="flex items-center gap-4 size-[300px]">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    alt="Car Image"
                    className="aspect-square rounded-lg object-cover"
                    src={vehicleStore.vehicle?.image || "/placeholder.svg"}
                    width="300"
                    height="300"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-x-1 flex items-center">
                <h4 className="text-lg font-medium">
                  {vehicleStore.vehicle?.make} {vehicleStore.vehicle?.model}
                </h4>
                <span
                  className={cn(
                    "size-6 rounded-full inline-block border border-gray-400"
                  )}
                  style={{
                    background: `${vehicleStore.vehicle?.color}`,
                  }}
                ></span>
              </div>
              <h3 className="text-lg font-semibold">Pick-up & Drop-off</h3>
              <div className="space-y-1">
                <p className="text-sm">
                  Pick-up:{" "}
                  {vehicleStore.rentForm?.date.from &&
                    format(vehicleStore.rentForm?.date.from, "LLLL d, yyyy")}
                </p>
                <p className="text-sm">
                  Drop-off:{" "}
                  {vehicleStore.rentForm?.date.to &&
                    format(vehicleStore.rentForm?.date.to, "LLLL d, yyyy")}
                </p>
              </div>

              <div>
                <p>List of ADD-ons:</p>
                <ul className="list-disc pl-6">
                  {vehicleStore.rentForm?.services?.map((service) => (
                    <li key={service.id} className="text-sm">
                      {service.option} - {formatPrice(service.price)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent>
          <h3 className="text-lg font-semibold">Payment Summary</h3>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <span>Rental Fee</span>
              <span>{formatPrice(vehicleStore.rentPrice)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Add-ons</span>
              <span>{formatPrice(vehicleStore.servicesPrice)}</span>
            </div>
            {!!vehicleStore.discountPrice && (
              <div className="flex items-center">
                <div>Discount</div>
                <div className="ml-auto">
                  {formatPrice(vehicleStore.discountPrice)}
                </div>
              </div>
            )}

            <Separator />
            <div className="flex items-center justify-between font-medium">
              <span>Total</span>
              <span>{formatPrice(vehicleStore.totalPrice)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          {data?.payment_status !== "cancelled" && (
            <CardDescription>
              Free cancelation available 1 day before
            </CardDescription>
          )}

          {vehicleStore.rentForm?.date.from &&
            differenceInDays(vehicleStore.rentForm.date.from, new Date()) > 1 &&
            data?.payment_status !== "cancelled" && (
              <Button className="w-full" variant="outline" onClick={onSubmit}>
                {isCancelling ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                  </>
                ) : (
                  "Cancel"
                )}
              </Button>
            )}

          <Button className="w-full" variant="outline">
            Contact Support
          </Button>

          {data?.payment_status !== "cancelled" && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="w-full">RG Points</Button>
                </TooltipTrigger>
                <TooltipContent className="w-[300px]">
                  <p>
                    Loyalty program is under development. You will get all your
                    RG Points once the program is live. Previous purchases will
                    be counted. Each user will be notified once the program is
                    live.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardFooter>
      </Card>
    </main>
  );
}
