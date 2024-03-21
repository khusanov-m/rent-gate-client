export enum EPaymentProvider {
  VISA = "visa",
  MASTERCARD = "mastercard",
  UNIONPAY = "unionpay",
  CASHLESS = "cashless",
}

export type Payment = {
  id:              string;
  user_id:         number;
  payment_status:  string;
  payment_type:    string;
  payment_for:     string;
  payment_details: string;
  created_at:      string;
  updated_at:      string;
}