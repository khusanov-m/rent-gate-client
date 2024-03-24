import axiosInstance from "@/lib/axios";
import { PagingConfig } from "@/types/config.type";
import { RentalItem } from "@/types/order.type";

export type RentalHistory = {
  data: {
    rental_history: RentalItem[];
  } & PagingConfig;
  status: string;
};



export const getRentalsAPI = async (query: string = "") => {
  const q = query ? `?${query}` : "";
  const res = await axiosInstance.get<RentalHistory>("/history/rental" + q);
  if (res.data.status === "success") {
    return res.data.data;
  }
  return res.data.data;
};
