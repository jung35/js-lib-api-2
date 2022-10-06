import type { APICall, APIFetchSettings } from "../../types";
import type { Subscription, SubscriptionCreateBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default CreateSubscription as APICall<SubscriptionCreateBody, Subscription>;

async function CreateSubscription(settings: APIFetchSettings, body: SubscriptionCreateBody) {
  const url_path = `/api/account/subscriptions`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "POST" }, JSON.stringify(body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
