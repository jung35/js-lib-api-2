import type { Response, APIFetchSettings } from "../../types";
import { PaymentMatch, PaymentMatchQuery } from "./types";
import GetPaymentMatches from "./GetPaymentMatches";

export default GetLeasePaymentMatches;

function GetLeasePaymentMatches(settings: APIFetchSettings, lease_id: string): Promise<Response<Array<PaymentMatch>>> {
  const query: PaymentMatchQuery = { object_id: lease_id, object_type: "lease" };

  return GetPaymentMatches(settings, query);
}
