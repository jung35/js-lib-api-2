import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import { MonitoringObject } from "../types";

type MonitoringQuery = Record<string, unknown>;

export default Monitoring as APICall<null | MonitoringQuery, MonitoringObject>;

async function Monitoring(settings: APIFetchSettings, query?: MonitoringQuery) {
  const rest_query = query || {};

  const url_path = `/api/protection/credit-monitoring`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(rest_query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
