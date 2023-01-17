import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { PlaidItem, PlaidItemCreateBody } from "./types";

export default CreatePlaidItem as APICall<PlaidItemCreateBody, PlaidItem>;

function CreatePlaidItem(settings: APIFetchSettings, body: PlaidItemCreateBody) {
  const url_path = `/api/transaction/plaid/items`;
  const base_url = getBaseURL(settings);

  const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings }, JSON.stringify(body));
  const final_path = `${base_url}${url_path}`;

  return window.fetch(final_path, fetch_configuration);
}
