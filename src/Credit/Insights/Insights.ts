import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import type { CreditDisplayToken } from "../types";
import type { InsightsObject } from "./types";

type InsightsQuery = { display_token: CreditDisplayToken };

const url_path = "/api/credit/insights";

export default Insights as APICall<InsightsQuery, InsightsObject>;

async function Insights(settings: APIFetchSettings, query: InsightsQuery) {
  const base_url = getBaseURL(settings);

  const rest_query = toQueryString(query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${rest_query}`, fetch_configuration);
}
