import useGetUserLocation from "@/queries/user/get-country";
import {
  vehiclesFilterSchema,
  vehiclesFilterTypeSchema,
} from "@/schema/vehicle";
import { zodResolver } from "@hookform/resolvers/zod";
import { DashIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function VehicleFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { location } = useGetUserLocation();

  const form = useForm<vehiclesFilterTypeSchema>({
    resolver: zodResolver(vehiclesFilterSchema),
    defaultValues: {
      location: location?.city ?? "",
      priceMin: searchParams.get("priceMin") ?? "",
      priceMax: searchParams.get("priceMax") ?? "",
      vehicleType: searchParams.get("type") ?? "",
    },
  });

  const onSubmit = (val: vehiclesFilterTypeSchema) => {
    const params = new URLSearchParams();
    if (val.location) params.set("location", val.location);
    if (val.vehicleType) params.set("type", val.vehicleType);
    if (val.priceMin) params.set("priceMin", val.priceMin);
    if (val.priceMax) params.set("priceMax", val.priceMax);
    router.replace(`?${params.toString()}`, {});
  };

  const onReset = () => {
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      if (key === "sortBy") {
        params.set(key, value);
      }
    });
    form.reset();
    router.replace(`?${params.toString()}`, {});
  };

  const isPending = false;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="sticky top-[78px]"
      >
        <Card>
          <CardHeader>
            <CardTitle>Filter Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="City"
                        type="text"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Label htmlFor="price-range">Price Range</Label>

                <div className="flex items-center justify-between gap-2">
                  <FormField
                    control={form.control}
                    name="priceMin"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input id="price-range" placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DashIcon className="w-4 h-4" />

                  <FormField
                    control={form.control}
                    name="priceMax"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="vehicleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Car</SelectLabel>
                            <SelectItem value="sedan">Sedan</SelectItem>
                            <SelectItem value="SUV">SUV</SelectItem>
                            <SelectItem value="coupe">Coupe</SelectItem>
                          </SelectGroup>

                          <SelectGroup>
                            <SelectLabel>Other</SelectLabel>
                            <SelectItem value="bike">Motorbike</SelectItem>
                            <SelectItem value="rv">RV</SelectItem>
                            <SelectItem value="boat">Boat</SelectItem>
                            <SelectItem value="truck">Truck</SelectItem>
                            <SelectItem value="bus">Bus</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-end space-x-3">
            <Button type="button" variant={"secondary"} onClick={onReset}>
              Reset
            </Button>
            <Button type="submit">Apply</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
