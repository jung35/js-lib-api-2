import type { APICall, APIFetchSettings } from "../../types";
import type { PaymentMethod, PaymentMethodCreateBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default CreatePaymentMethod as APICall<PaymentMethodCreateBody, PaymentMethod>;

async function CreatePaymentMethod(settings: APIFetchSettings, body: PaymentMethodCreateBody) {
  const url_path = `/api/account/payment-methods`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "POST" }, JSON.stringify(body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
