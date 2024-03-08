import axiosInstance from "@/lib/axios";

export type UserCountryResponse = {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
};
export const getUserCountryAPI = async () => {
  const res = await axiosInstance.get<UserCountryResponse>(
    "http://ip-api.com/json"
  );
  return res.data;
};
