import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { Recommendation, RecommendationCreateBody } from "./types";
import toQueryString, { QueryObject } from "../../utils/toQueryString";

export default CreateRecommendation as APICall<RecommendationCreateBody, Array<Recommendation>>;

function CreateRecommendation(settings: APIFetchSettings, body: RecommendationCreateBody) {
  const url_path = "/api/transaction/plaid/recommendations";
  const base_url = getBaseURL(settings);
  const query = toQueryString(body as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings });
  const final_path = `${base_url}${url_path}${query}`;

  return window.fetch(final_path, fetch_configuration);
}
