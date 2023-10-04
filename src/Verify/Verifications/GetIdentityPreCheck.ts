import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { VerifcationPrecheck } from "./types";

export default GetIdentityPreCheck as APICall<void, VerifcationPrecheck>;

function GetIdentityPreCheck(settings: APIFetchSettings) {
  const url_path = "/api/verify/identity-verifications/precheck";
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
