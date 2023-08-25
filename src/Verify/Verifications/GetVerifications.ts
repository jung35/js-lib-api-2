import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { Verification, VerificationsQuery } from "./types";

export default GetVerifications as APICall<VerificationsQuery, Array<Verification>>;

function GetVerifications(settings: APIFetchSettings, query: VerificationsQuery) {
  const url_path = "/api/verify/verifications";
  const base_url = getBaseURL(settings);
  const { ...query_params } = query;

  const search = toQueryString(query_params as unknown as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });
  const final_path = `${base_url}${url_path}${search}`;

  return window.fetch(final_path, fetch_configuration);
}
