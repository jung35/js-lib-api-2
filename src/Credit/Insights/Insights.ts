import { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import { CreditDisplayToken } from "../types";

type InsightsQuery = { display_token: CreditDisplayToken };

const url_path = "/api/credit/insights";

export default Insights as APICall<InsightsQuery>;

async function Insights(settings: APIFetchSettings, query: InsightsQuery) {
  const { display_token, ...rest_query } = query;

  const base_url = getBaseURL(settings);
  const search = toQueryString(rest_query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}/${display_token}${search}`, fetch_configuration);
}
