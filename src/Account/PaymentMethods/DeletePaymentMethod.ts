import type { APICall, APIFetchSettings } from "../../types";
import type { PaymentMethod, PaymentMethodDelete } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default DeletePaymentMethod as APICall<PaymentMethodDelete, PaymentMethod>;

async function DeletePaymentMethod(settings: APIFetchSettings, param: PaymentMethodDelete) {
  const { id } = param;
  const url_path = `/api/account/payment-methods/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "DELETE" });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
