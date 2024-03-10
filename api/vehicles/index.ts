import axiosInstance from "@/lib/axios";
import { TVehicle } from "@/schema/vehicle";
import { PagingConfig } from "@/types/config";

export type VehiclesPagingResponse = {
  data: {
    vehicles: TVehicle[];
  } & PagingConfig;
  status: string;
};
export const getVehiclesListAPI = async (query: string = "") => {
  const q = query ? `?${query}` : "";
  const res = await axiosInstance.get<VehiclesPagingResponse>("/vehicles" + q);
  if (res.data.status === "success") {
    return res.data.data;
  }
  return res.data.data;
};
