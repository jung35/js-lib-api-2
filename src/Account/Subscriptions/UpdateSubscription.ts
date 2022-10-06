import type { APICall, APIFetchSettings } from "../../types";
import { Subscription, SubscriptionUpdatePaymentMethodBody, SubscriptionUpdateRenewalBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default UpdateSubscription as APICall<
  SubscriptionUpdateRenewalBody | SubscriptionUpdatePaymentMethodBody,
  Subscription
>;

async function UpdateSubscription(
  settings: APIFetchSettings,
  body: SubscriptionUpdateRenewalBody | SubscriptionUpdatePaymentMethodBody
) {
  const { id, ...rest_body } = body;
  const url_path = `/api/account/subscriptions/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "PUT" }, JSON.stringify(rest_body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
