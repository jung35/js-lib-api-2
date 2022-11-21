import type { APICall, APIFetchSettings } from "../../types";
import type { PaymentMethod, PaymentMethodUpdateBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default UpdatePaymentMethod as APICall<PaymentMethodUpdateBody, PaymentMethod>;

async function UpdatePaymentMethod(settings: APIFetchSettings, body: PaymentMethodUpdateBody) {
  const { id, ...rest_body } = body;
  const url_path = `/api/account/payment-methods/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "PATCH" }, JSON.stringify(rest_body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
