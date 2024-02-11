import axiosInstance from "@/lib/axios";

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
export type MessageResponse = {
  message: string;
  status: string;
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

export const forgotPasswordAPI = async (payload: { email: string }) => {
  const res = await axiosInstance.post<MessageResponse>(
    "/auth/forgotpassword",
    payload
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

export type UserResponse = { status: string; data: { user: UserDetails } };
export type UserDetails = {
  id: string;
  name: string;
  email: string;
  role: string;
  photo: string;
  provider: string;
  verified: boolean;
  created_at: string;
  updated_at: string;
};
export const getUserAPI = async () => {
  const res = await axiosInstance.get<UserResponse>("/users/me");
  if (res.data.status === "success") return res.data.data.user;
  return res.data.data;
};
