export type RecordItem = {
  id: string;
  title: string;
  owner: string;
  status: string;
  priority: string;
  note: string;
};

export type DashboardPayload = {
  title: string;
  totals: Array<{ label: string; value: string }>;
  records: RecordItem[];
};
