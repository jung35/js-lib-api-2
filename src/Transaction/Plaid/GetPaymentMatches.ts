import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import { PaymentMatch, PaymentMatchQuery } from "./types";

export default GetPaymentMatches as APICall<PaymentMatchQuery, Array<PaymentMatch>>;

function GetPaymentMatches(settings: APIFetchSettings, query: PaymentMatchQuery) {
  const url_path = "/api/transaction/plaid/matches";
  const base_url = getBaseURL(settings);
  const search = toQueryString({
    "embeds[]": ["order", "account", "verification"],
    ...query,
  } as unknown as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });
  const final_path = `${base_url}${url_path}${search}`;

  return window.fetch(final_path, fetch_configuration);
}
