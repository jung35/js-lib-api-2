import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { PaymentMatch, TransactionsQuery } from "./types";

export default GetTransactions as APICall<TransactionsQuery, Array<PaymentMatch>>;

function GetTransactions(settings: APIFetchSettings, query: TransactionsQuery) {
  const url_path = "/api/transaction/plaid/transactions";
  const base_url = getBaseURL(settings);
  const { ...query_params } = query;

  const search = toQueryString(query_params as unknown as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });
  const final_path = `${base_url}${url_path}${search}`;

  return window.fetch(final_path, fetch_configuration);
}
