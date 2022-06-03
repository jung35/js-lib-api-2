import { APICall } from "../../types";

export type SubscriptionFeature = "protection" | "score" | "insights" | "utility_reporting" | "reporting";
export type SubscriptionPlanName = "score_track" | "consumer_premium" | "consumer_lite" | "consumer_levelcredit_report";

export type SubscriptionPlan = {
  url: string;
  plan_name: SubscriptionPlanName;
  plan_quote: string;
  price_type: string;
  plan_features: Array<SubscriptionFeature>;
  free_months: 0;
  discounted_price: string;
  discounted_months: 0;
  institution: string;
};

export type SubscriptionPlansQuery = {
  promotion_code?: string;
};

export type SubscriptionPlanQuery = {
  plan_name?: string;
};

export type SubscriptionPlanActions = {
  GetSubscriptionPlan: APICall<SubscriptionPlanQuery, SubscriptionPlan | null>;
  GetSubscriptionPlans: APICall<SubscriptionPlansQuery, Array<SubscriptionPlan>>;
};
