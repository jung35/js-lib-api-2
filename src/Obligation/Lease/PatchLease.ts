import type { APICall, APIFetchSettings } from "../../types";
import type { Lease, LeasePatchBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default PatchLease as APICall<LeasePatchBody, Lease>;

async function PatchLease(settings: APIFetchSettings, body: LeasePatchBody) {
  const { id, ...rest_body } = body;
  const url_path = `/api/obligation/leases/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "PATCH" }, JSON.stringify(rest_body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
