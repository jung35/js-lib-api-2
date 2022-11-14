import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { PaymentMatch, TransactionMatchCreateBody } from "./types";

export default CreateTransactionMatch as APICall<TransactionMatchCreateBody, PaymentMatch>;

function CreateTransactionMatch(transaction_id: number, settings: APIFetchSettings, body: TransactionMatchCreateBody) {
  const url_path = `/api/transaction/plaid/transactions/${transaction_id}/matches`;
  const base_url = getBaseURL(settings);

  const fetch_configuration = getFetchConfiguration({ method: "POST", ...settings }, JSON.stringify(body));
  const final_path = `${base_url}${url_path}`;

  return window.fetch(final_path, fetch_configuration);
}
