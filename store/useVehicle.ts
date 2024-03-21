import type { TVehicleRentSchema } from "@/schema/vehicle";
import type { TVehicle } from "@/types/vehicle.type";
import { differenceInCalendarDays } from "date-fns";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TVehicleStoreState = {
  rentForm?: TVehicleRentSchema;
  totalPrice: number;
  rentPrice: number;
  discountPrice: number;
  vehicle?: TVehicle;
  servicesPrice: number;
  totalHours: number;
  setRentForm: (payload: TVehicleRentSchema) => void;
  setVehicle: (vehicle: TVehicle) => void;
  clearVehicle: () => void;
};

export const useVehicleStore = create<TVehicleStoreState>()(
  persist(
    (set, get) => ({
      totalPrice: 0,
      discountPrice: 0,
      rentPrice: 0,
      servicesPrice: 0,
      totalHours: 0,
      setRentForm: (payload) => set({ rentForm: payload }),
      setVehicle: (vehicle) => {
        const servicesPrice = get().rentForm?.services.reduce(
          (acc, curr) => acc + curr.price,
          0
        );
        const diffs = differenceInCalendarDays(
          get().rentForm?.date.to || 0,
          get().rentForm?.date.from || 0
        );

        const rentPrice =
          diffs > 1
            ? (get().vehicle?.price_per_day || 0) * diffs
            : (get().vehicle?.price_per_hour || 0) * 24;
        const totalPrice =
          rentPrice + (servicesPrice || 0) - get().discountPrice;

        const totalHours = diffs > 1 ? diffs * 24 : 24;

        return set({
          vehicle,
          rentPrice,
          servicesPrice,
          totalPrice,
          totalHours,
        });
      },
      clearVehicle: () => set({ vehicle: undefined }),
    }),
    {
      name: "vehicle",
    }
  )
);
