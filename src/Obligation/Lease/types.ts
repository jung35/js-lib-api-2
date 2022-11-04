export type LeaseQuery = { "embeds[]": string };

export type LeaseCreateBody = {
  address: LeaseAddress;
  rent: string;
  due_day: string;
  start_at: string;
  landlord: LeaseLandlord;
};

export type LeaseAddress = {
  address1: string;
  address2?: string;
  state: string;
  city: string;
  zip: string;
};
export type LeaseStatus = "active" | "finished";
export type LeaseLandlordType = "individual" | "company";
type LeaseLandlord = {
  type?: LeaseLandlordType;
  name?: string;
  phone?: string;
};

type MelissaData = { request_landlord_info?: boolean };
type LeaseProduct = Record<string, unknown>;

type TransactionFinderStatus = "new" | "matched" | "searching" | "missing" | "multiple" | "closed";
export type TransactionFinder = {
  id: number;
  url: string;
  payment_account_url?: string;
  display_name: string;
  status: TransactionFinderStatus;
  amount_min: number;
  amount_max: number;
  window_open: number;
  window_close: number;
};

export type Lease = {
  id: number;
  url: string;
  address: LeaseAddress;
  status: LeaseStatus;
  rent: string;
  start_at: string;
  finished_at: string;
  due_day: string;
  landlord: LeaseLandlord;
  back_report_start_at: string;
  transaction_finders: Array<TransactionFinder>;
  mdata: MelissaData;
  moved_out: string;
  products: Array<LeaseProduct>;
  obligation_start_at?: string;
  manual_historical_match_allowed: boolean;
};
