import { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import { CreditDisplayToken } from "../types";
import { ScoreObject } from "./types";

type ScoreQuery = { display_token: CreditDisplayToken };

const url_path = "/api/credit/scores";

export default Score as APICall<ScoreQuery, ScoreObject>;

async function Score(settings: APIFetchSettings, query: ScoreQuery) {
  const { display_token, ...rest_query } = query;

  const base_url = getBaseURL(settings);
  const search = toQueryString(rest_query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}/${display_token}${search}`, fetch_configuration);
}
