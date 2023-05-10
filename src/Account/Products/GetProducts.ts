import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import type { Product, ProductsQuery } from "./types";

export default GetProducts as APICall<ProductsQuery, Array<Product>>;

async function GetProducts(settings: APIFetchSettings, query: ProductsQuery) {
  const url_path = `/api/account/products`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
