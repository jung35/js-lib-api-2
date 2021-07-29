# LevelCredit JS API Library

* [Getting Started](#getting-started)
* [API](#api)
  * [Score](#score)
  * [Insights](#insights)
  * [Obligation.Tradeline](#obligationtradeline)

## Getting Started


Then install as dependency using `npm install` command
```sh
npm install --save @levelcredit/js-lib-api
```

Import using
```ts
import LevelCreditAPI from "@levelcredit/js-lib-api";
```

## API

First parameters of each api call requires `settings: APIFetchSettings`.
```ts
type APIFetchSettings = {
  env: EnvType; // REQUIRED: "development" | "staging" | "production"
  server?: ServerType; // "levelcredit" | "renttrack"; Default: "levelcredit"
  base_url?: string // Override base url of api call. (This won't override url path)
  method?: HTTPRequestMethod; // api should handle this, but this can be overwritten if needed
  auth_token?: string; // for cookie or header auth types
  auth_type?: APIAuthType; // "none" | "cookie" | "header"
  headers?: HeadersInit; // Pass any object that follows type { [key: string]: string }
  signal?: AbortSignal; // Used for aborting api call. Pass in AbortSignal
}
```

### Score
Authentication via `display_token`

```ts
type ScoreQuery = { display_token: CreditDisplayToken };

LevelCreditAPI.Credit.Score(settings: APIFetchSettings, query: ScoreQuery);
```

Returns `Promise<Response<ScoreObject>>`

### Insights
Authentication via `display_token`

```ts
type InsightsQuery = { display_token: CreditDisplayToken };

LevelCreditAPI.Credit.Insights(settings: APIFetchSettings, query: InsightsQuery);
```

Returns `Promise<Response<InsightsObject>>`

### Obligation.Tradeline
Authetication via `header` or `cookie`

```ts
type TradelineQuery = {
  type: ObligationType; // "contract" | "leases" | "utilities"
  id: number; // id of obligation type
};

LevelCreditAPI.Obligation.Tradeline(settings: APIFetchSettings, query: TradelineQuery);
```

Returns `Promise<Response<TradelineObject>>`
