import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import type { SubscriptionPlan, SubscriptionPlanQuery } from "./types";

export default GetSubscriptionPlan as APICall<SubscriptionPlanQuery, SubscriptionPlan | null>;

async function GetSubscriptionPlan(settings: APIFetchSettings, query: SubscriptionPlanQuery) {
  const { plan_name, ...rest_query } = query;
  const url_path = `/api/account/plans/${plan_name}`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(rest_query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
