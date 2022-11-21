import type { APICall, APIFetchSettings } from "../../types";
import type { PaymentMethod, PaymentMethodRetokenizeBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default CreatePaymentMethod as APICall<PaymentMethodRetokenizeBody, PaymentMethod>;

async function CreatePaymentMethod(settings: APIFetchSettings, body: PaymentMethodRetokenizeBody) {
  const { id, ...rest_params } = body;
  const url_path = `/api/account/payment-methods/${id}/retokenize`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "POST" }, JSON.stringify(rest_params));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
