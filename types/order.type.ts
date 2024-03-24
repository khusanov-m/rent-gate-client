export type RentalItem = {
  id: string;
  user_id: number;
  vehicle_id: string;
  payment_id: string;
  total_amount: number;
  price_per_hour: number;
  price_per_day: number;
  duration: number;
  status: string;
};