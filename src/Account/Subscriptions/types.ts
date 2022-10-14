import { SubscriptionFeature, SubscriptionPlanName } from "../SubscriptionPlan/types";

export type PaymentMethod = {
  type: string;
  nickname: string;
  billing_address_url?: string;
  billing_address?: {
    street: string;
    unit?: string;
    city: string;
    state: string;
    zip: string;
    is_current: boolean;
  };
  name: string;
  card: {
    account: string;
    cvv: string;
    expiration: string;
  };
};

export type ChangePlanBody = {
  subscription_id: string;
  plan_name: string;
  payment_method_url?: string;
  payment_method?: PaymentMethod;
  promotion?: {
    code: string;
    uuid: string;
  };
  user?: {
    ssn: string;
    date_of_birth: string;
  };
};

export type Subscription = {
  id: number;
  url: string;
  status: "active" | "delinquent";
  plan_name: SubscriptionPlanName;
  plan_features: Array<SubscriptionFeature>;
  payment_method_url?: string;
  free_until?: string;
  next_payment_amount?: number;
  discounted_until?: string;
  next_payment_date?: string;
};

export type SubscriptionPromotion = {
  code: string;
  uuid?: string;
  uuid_required?: boolean;
};

export type SubscriptionCreateBody = {
  payment_account_url?: string;
  plan_name: SubscriptionPlanName;
  promotion?: SubscriptionPromotion;
  erp?: string;
};

export type SubscriptionUpdatePaymentMethodBody = {
  id: number;
  payment_method_url?: string;
  payment_method?: PaymentMethod;
};

export type SubscriptionUpdateRenewalBody = {
  id: number;
  cancel_renewal: boolean;
  reason_code?: string;
  reason_message?: string;
};

export type SubscriptionCancel = {
  id: number;
  reason_code?: string;
  reason_message?: string;
};

export type SubscriptionQuery = { "status[]"?: "active" | "delinquent" | "canceled" };
