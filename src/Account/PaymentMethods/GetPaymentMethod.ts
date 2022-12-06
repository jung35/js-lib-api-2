import type { APICall, APIFetchSettings } from "../../types";
import type { PaymentMethod, PaymentMethodReq } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default GetPaymentMethod as APICall<PaymentMethodReq, PaymentMethod>;

async function GetPaymentMethod(settings: APIFetchSettings, { id }: PaymentMethodReq) {
  const url_path = `/api/account/payment-methods/${id}`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "GET" });

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
