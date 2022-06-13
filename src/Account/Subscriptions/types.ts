export type ChangePlanBody = {
  subscription_id: string;
  address1: string;
  address2?: string;
  state: string;
  city: string;
  zip: string;
  utility_provider_url: string;
};
