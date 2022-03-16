export type TradelineObject = { [key: string]: TradelineStatusObject };
export type TradelineStatusObject = { status: TradelineStatus; transaction_details: TransactionDetailsItem[] };
export type TransactionDetailsItem = { date: Date; amount: number; name: string; status: string | null };
type TradelineStatus =
  | "POSITIVE_REPORT"
  | "POSITIVE_LOOKBACK_REPORT"
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
