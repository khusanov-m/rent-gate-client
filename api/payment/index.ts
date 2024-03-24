import axiosInstance from "@/lib/axios";
import type { Payment } from "@/types/payment.type";

export type PaymentRequest = {
  vehicleID: string;
  payload: {
    total_hours: number;
    addons_with_discount_price: number;
    payment_type: string;
  };
};

export type PaymentResponse = {
  data: Payment;
  status: string;
};
export const makeBookingAPI = async (data: PaymentRequest) => {
  const res = await axiosInstance.post<PaymentResponse>(
    "/payments/" + data.vehicleID,
    data.payload
  );
  if (res.data.status === "success") {
    return res.data.data;
  }
  return res.data.data;
};

export const makePaymentAPI = async (id: string) => {
  const res = await axiosInstance.post<PaymentResponse>(
    "/payments/confirm/" + id
  );
  if (res.data.status === "success") {
    return res.data.data;
  }
  return res.data.data;
};

export const getPaymentInfoAPI = async (id: string) => {
  const res = await axiosInstance.get<PaymentResponse>("/payments/" + id);
  if (res.data.status === "success") {
    return res.data.data;
  }
  return res.data.data;
};

export const cancelBookingAPI = async (id: string) => {
  const res = await axiosInstance.put<PaymentResponse>("/payments/" + id);
  if (res.data.status === "success") {
    return res.data.data;
  }
  return res.data.data;
};
