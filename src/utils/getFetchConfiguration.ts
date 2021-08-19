import { APIFetchRequiredSettings } from "../types";

export default function getFetchConfiguration(settings: APIFetchRequiredSettings, data?: BodyInit): RequestInit {
  const headers = new Headers(settings.headers);
  const request_init: RequestInit = { method: settings.method, headers, body: data };
  headers.set("Content-Type", "application/json");

  switch (settings.auth_type) {
    case "cookie":
      request_init.credentials = "include";
      break;

    case "header":
    case "header-authorization":
      if (!settings.auth_token) {
        throw new Error("missing auth_token");
      }

      headers.append("Authorization", `Bearer ${settings.auth_token}`);

      break;
    case "header-sid":
      if (!settings.auth_token) {
        throw new Error("missing auth_token");
      }

      headers.append("SID", settings.auth_token);

      break;
  }

  return request_init;
}
