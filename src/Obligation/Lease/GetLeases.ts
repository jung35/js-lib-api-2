import type { APICall, APIFetchSettings } from "../../types";
import type { Lease, LeaseQuery } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default GetLeases as APICall<LeaseQuery, Array<Lease>>;

async function GetLeases(
  settings: APIFetchSettings,
  query: { "embeds[]": string } = { "embeds[]": "transaction_finder" }
) {
  const url_path = `/api/obligation/leases`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
