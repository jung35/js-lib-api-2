import type { APICall, APIFetchSettings } from "../../../types";
import getBaseURL from "../../../utils/getBaseURL";
import getFetchConfiguration from "../../../utils/getFetchConfiguration";
import { CreateVerificationUploadBody, VerificationUpload } from "./types";

export default CreateVerificationUpload as APICall<CreateVerificationUploadBody, VerificationUpload>;

function CreateVerificationUpload(settings: APIFetchSettings, body: CreateVerificationUploadBody) {
  const { verification_id, ...rest_body } = body;
  const url_path = `/api/verify/verifications/${verification_id}/uploads`;
  const base_url = getBaseURL(settings);

  const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings }, JSON.stringify(rest_body));
  const final_path = `${base_url}${url_path}`;

  return window.fetch(final_path, fetch_configuration);
}
