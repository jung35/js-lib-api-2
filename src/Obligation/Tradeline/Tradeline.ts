import { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import { ObligationType } from "../types";
import { TradelineObject } from "./types";

type TradelineQuery = { type: ObligationType; id: number };

export default Tradeline as APICall<TradelineQuery, TradelineObject>;

async function Tradeline(settings: APIFetchSettings, query: TradelineQuery) {
  const { type, id, ...rest_query } = query;

  const url_path = `/api/obligation/${type}/${id}/tradeline`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(rest_query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
