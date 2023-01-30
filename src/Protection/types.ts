export interface MonitoringObject {
  enabled: boolean;
  status: string;
  new_alerts_count: number;
}

export interface AlertSimple {
  id: number;
  url: string;
  alert_type: string;
  bureau: string;
  created_at: string;
  dismissed_at?: string;
}

export interface AlertDetailed extends AlertSimple {
  product_display_id?: string;
}
