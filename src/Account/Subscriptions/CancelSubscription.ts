import { APICall, APIFetchSettings } from "../../types";
import { Subscription, SubscriptionCancel } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default CancelSubscription as APICall<SubscriptionCancel, Subscription>;

async function CancelSubscription(settings: APIFetchSettings, body: SubscriptionCancel) {
  const { id } = body;
  const url_path = `/api/account/subscriptions/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ method: "DELETE", ...settings });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
