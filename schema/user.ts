import { z } from "zod";

export const addCardSchema = z.object({
  cardNumber: z.string().refine((val) => val.length === 16),
  cardHolder: z.string(),
  month: z.string(),
  year: z.string(),
  cvv: z.string().refine((val) => val.length === 3),
});
export type TAddCardSchema = z.infer<typeof addCardSchema>;