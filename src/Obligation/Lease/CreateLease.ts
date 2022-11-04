import type { APICall, APIFetchSettings } from "../../types";
import type { Lease, LeaseCreateBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default CreateLease as APICall<LeaseCreateBody, Lease>;

async function CreateLease(settings: APIFetchSettings, body: LeaseCreateBody) {
  const url_path = `/api/obligation/leases`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings }, JSON.stringify(body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
