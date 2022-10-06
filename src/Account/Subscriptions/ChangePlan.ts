import type { APICall, APIFetchSettings } from "../../types";
import { ChangePlanBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default ChangePlan as APICall<ChangePlanBody, never>;

async function ChangePlan(settings: APIFetchSettings, body: ChangePlanBody) {
  const { subscription_id, ...rest_body } = body;
  const url_path = `/api/account/subscriptions/${subscription_id}/change-plan`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "POST" }, JSON.stringify(rest_body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
