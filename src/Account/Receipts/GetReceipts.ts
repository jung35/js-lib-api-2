import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import type { Receipt, ReceiptsQuery } from "./types";

export default GetReceipts as APICall<ReceiptsQuery, Array<Receipt>>;

async function GetReceipts(settings: APIFetchSettings, query: ReceiptsQuery) {
  const url_path = `/api/account/receipts`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
