import type { APICall, APIFetchSettings } from "../../types";
import type { Profile } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default GetProfiles as APICall<void, Array<Profile>>;

async function GetProfiles(settings: APIFetchSettings) {
  const url_path = `/api/account/profile`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "GET" });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
