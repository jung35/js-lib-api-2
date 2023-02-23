import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { Recommendation, RecommendationCreateBody } from "./types";

export default CreateRecommendation as APICall<RecommendationCreateBody, Array<Recommendation>>;

function CreateRecommendation(settings: APIFetchSettings, body: RecommendationCreateBody) {
  const url_path = "/api/transaction/plaid/recommendations";
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings }, JSON.stringify(body));
  const final_path = `${base_url}${url_path}`;

  return window.fetch(final_path, fetch_configuration);
}
