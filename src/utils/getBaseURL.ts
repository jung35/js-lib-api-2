import { EnvType, ServerType } from "../types";

type BaseURLParms = { env: EnvType; server?: ServerType; base_url?: string } | { base_url: string };

const default_url = "https://my.levelcredit.com";

export default function getBaseURL(settings: BaseURLParms): string {
  const base_url = settings.base_url;

  if (base_url) {
    return base_url;
  }

  const server = "server" in settings ? settings.server : "levelcredit";
  const env = "env" in settings ? settings.env : null;

  switch (env) {
    case "development":
      if (server === "levelcredit") {
        return "https://mylevelcredit.qa2.rt-devel.com";
      } else if (server === "renttrack") {
        return "https://my.qa2.rt-devel.com";
      }
    case "staging":
      if (server === "levelcredit") {
        return "https://mylevelcredit.sandbox2.rt-stg.com";
      } else if (server === "renttrack") {
        return "https://my.sandbox2.rt-stg.com";
      }
    case "production":
      if (server === "levelcredit") {
        return "https://my.levelcredit.com";
      } else if (server === "renttrack") {
        return "https://my.renttrack.com";
      }
  }

  return default_url;
}
