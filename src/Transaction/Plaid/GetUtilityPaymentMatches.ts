import type { Response, APIFetchSettings } from "../../types";
import { PaymentMatch, PaymentMatchQuery } from "./types";
import GetPaymentMatches from "./GetPaymentMatches";

export default GetUtilityPaymentMatches;

function GetUtilityPaymentMatches(
  settings: APIFetchSettings,
  utility_id: string
): Promise<Response<Array<PaymentMatch>>> {
  const query: PaymentMatchQuery = { object_id: utility_id, object_type: "utility" };

  return GetPaymentMatches(settings, query);
}
