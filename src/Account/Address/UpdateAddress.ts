import { APICall, APIFetchSettings } from "../../types";
import { Address, AddressUpdateBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default UpdateAddress as APICall<AddressUpdateBody, Address>;

async function UpdateAddress(settings: APIFetchSettings, body: AddressUpdateBody) {
  const { id, ...rest_body } = body;
  const url_path = `/api/account/addresses/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ method: "PATCH", ...settings }, JSON.stringify(rest_body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
