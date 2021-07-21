export type TradelineObject = { [key: string]: TradelineStatusObject };
export type TradelineStatusObject = { status: TradelineStatus };

type TradelineStatus =
  | "POSITIVE_REPORTED"
  | "POSITIVE_LOOKBACK_REPORTED"
  | "POSITIVE_LOOKBACK_AVAILABLE"
  | "PENDING_REPORT_HOLD"
  | "PENDING_REPORT"
  | "NEGATIVE_LATE_30"
  | "NEGATIVE_LATE_60"
  | "NEGATIVE_LATE_90"
  | "NEGATIVE_LATE_120"
  | "NEGATIVE_LATE_150"
  | "NEGATIVE_LATE_180"
  | "NO_PAYMENT";
