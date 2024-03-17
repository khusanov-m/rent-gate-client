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
  driver_option: string;
  price_per_hour: number;
  price_per_day: number;
  currency: string;
  number_of_seats: number;
  luggage_capacity: number;
  vehicle_type: string;
  power_type: string;
  make: string;
  model: string;
  color: string;
  owner_type: string;
  owner_id: number;
  location: null;
  in_subscription_type: null;
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

export const vehicleRentSchema = z.object({
  vehicleId: z.string(),
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
  paymentType: z.string(),
  services: z.array(
    z.object({
      id: z.string(),
      option: z.string(),
      price: z.number(),
    })
  ),
});
export type vehicleRentTypeSchema = z.infer<typeof vehicleRentSchema>;
