"use client";

import { DatePickerWithRange } from "@/components/input/DatePickerWithRange";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatPrice } from "@/lib/utils";
import useGetVehicleByID from "@/queries/vehicle/get-vehicle-by-id";
import { vehicleRentSchema, type TVehicleRentSchema } from "@/schema/vehicle";
import { useVehicleStore } from "@/store/useVehicle";
import { zodResolver } from "@hookform/resolvers/zod";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent } from "../ui/popover";
import { VEHICLE_SERVICES } from "./vehicle.const";

export default function RentForm({ id }: { id: string }) {
  const router = useRouter();
  const form = useForm<TVehicleRentSchema>({
    resolver: zodResolver(vehicleRentSchema),
    defaultValues: {
      vehicleId: id,
      date: undefined,
      paymentType: undefined,
      services: [],
    },
  });

  const { data: vehicle, isLoading } = useGetVehicleByID(id);
  const { setRentForm, setVehicle } = useVehicleStore();

  const onSubmit = (val: TVehicleRentSchema) => {
    setRentForm(val);
    if (vehicle) setVehicle(vehicle);
    router.push(`/vehicles/${id}/payment`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card role="form">
          <CardHeader>
            <CardTitle className="font-bold text-3xl lg:text-4xl">
              One step closer to book
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:gap-6">
            <div>
              <FormField
                control={form.control}
                name="date"
                disabled={isLoading}
                render={(item) => (
                  <FormItem>
                    <FormLabel htmlFor="rent-dates">Select dates</FormLabel>
                    <FormControl>
                      <DatePickerWithRange
                        id="rent-dates"
                        date={item.field.value}
                        setDate={item.field.onChange}
                        btnClassName="w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <Popover>
                <PopoverTrigger
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full text-left",
                  })}
                >
                  Additional Services
                </PopoverTrigger>
                <PopoverContent align="start" className="space-y-2">
                  <FormField
                    control={form.control}
                    disabled={isLoading}
                    name="services"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">
                            Services you may wish to have
                          </FormLabel>
                          <FormDescription>
                            Make sure to select the services matching your needs
                            and vehicle type
                          </FormDescription>
                        </div>
                        {VEHICLE_SERVICES.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="services"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={
                                        !!field.value?.find(
                                          (el) => el.id === item.id
                                        )
                                      }
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              {
                                                id: item.id,
                                                option: item.option,
                                                price: item.price,
                                              },
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value.id !== item.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {item.option} +{formatPrice(item.price)}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <FormField
                control={form.control}
                name="paymentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="payment-type">Payment Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                        disabled={isLoading}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cashless">Cash</SelectItem>
                          <SelectItem value="credit">Credit Card</SelectItem>
                          <SelectItem value="debit">Debit Card</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </>
              ) : (
                "Book Now"
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
