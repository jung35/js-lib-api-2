import type { APICall, APIFetchSettings } from "../../../types";
import getBaseURL from "../../../utils/getBaseURL";
import getFetchConfiguration from "../../../utils/getFetchConfiguration";
import { VerificationUpload, CompleteVerificationUploadBody } from "./types";

export default CompleteVerificationUpload as APICall<CompleteVerificationUploadBody, VerificationUpload>;

async function CompleteVerificationUpload(settings: APIFetchSettings, params: CompleteVerificationUploadBody) {
  const { id, verification_id, ...rest } = params;
  const url_path = `/api/verify/verifications/${verification_id}/uploads/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "PATCH" }, JSON.stringify(rest));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
