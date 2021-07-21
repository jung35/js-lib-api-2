export type QueryObject = { [key: string]: string };

export default function toQueryString(query: QueryObject): string {
  const url_params = new URLSearchParams(query as QueryObject);
  const search = url_params.toString();

  return search !== "" ? `?${search}` : "";
}
