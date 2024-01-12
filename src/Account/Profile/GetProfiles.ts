import type { APICall, APIFetchSettings } from "../../types";
import type {Profile, ProfilesQuery} from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import toQueryString, {QueryObject} from "../../utils/toQueryString";

export default GetProfiles as APICall<ProfilesQuery, Array<Profile>>;

async function GetProfiles(settings: APIFetchSettings, query: ProfilesQuery) {
  const url_path = `/api/account/profile`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "GET" });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
