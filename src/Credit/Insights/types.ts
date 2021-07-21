import { LevelCreditAPIError } from "../../types";

export type InsightsObject = {
  account_balances: InsightsAccountBalance;
  total_monthly_payments: number;
  total_accounts: InsightsTotalAccount;
  total_public_records: number;
  utilization: number;
  total_inquiries: number;
  oldest_tradeline_years: number;
  bureau: string;
  next_update: string;
  messages: Array<LevelCreditAPIError>;
};

export type InsightsAccountBalance = {
  revolving: number;
  mortgage: number;
  installment: number;
  open_collection: number;
};

export type InsightsTotalAccount = {
  total: number;
  open: number;
  closed: number;
  derogatory: number;
  open_collection: number;
};
