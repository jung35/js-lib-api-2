import type { APICall } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { PaymentMatch, PaymentMatchQuery, PaymentMatchAPIFetchSettings } from "./types";

export default GetPaymentMatches as APICall<PaymentMatchQuery, Array<PaymentMatch>>;

function GetPaymentMatches(settings: PaymentMatchAPIFetchSettings, query: PaymentMatchQuery) {
  const url_path = "/api/transaction/plaid/matches";
  const base_url = getBaseURL(settings);
  const search = toQueryString(query as unknown as QueryObject);
  const default_body = {
    "embeds[]": ["order", "payment_account", "verification"],
    representation: "detailed",
  };
  const fetch_configuration = getFetchConfiguration({ method: "GET", body: JSON.stringify(default_body), ...settings });
  const final_path = `${base_url}${url_path}${search}`;

  return window.fetch(final_path, fetch_configuration);
}
