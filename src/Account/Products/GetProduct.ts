import type { APICall, APIFetchSettings } from "../../types";
import getBaseURL from "../../utils/getBaseURL";
import toQueryString, { QueryObject } from "../../utils/toQueryString";
import getFetchConfiguration from "../../utils/getFetchConfiguration";
import type { Product, ProductQuery } from "./types";

export default GetProduct as APICall<ProductQuery, Product | null>;

async function GetProduct(settings: APIFetchSettings, query: ProductQuery) {
  const { code, ...rest_query } = query;
  const url_path = `/api/account/products/${code}`;
  const base_url = getBaseURL(settings);
  const search = toQueryString(rest_query as QueryObject);
  const fetch_configuration = getFetchConfiguration({ method: "GET", ...settings });

  return await window.fetch(`${base_url}${url_path}${search}`, fetch_configuration);
}
