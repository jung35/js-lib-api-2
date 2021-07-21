import { LevelCreditAPIError } from "../../types";

export type ScoreObject = {
  current_score: number;
  change_since_first: number;
  scores: ScoreObjectScores;
  next_update: string;
  messages: Array<LevelCreditAPIError>;
};

export type ScoreObjectScores = { [key: string]: string };
