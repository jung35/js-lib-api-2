import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { Recommendation, RecommendationReq } from "./types";

export default GetRecommendation as APICall<RecommendationReq, Recommendation>;

async function GetRecommendation(settings: APIFetchSettings, { id }: RecommendationReq) {
  const url_path = `/api/transaction/plaid/recommendations/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "GET" });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
