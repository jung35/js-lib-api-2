import { UtilityProviderItem } from "../../Obligation/UtilityProvider/types";

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

type PlaidItemStatus = "active" | "deleted";

export type PlaidItem = {
  id: number;
  url: string;
  status: PlaidItemStatus;
  access: string;
  needs_reconnect: boolean;
  expiration_time: string;
  initial_update_complete: boolean;
  historical_update_complete: boolean;
};

export type PlaidItemCreateBody = {
  public_token: string;
};

export type PlaidItemQuery = {
  "embeds[]"?: string[] | string;
};

export type PlaidItemReq = {
  id: number;
};

export type PlaidLinkTokenCreateBody = {
  id: number;
  redirect_uri: string;
  link_customization_name: string;
};

export type PlaidLinkToken = {
  link_token: string;
  expiration: string;
};

export type PlaidTransaction = {
  id: number;
  url: string;
  transaction_id: string;
  amount: string;
  name: string;
  category_id: string;
  date: string;
  personal_finance_category_primary: string;
  personal_finance_category_detailed: string;
  account_id: number;
  account_url: string;
  available: boolean;
  created_at: string;
};

export type RecommendationCreateBody = {
  start_date?: string;
  end_date?: string;
};

export type RecommendationReq = {
  id: number;
};

export type RecommendationStatus = "init" | "complete" | "error";

export type Recommendation = {
  id: number;
  url: string;
  status: RecommendationStatus;
  transaction: PlaidTransaction;
  service_providers: UtilityProviderItem[];
};
