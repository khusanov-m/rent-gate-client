import type { TVehicle, vehicleRentTypeSchema } from "@/schema/vehicle";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TVehicleStoreState = {
  rentForm?: vehicleRentTypeSchema;
  totalPrice: number;
  discountPrice: number;
  vehicle?: TVehicle;
  servicesPrice: number;
  setRentForm: (payload: vehicleRentTypeSchema) => void;
  setVehicle: (vehicle: TVehicle) => void;
  calculateTotalPrice: () => void;
  clearVehicle: () => void;
};

export const useVehicleStore = create<TVehicleStoreState>()(
  persist(
    (set, get) => ({
      totalPrice: 0,
      discountPrice: 0,
      servicesPrice: 0,
      setRentForm: (payload) => set({ rentForm: payload }),
      setVehicle: (vehicle) => set({ vehicle }),
      calculateTotalPrice: () => {
        set((state) => {
          const servicesPrice = state.rentForm?.services.reduce(
            (acc, curr) => acc + curr.price,
            0
          );
          const totalPrice =
            state.vehicle!.price_per_day + (servicesPrice || 0);
          return {
            servicesPrice,
            totalPrice,
          };
        });
      },
      clearVehicle: () => set({ vehicle: undefined }),
    }),
    {
      name: "vehicle",
    }
  )
);
