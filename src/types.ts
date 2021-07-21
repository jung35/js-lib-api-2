export type APICall<Data> = (settings: APIFetchSettings, data: Data) => Promise<Response>;

export type APIFetchSettings = (APIFetchSettingsWithENV | APIFetchSettingsWithoutENV) & {
  method?: HTTPRequestMethod;
  auth_token?: string;
  auth_type?: APIAuthType;
  headers?: HeadersInit;
  signal?: AbortSignal;
};

export type APIFetchRequiredSettings = (APIFetchSettingsWithENV | APIFetchSettingsWithoutENV) & {
  method: HTTPRequestMethod;
  auth_token?: string;
  auth_type?: APIAuthType;
  headers?: HeadersInit;
  signal?: AbortSignal;
};

type APIFetchSettingsWithENV = { env: EnvType; server?: ServerType; base_url?: string };
type APIFetchSettingsWithoutENV = { base_url: string };

export type EnvType = "development" | "staging" | "production";
export type ServerType = "levelcredit" | "renttrack";

export type HTTPRequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type APIAuthType = "none" | "cookie" | "header";
