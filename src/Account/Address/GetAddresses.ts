import { APICall, APIFetchSettings } from "../../types";
import { Address, AddressQuery } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default GetAddresses as APICall<AddressQuery, Array<Address>>;

async function GetAddresses(
    settings: APIFetchSettings,
    query: AddressQuery
) {
    const url_path = `/api/account/addresses`;
    const base_url = getBaseURL(settings);
    const search = toQueryString(query as QueryObject);
    const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

    return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
