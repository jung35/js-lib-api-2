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
