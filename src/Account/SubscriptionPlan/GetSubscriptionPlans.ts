import { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { SubscriptionPlan, SubscriptionPlansQuery } from "./types";

export default GetSubscriptionPlans as APICall<SubscriptionPlansQuery, Array<SubscriptionPlan>>;

async function GetSubscriptionPlans(settings: APIFetchSettings, query: SubscriptionPlansQuery) {
  const url_path = `/api/account/plans`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
