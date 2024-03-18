import { z } from "zod";


export const vehiclesFilterSchema = z.object({
  location: z.string(),
  priceMin: z.string().refine((val) => val === "" || /^\d+$/.test(val)),
  priceMax: z.string().refine((val) => val === "" || /^\d+$/.test(val)),
  vehicleType: z.string(),
});
export type TVehiclesFilterSchema = z.infer<typeof vehiclesFilterSchema>;

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
export type TVehicleRentSchema = z.infer<typeof vehicleRentSchema>;
