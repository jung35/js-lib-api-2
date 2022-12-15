import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import { PaymentMatch, TransactionMatchCreateBody, TransactionMatchCreateQuery } from "./types";

export default CreateTransactionMatch as APICall<TransactionMatchCreateBody, PaymentMatch>;

function CreateTransactionMatch(
  transaction_id: number,
  settings: APIFetchSettings,
  body: TransactionMatchCreateBody,
  query?: TransactionMatchCreateQuery
) {
  const url_path = `/api/transaction/plaid/transactions/${transaction_id}/matches`;
  const base_url = getBaseURL(settings);
  const query_string = query ? toQueryString(query as unknown as QueryObject) : "";

  const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings }, JSON.stringify(body));
  const final_path = `${base_url}${url_path}${query_string}`;

  return window.fetch(final_path, fetch_configuration);
}
