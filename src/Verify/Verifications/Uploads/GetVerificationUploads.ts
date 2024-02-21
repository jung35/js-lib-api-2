import type { APICall, APIFetchSettings } from "../../../types";
import getBaseURL from "../../../utils/getBaseURL";
import getFetchConfiguration from "../../../utils/getFetchConfiguration";
import { VerificationUpload, VerificationUploadsQuery } from "./types";

export default GetVerificationUploads as APICall<VerificationUploadsQuery, Array<VerificationUpload>>;

function GetVerificationUploads(settings: APIFetchSettings, query: VerificationUploadsQuery) {
  const base_url = getBaseURL(settings);
  const { verification_id } = query;
  const url_path = `/api/verify/verifications/${verification_id}/uploads`;
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });
  const final_path = `${base_url}${url_path}`;

  return window.fetch(final_path, fetch_configuration);
}
