"use client";

import { Icons } from "@/components/Icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import { MakePaymentAction } from "@/queries/payment/make-payment";
import { MakeBookingAction } from "@/queries/payment/make-booking";
import useGetVehicleByID from "@/queries/vehicle/get-vehicle-by-id";
import useStore from "@/store/useStore";
import { TUserStoreState, useUserStore } from "@/store/useUser";
import { useVehicleStore, type TVehicleStoreState } from "@/store/useVehicle";
import { format } from "date-fns";
import {
  ArrowLeft,
  CalendarDaysIcon,
  ChevronsUpDown,
  Focus,
  ListPlus,
  Loader2,
  MapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function VehiclePaymentPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { data: vehicle } = useGetVehicleByID(params.id);

  const vehicleStore = useStore<TVehicleStoreState, TVehicleStoreState>(
    useVehicleStore,
    (state) => state
  );
  const userStore = useStore<TUserStoreState, TUserStoreState>(
    useUserStore,
    (state) => state
  );

  const { handleBooking, isPending, data, error } = MakeBookingAction();

  const onSubmit = () => {
    if (vehicleStore?.rentForm?.paymentType)
      handleBooking(
        {
          vehicleID: params.id,
          payload: {
            total_hours: vehicleStore?.totalHours,
            addons_with_discount_price: vehicleStore?.servicesPrice - vehicleStore?.discountPrice,
            payment_type: vehicleStore?.rentForm?.paymentType,
          },
        },
        {
          onSuccess: (data) => {
            if (vehicleStore.rentForm?.paymentType === "cashless") {
              router.push("invoice/" + data.id);
            } else {
              handlePayment(data.id, {
                onSuccess: () => {
                  router.push("invoice/" + data.id);
                },
                onError: (error) => {
                  toast.error(
                    error.message || "Something went wrong. Please try again."
                  );
                },
              });
            }
          },
          onError: (error) => {
            toast.error(
              error.message || "Something went wrong. Please try again."
            );
          },
        }
      );
  };

  const { handlePayment, isPending: isPaymentLoading } = MakePaymentAction();

  const setPayment = (last4: string) => {
    userStore?.setPayment(last4);
  };

  if (!vehicle || !vehicleStore) {
    return <>NOT FOUND</>;
  }

  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
          <Button onClick={() => router.back()} variant={"outline"}>
            <ArrowLeft className="h-4 w-4 -mx-2" />
            <span className="sr-only">Back</span>
          </Button>

          <h1 className="font-semibold text-lg md:text-xl">Vehicle Rental</h1>
          <div className="ml-auto flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon" variant="outline">
                  <Focus className="h-4 w-4" />
                  <span className="sr-only">Car view</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="space-y-3">
                  <DialogTitle>Look how hot is this. Sheeesh!</DialogTitle>
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <Image
                      src={vehicleStore.vehicle?.image || "/placeholder.svg"}
                      alt="Photo by Drew Beamer"
                      fill
                      sizes="100%"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Icons.Car className="size-6" />
                    <div className="font-medium">
                      {vehicle.make} {vehicle.model}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="size-6" />
                    <div>
                      <div className="font-medium">
                        Pick-up:{" "}
                        {vehicleStore.rentForm?.date.from &&
                          format(
                            vehicleStore.rentForm?.date.from,
                            "LLLL d, yyyy"
                          )}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Drop-off:{" "}
                        {vehicleStore.rentForm?.date.to &&
                          format(
                            vehicleStore.rentForm?.date.to,
                            "LLLL d, yyyy"
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapIcon className="size-6" />
                    <div>
                      <div className="font-medium">
                        Pick-up location: 123 Main St, Anytown, CA
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Drop-off location: 123 Main St, Anytown, CA
                      </div>
                    </div>
                  </div>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <ListPlus className="size-6 flex-none" /> List of
                          ADD-ons:
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6">
                          {vehicleStore.rentForm?.services?.map((service) => (
                            <li key={service.id}>
                              {service.option} - {formatPrice(service.price)}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center">
                  <div>Rental period</div>
                  <div className="ml-auto">
                    {formatPrice(vehicleStore.rentPrice)}
                  </div>
                </div>

                <div className="flex items-center">
                  <div>Add-ONS</div>
                  <div className="ml-auto">
                    {formatPrice(vehicleStore.servicesPrice)}
                  </div>
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
                <div className="flex items-center font-medium">
                  <div>Total</div>
                  <div className="ml-auto">
                    {formatPrice(vehicleStore.totalPrice)}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={onSubmit}
                  disabled={isPending || isPaymentLoading}
                >
                  {isPending || isPaymentLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                      wait
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>

                <Button size="sm" variant="outline">
                  Recieve invoice
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
            <Card>
              <div>
                <CardHeader className="flex-row items-center space-y-0">
                  <CardTitle>Customer</CardTitle>
                  <Button className="ml-auto" variant="secondary">
                    Edit
                  </Button>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="grid gap-1">
                    <Link className="text-blue-600 underline" href="#">
                      {userStore?.user?.name}
                    </Link>
                    <div>23 total orders</div>
                  </div>
                </CardContent>
              </div>
              <Separator />
              <div>
                <CardHeader>
                  <CardTitle>Contact information</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="grid gap-1">
                    <Link className="text-blue-600" href="#">
                      {userStore?.user?.email}
                    </Link>
                    <div className="text-gray-500 dark:text-gray-400">
                      {userStore?.user?.id}
                    </div>
                  </div>
                </CardContent>
              </div>
              <Separator />
              {vehicleStore.rentForm?.paymentType !== "cashless" ? (
                <div>
                  <CardHeader className="flex-row items-center space-y-0">
                    <CardTitle>Payment method</CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          size="icon"
                          className="ml-auto"
                          variant="outline"
                        >
                          <ChevronsUpDown className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Cards</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          {userStore?.userCards?.map((card) => (
                            <DropdownMenuItem
                              key={card.last4}
                              className="gap-2"
                            >
                              <Button
                                onClick={() => setPayment(card.last4)}
                                variant={"ghost"}
                                className="flex items-center justify-start gap-2 w-full p-0"
                              >
                                <Image
                                  alt={card.brand || "payment provider"}
                                  className="object-cover flex-none"
                                  height="25"
                                  src={
                                    "/payment-providers/" + card.brand + ".svg"
                                  }
                                  width="40"
                                />
                                <span>**** **** **** {card.last4}</span>
                              </Button>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                          <Link href="/user">Add new card</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="space-y-1">
                      <p className="flex items-center gap-2">
                        Card number: **** **** ****{" "}
                        {userStore?.selectedPayment?.last4}
                        <Image
                          alt={
                            userStore?.selectedPayment?.brand ||
                            "payment provider"
                          }
                          className="object-cover"
                          height="25"
                          src={
                            "/payment-providers/" +
                            userStore?.selectedPayment?.brand +
                            ".svg"
                          }
                          width="40"
                        />
                      </p>
                      <p>Card owner: {userStore?.user?.name}</p>
                      <p>
                        Expiry:{" "}
                        {String(userStore?.selectedPayment?.exp_month).padStart(
                          2,
                          "0"
                        )}
                        /{userStore?.selectedPayment?.exp_year}
                      </p>
                    </div>
                  </CardContent>
                </div>
              ) : (
                <div>
                  <CardHeader className="flex-row items-center space-y-0">
                    <CardTitle>Payment method</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="space-y-1">
                      <p className="flex items-center gap-2">Cash</p>
                    </div>
                  </CardContent>
                </div>
              )}

              <Separator />
              <div>
                <CardHeader>
                  <CardTitle>Billing address</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  {userStore?.billingAddress?.address}
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
