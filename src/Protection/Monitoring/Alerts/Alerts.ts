import type { APICall, APIFetchSettings } from "../../../types";
import getBaseURL from "../../../utils/getBaseURL";
import getFetchConfiguration from "../../../utils/getFetchConfiguration";
import toQueryString, { QueryObject } from "../../../utils/toQueryString";
import { AlertDetailed, AlertSimple } from "../../types";

type AlertsQuery = { id: number; dismiss?: boolean };

export default Alerts as APICall<null | AlertsQuery, AlertSimple[] | AlertDetailed>;

async function Alerts(settings: APIFetchSettings, query?: AlertsQuery) {
  const { id, dismiss, ...rest_query } = query || {};

  const url_path = `/api/protection/credit_monitoring/alerts${id ? `/${id}` : ``}`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(rest_query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: id && dismiss ? "DELETE" : "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
