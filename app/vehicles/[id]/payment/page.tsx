"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useGetVehicleByID from "@/queries/vehicle/get-vehicle-by-id";
import useStore from "@/store/useStore";
import { TVehicleStoreState, useVehicleStore } from "@/store/useVehicle";
import { differenceInCalendarDays } from "date-fns";
import {
  ArrowLeft,
  CalendarDaysIcon,
  ChevronLeft,
  ChevronRight,
  MapIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

  const onSubmit = () => {
    // onSuccess "invoice/" + id
  };
  console.log(vehicleStore);

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
            <Button size="icon" variant="outline">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button size="icon" variant="outline">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
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
                    <Icons.Car className="h-6 w-6" />
                    <div className="font-medium">
                      {vehicle.make} {vehicle.model}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-6 w-6" />
                    <div>
                      <div className="font-medium">
                        Pick-up:
                        {vehicleStore.rentForm?.date &&
                          vehicleStore.rentForm.date.from.toString()}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Drop-off:
                        {vehicleStore.rentForm?.date?.to &&
                          vehicleStore.rentForm?.date?.to.toString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapIcon className="h-6 w-6" />
                    <div>
                      <div className="font-medium">
                        Pick-up location: 123 Main St, Anytown, CA
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Drop-off location: 456 Main St, Anytown, CA
                      </div>
                    </div>
                  </div>

                  <div>
                    <p>List of ADD-ons:</p>
                    <ul className="list-disc pl-6">
                      {vehicleStore.rentForm?.services?.map((service) => (
                        <li key={service.id}>
                          {service.option} - {service.price}$
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center">
                  <div>Subtotal</div>
                  <div className="ml-auto">
                    $
                    {(vehicleStore.vehicle?.price_per_day || 0) *
                      differenceInCalendarDays(
                        vehicleStore.rentForm?.date.to || 0,
                        vehicleStore.rentForm?.date.from || 0
                      )}
                  </div>
                </div>
                <div className="flex items-center">
                  <div>Discount</div>
                  <div className="ml-auto">-${vehicleStore.discountPrice}</div>
                </div>
                <Separator />
                <div className="flex items-center font-medium">
                  <div>Total</div>
                  <div className="ml-auto">${vehicleStore.totalPrice}</div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  Submit Payment
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
                <CardHeader className="flex flex-row items-center space-y-0">
                  <CardTitle>Customer</CardTitle>
                  <Button className="ml-auto" variant="secondary">
                    Edit
                  </Button>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="grid gap-1">
                    <Link className="text-blue-600 underline" href="#">
                      Sophia Anderson
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
                      m@example.com
                    </Link>
                    <div className="text-gray-500 dark:text-gray-400">
                      +998 90 123 45 67
                    </div>
                  </div>
                </CardContent>
              </div>
              <Separator />

              <div>
                <CardHeader>
                  <CardTitle>Payment method</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div>
                    Master Card: 1234 **** **** **56
                    <br />
                    Card owner: Sophia Anderson
                    <br />
                    Expiry: 12/28
                  </div>
                </CardContent>
              </div>

              <Separator />
              <div>
                <CardHeader>
                  <CardTitle>Billing address</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Same as shipping address
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
