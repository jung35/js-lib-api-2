import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import type { CreditDisplayToken } from "../types";
import type { ScoreObject } from "./types";

type ScoreQuery = { display_token: CreditDisplayToken };

const url_path = "/api/credit/scores";

export default Score as APICall<ScoreQuery, ScoreObject>;

async function Score(settings: APIFetchSettings, query: ScoreQuery) {
  const base_url = getBaseURL(settings);

  const request_query = toQueryString(query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${request_query}`, fetch_configuration);
}
