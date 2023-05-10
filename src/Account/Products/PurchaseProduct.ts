import type { APICall, APIFetchSettings } from "../../types";
import type { Product, ProductPurchaseBody } from "./types";
import getBaseURL from "../../utils/getBaseURL";
import getFetchConfiguration from "../../utils/getFetchConfiguration";

export default PurchaseProduct as APICall<ProductPurchaseBody, Product>;

async function PurchaseProduct(settings: APIFetchSettings, body: ProductPurchaseBody) {
  const { code, ...rest_body } = body;
  const url_path = `/api/account/products/${code}/purchase`;
  const base_url = getBaseURL(settings);
  const fetch_configuration = getFetchConfiguration({ ...settings, method: "POST" }, JSON.stringify(rest_body));

  return await window.fetch(`${base_url}${url_path}`, fetch_configuration);
}
