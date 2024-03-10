import { z } from "zod";

export enum EDriverOption {
  WITH_DRIVER = "with_driver",
  WITHOUT_DRIVER = "without_driver",
  BOTH = "both",
}

export enum EVehicleType {
  CAR = "car",
  BIKE = "bike",
  BOAT = "boat",
}

export type TVehicle = {
  id: string;
  name: string;
  description: string;

  type: EVehicleType;
  sub_type: string;
  gear_type: string;
  fuel_type: string;
  make: string;
  model: string;
  year: number;
  color: string;

  number_of_seats: number;
  number_of_doors: number;
  luggage_capacity: number;
  price_per_day: number;
  price_per_hour: number;
  currency: string;
  is_available: string;
  driver_option: EDriverOption;

  location: string;
  in_subscription_type: string;
  image: string;

  created_at: string;
  updated_at: string;
};

export const vehiclesFilterSchema = z.object({
  location: z.string(),
  priceMin: z.string().refine((val) => val === "" || /^\d+$/.test(val)),
  priceMax: z.string().refine((val) => val === "" || /^\d+$/.test(val)),
  vehicleType: z.string(),
});
export type vehiclesFilterTypeSchema = z.infer<typeof vehiclesFilterSchema>;
