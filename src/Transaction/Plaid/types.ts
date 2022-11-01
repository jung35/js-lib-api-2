export type PaymentMatchQuery = {
  object_id: string;
  object_type: PaymentMatchObjectType;
  "embeds[]"?: string[];
};

export type PaymentMatch = {
  id: number;
  url: string;
  name: string;
  amount: number;
  created_at: string;
  date: string;
  payment_account_url: string;
  order?: any;
  verification?: PaymentMatchVerification;
  match_type: PaymentMatchType;
  match_method: PaymentMatchMethod;
};

type PaymentMatchObjectType = "lease" | "utility";
type PaymentMatchType = "historical" | "standard";
type PaymentMatchMethod = "automatic" | "manual";

type PaymentMatchVerification = {
  status: PaymentMatchVerificationStatus;
};

type PaymentMatchVerificationStatus =
  | "initiated"
  | "pending"
  | "failed"
  | "new"
  | "trusted"
  | "denied"
  | "in progress"
  | "waiting for info"
  | "renew";
