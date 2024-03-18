import {
  PaymentMethod,
  UserBillingAddress,
  UserDetails,
} from "@/types/user.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TUserStoreState = {
  user?: UserDetails;
  payment?: PaymentMethod;
  billingAddress?: UserBillingAddress;
  setUser: (user: UserDetails) => void;
  setBillingAddress: (address: UserBillingAddress) => void;
  logout: () => void;
};

export const useUserStore = create<TUserStoreState>()(
  persist(
    (set, get) => ({
      user: undefined,
      payment: {
        type: "debit",
        last4: "4242",
        brand: "visa",
        exp_month: 12,
        exp_year: 2024,
      },
      billingAddress: {
        city: "Tashkent",
        zip: "100000",
        country: "Uzbekistan",
        countryCode: "UZ",
      },
      setUser: (user) => set({ user }),
      setBillingAddress: (address) => set({ billingAddress: address }),
      logout: () => set({ user: undefined }),
    }),
    {
      name: "user",
    }
  )
);
