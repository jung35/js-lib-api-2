import type { APICall, APIFetchSettings } from "../../types";
import type { DisplayToken } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default CreateSubscription as APICall<null, DisplayToken>;

async function CreateSubscription(settings: APIFetchSettings) {
  const url_path = `/api/credit/display_token`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "POST" });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
