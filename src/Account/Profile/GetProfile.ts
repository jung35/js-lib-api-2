import type { APICall, APIFetchSettings } from "../../types";
import type { Profile, ProfileReq } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default GetProfile as APICall<ProfileReq, Profile>;

async function GetProfile(settings: APIFetchSettings, { id }: ProfileReq) {
  const url_path = `/api/account/profile/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "GET" });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
