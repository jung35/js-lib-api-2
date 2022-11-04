import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import type { SubscriptionCancelReason, SubscriptionCancelReasonQuery } from "./types";

export default GetSubscriptionPlan as APICall<SubscriptionCancelReasonQuery, SubscriptionCancelReason | null>;

async function GetSubscriptionPlan(settings: APIFetchSettings, query: SubscriptionCancelReasonQuery) {
  const { id } = query;
  const url_path = `/api/account/subscriptions/${id}/cancel-reasons`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
