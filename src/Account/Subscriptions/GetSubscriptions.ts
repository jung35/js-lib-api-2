import type { APICall, APIFetchSettings } from "../../types";
import { Subscription, SubscriptionQuery } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default GetSubscriptions as APICall<SubscriptionQuery, Array<Subscription>>;

async function GetSubscriptions(settings: APIFetchSettings, query: SubscriptionQuery) {
  const url_path = `/api/account/subscriptions`;
  const base_url = getBaseURL(settings);
  const search = query?.status ? toQueryString(query as QueryObject) : "";
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "GET" });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
