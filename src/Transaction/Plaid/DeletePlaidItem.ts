import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { PlaidItemReq } from "./types";

export default CancelSubscription as APICall<PlaidItemReq, null>;

async function CancelSubscription(settings: APIFetchSettings, { id }: PlaidItemReq) {
  const url_path = `/api/transaction/plaid/items/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "DELETE" });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
