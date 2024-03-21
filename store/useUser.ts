import type {
  PaymentMethod,
  UserBillingAddress,
  UserDetails,
} from "@/types/user.type";
import { create } from "zustand";

export type TUserStoreState = {
  user?: UserDetails;
  selectedPayment?: PaymentMethod;
  userCards?: PaymentMethod[];
  billingAddress?: UserBillingAddress;
  addPayment: (payment: PaymentMethod) => void;
  setPayment: (last4: string) => void;
  setUser: (user: UserDetails) => void;
  setBillingAddress: (address: UserBillingAddress) => void;
  logout: () => void;
};

export const useUserStore = create<TUserStoreState>()((set, get) => ({
  user: undefined,
  selectedPayment: undefined,
  userCards: [
    {
      type: "debit",
      last4: "4242",
      brand: "visa",
      exp_month: 12,
      exp_year: 2024,
    },
    {
      type: "debit",
      last4: "1936",
      brand: "unionpay",
      exp_month: 4,
      exp_year: 2026,
    },
    {
      type: "debit",
      last4: "0377",
      brand: "mastercard",
      exp_month: 1,
      exp_year: 2026,
    },
  ],
  billingAddress: {
    city: "Tashkent",
    zip: "100000",
    country: "Uzbekistan",
    countryCode: "UZ",
    address:
      "Random str., Yakkasaray dist., Tashkent city, Uzbekistan, UZ, 100000",
  },
  addPayment: (payment) => {
    const userCards = get().userCards;
    userCards?.push(payment);
    set({ userCards });
  },
  setPayment: (last4) => {
    const payment = get().userCards?.find((card) => card.last4 === last4);
    set({ selectedPayment: payment });
  },
  setUser: (user) => set({ user, selectedPayment: get().userCards?.[0] }),
  setBillingAddress: (address) => set({ billingAddress: address }),
  logout: () => set({ user: undefined }),
}));
