export type Receipt = {
  status: string;
  reference_id: string;
  amount: string;
  date: string;
  payment_method_id: number;
  messages: string;
  subscription_id?: number;
  product_id?: number;
  transaction_id: number;
  created_at: string;
  updated_at: string;
};

export type ReceiptsQuery = {
  "embeds[]"?: string;
  "type[]"?: "subscription" | "product";
  count?: number;
  offset?: number;
};
