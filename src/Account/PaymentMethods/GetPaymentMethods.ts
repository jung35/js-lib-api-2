import type { APICall, APIFetchSettings } from "../../types";
import type { PaymentMethod } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default GetPaymentMethods as APICall<void, Array<PaymentMethod>>;

async function GetPaymentMethods(settings: APIFetchSettings) {
  const url_path = `/api/account/payment-methods`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "GET" });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
