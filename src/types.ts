import type postgres from "postgres";

export type Env = {
  API_KEY: string;
  DATABASE_URL: string;
  TZ_OFFSET?: string;
  AMAP_MAPS_API_KEY?: string;
};

export type Vars = {
  sql: postgres.Sql;
  offsetMinutes: number;
};

export type EventRecord = {
  id: number;
  type: string;
  value: string | null;
  ts: string | null;
};

export type EventQuery = {
  since: Date;
  until: Date;
  type?: string;
  value?: string;
  limit: number;
  offset: number;
};

export type JsonRpcId = string | number | null;
export type JsonRpcMessage = Record<string, unknown>;

export type DeleteFilter = {
  since?: Date;
  until?: Date;
  /** true 时上界用 `ts < until`，用于「某一天」「N 天前」这类半开区间 */
  untilExclusive: boolean;
  type?: string;
  value?: string;
};
