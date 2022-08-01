import { APICall, APIFetchSettings } from "../../types";
import { UtilityProviderCreateBody, UtilityProviderItem } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default CreateUtilityProvider as APICall<UtilityProviderCreateBody, UtilityProviderItem>;

async function CreateUtilityProvider(settings: APIFetchSettings, body: UtilityProviderCreateBody) {
  const url_path = `/api/obligation/utility-providers`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings }, JSON.stringify(body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
