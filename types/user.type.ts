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

export type PaymentMethod = {
  // id: string;
  // user: string;
  type: string;
  last4: string;
  brand: string;
  exp_month: number;
  exp_year: number;
  // created_at: string;
  // updated_at: string;
}

export type UserBillingAddress = {
  // id: string;
  // user: string;
  // address: string;
  city: string;
  // state: string;
  zip: string;
  country: string;
  countryCode: string;
  // created_at: string;
  // updated_at: string;
}