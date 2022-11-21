export type PaymentMethodType = "bank" | "card" | "debit_card" | "other";

type PlaidItemFinancialInstitution = { url: string; institution_id: string; name?: string; logo?: string };

export type PlaidItem = {
  id: number;
  url: string;
  financial_institution?: PlaidItemFinancialInstitution;
  payment_accounts: PaymentMethod[];
  needs_reconnect: boolean;
  reconnect_reason?: string;
  reconnect_source?: string[];
  expiration_time?: string;
};

export type PaymentMethod = {
  id: number;
  url: string;
  nickname?: string;
  type: PaymentMethodType;
  last_four?: string;
  expiration?: string;
  card_brand?: string;
  plaid_account?: boolean;
  needs_reconnect?: boolean;
  historical_update_complete?: boolean;
  created_at: string;
  plaid_item?: PlaidItem;
};

export type PaymentMethodCreateBody = {
  type: PaymentMethodType;
  name: string;
  nickname: string;
  object_url: string;
  bank?: {
    routing: string;
    account: string;
    type: string;
  };
  card?: {
    account: string;
    cvv: string;
    expiration: string;
  };
  debit_card?: {
    account: string;
    cvv: string;
    expiration: string;
  };
  netspend?: boolean;
  billing_address_url?: string;
  billing_address?: {
    street: string;
    unit: string;
    city: string;
    state: string;
    zip: string;
    is_current: true;
  };
  pay_type?: string;
};

export type PaymentMethodUpdateBody = {
  id: number;
  type: PaymentMethodType;
  name: string;
  object_url: string;
  bank?: {
    routing: string;
    account: string;
    type: string;
  };
  card?: {
    account: string;
    cvv: string;
    expiration: string;
  };
  debit_card?: {
    account: string;
    cvv: string;
    expiration: string;
  };
  netspend?: boolean;
};

export type PaymentMethodRetokenizeBody = {
  id: number;
  type: PaymentMethodType;
  name: string;
  object_url: string;
  card?: {
    account: string;
    cvv: string;
    expiration: string;
  };
  debit_card?: {
    account: string;
    cvv: string;
    expiration: string;
  };
  billing_address_url?: string;
  billing_address?: {
    street: string;
    unit: string;
    city: string;
    state: string;
    zip: string;
    is_current: true;
  };
};

export type PaymentMethodDelete = {
  id: number;
};
