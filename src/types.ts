export type APICall<Data, ResponseJson> = (settings: APIFetchSettings, data: Data) => Promise<Response<ResponseJson>>;

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
export type APIAuthType = "none" | "cookie" | "header" | "header-sid" | "header-authorization";

// Taken from Fetch Response type
export type Response<ResponseJson> = {
  readonly body: ReadableStream<Uint8Array> | null;
  readonly bodyUsed: boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  blob(): Promise<Blob>;
  formData(): Promise<FormData>;
  json(): Promise<ResponseJson>; // Define type of object parsing json will return
  text(): Promise<string>;
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly trailer: Promise<Headers>;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response<ResponseJson>;
};

export type LevelCreditAPIError = { code: number; message: string; priority: LevelCreditAPIErrorPriority };
type LevelCreditAPIErrorPriority = "high" | "medium" | "low";
