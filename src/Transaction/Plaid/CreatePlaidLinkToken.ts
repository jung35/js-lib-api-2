import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { PlaidLinkToken, PlaidLinkTokenCreateBody } from "./types";

export default CreatePlaidLinkToken as APICall<PlaidLinkTokenCreateBody, PlaidLinkToken>;

function CreatePlaidLinkToken(settings: APIFetchSettings, body: PlaidLinkTokenCreateBody) {
  const { id, ...rest_body } = body;
  const url_path = `/api/transaction/plaid/items/${id}/link-tokens`;
  const base_url = getBaseURL(settings);

  const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings }, JSON.stringify(rest_body));
  const final_path = `${base_url}${url_path}`;

  return window.fetch(final_path, fetch_configuration);
}
