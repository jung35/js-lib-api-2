import type { APICall, APIFetchSettings } from "../../types";
import type { Utility, UtilityPatchBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default PatchUtility as APICall<UtilityPatchBody, Utility>;

async function PatchUtility(settings: APIFetchSettings, body: UtilityPatchBody) {
  const { id, ...rest_body } = body;
  const url_path = `/api/account/payment-methods/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "PATCH" }, JSON.stringify(rest_body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
