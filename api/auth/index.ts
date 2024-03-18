import axiosInstance from "@/lib/axios";
import { MessageResponse } from "@/types/config.type";
import { UserDetails } from "@/types/user.type";

export type LoginPayload = { email: string; password: string };
export type LoginResponse = { status: string; token: string };
export const loginAPI = async (payload: LoginPayload) => {
  const res = await axiosInstance.post<LoginResponse>("/auth/login", payload);
  if (res.data.status === "success") return res.data.token;
};

export type RegisterPayload = {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  photo: string;
};

export const registerAPI = async (payload: RegisterPayload) => {
  const res = await axiosInstance.post<MessageResponse>(
    "/auth/register",
    payload
  );
  if (res.data.status === "success") return res.data.message;
};

export const verifyAPI = async (id: string) => {
  const res = await axiosInstance.get<MessageResponse>(
    "/auth/verifyemail/" + id
  );
  if (res.data.status === "success") return res.data.message;
};

export const forgotPasswordAPI = async (email: string) => {
  const res = await axiosInstance.post<MessageResponse>(
    "/auth/forgotpassword",
    { email }
  );
  if (res.data.status === "success") return res.data.message;
};

export type resetPasswordPayload = {
  id: string;
  data: {
    password: string;
    passwordConfirm: string;
  };
};
export const resetPasswordAPI = async (payload: resetPasswordPayload) => {
  const res = await axiosInstance.patch<MessageResponse>(
    "/auth/resetpassword/" + payload.id,
    payload.data
  );
  if (res.data.status === "success") return res.data.message;
};

export type UserResponse = { status: string; user: UserDetails };

export const getUserAPI = async () => {
  const res = await axiosInstance.get<UserResponse>("/users/me");
  return res.data;
};
