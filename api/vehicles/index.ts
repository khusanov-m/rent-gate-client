import axiosInstance from "@/lib/axios";
import { PagingConfig } from "@/types/config.type";
import type { TVehicle } from "@/types/vehicle.type";

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

export type VehicleItemResponse = {
  data: TVehicle;
  status: string;
}
export const getVehicleItemAPI = async (id: string) => {
  const res = await axiosInstance.get<VehicleItemResponse>("/vehicles/" + id);
  if (res.data.status === "success") {
    return res.data.data;
  }
  return res.data.data;
}