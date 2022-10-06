import { SubscriptionFeature, SubscriptionPlanName } from "../SubscriptionPlan/types";

export type ChangePlanBody = {
  subscription_id: string;
  plan_name: string;
  payment_method_url?: string;
  payment_method?: string;
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
  payment_account_url?: string;
  free_until?: string;
  next_payment_amount?: number;
  discounted_until?: string;
  next_payment_date?: string;
};

export type SubscriptionCreateBody = {
  payment_account_url?: string;
  plan_name: SubscriptionPlanName;
  period: "monthly";
  promotion_code?: string;
  erp?: string;
};

export type SubscriptionUpdatePaymentMethodBody = {
  id: number;
  payment_method_url?: string;
  payment_method?: string;
};

export type SubscriptionUpdateRenewalBody = {
  id: number;
  cancel_renewal: boolean;
  reason_code?: string;
  reason_message?: string;
};

export type SubscriptionCancel = {
  id: number;
};

export type SubscriptionQuery = {
  status?: "active" | "delinquent" | "canceled";
};
