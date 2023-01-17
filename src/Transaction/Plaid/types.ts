export type PaymentMatchQuery = {
  object_id: string;
  object_type: PaymentMatchObjectType;
  "embeds[]"?: string[] | string;
};

export type TransactionsQuery = {
  object_id: number;
  object_type: PaymentMatchObjectType;
  match_type?: PaymentMatchType;
  start?: string;
  end?: string;
  min_amount?: number;
  max_amount?: number;
  name?: string;
  include?: string;
  sort?: string;
  order?: string;
  count?: number;
  offset?: number;
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
  nominated: PaymentMatchNominated;
};

export type TransactionMatchCreateBody = {
  object_url: string;
  match_type: PaymentMatchType;
};

export type TransactionMatchCreateQuery = {
  verification: string;
  "embeds[]": string;
};

type PaymentMatchObjectType = "lease" | "utility";
type PaymentMatchType = "historical" | "standard";
type PaymentMatchMethod = "automatic" | "manual";
type PaymentMatchNominated = "exact" | "fuzzy";

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
