import { APICall, APIFetchSettings } from "../../types";
import { Utility, UtilityCreateBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default CreateUtility as APICall<UtilityCreateBody, Utility>;

async function CreateUtility(settings: APIFetchSettings, body: UtilityCreateBody) {
  const url_path = `/api/obligation/utilities`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings }, JSON.stringify(body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
