import type { APICall, APIFetchSettings } from "../../types";
import type { Profile, ProfileUpdateBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default UpdateProfile as APICall<ProfileUpdateBody, Profile>;

async function UpdateProfile(settings: APIFetchSettings, body: ProfileUpdateBody) {
  const { id, ...rest_body } = body;
  const url_path = `/api/account/profile/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "PATCH" }, JSON.stringify(rest_body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
