import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { Recommendation, RecommendationQuery } from "./types";
import toQueryString from "../../utils/toQueryString";

export default GetRecommendations as APICall<RecommendationQuery, Array<Recommendation>>;

function GetRecommendations(settings: APIFetchSettings, query: RecommendationQuery) {
  const url_path = "/api/transaction/plaid/recommendations";
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });
  const search = toQueryString(query);
  const final_path = `${base_url}${url_path}${search}`;

  return window.fetch(final_path, fetch_configuration);
}
