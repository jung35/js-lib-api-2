import { APICall, APIFetchSettings } from "../../types";
import { Address, AddressCreateBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default CreateAddress as APICall<AddressCreateBody, Address>;

async function CreateAddress(settings: APIFetchSettings, body: AddressCreateBody) {
    const url_path = `/api/account/addresses`;
    const base_url = getBaseURL(settings);
    const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings }, JSON.stringify(body));

    return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
