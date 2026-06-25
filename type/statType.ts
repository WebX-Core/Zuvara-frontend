// Portal information in stats
export interface StatPortal {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
}

// Single stat item
export interface Stat {
  id: string;
  createdAt: string;
  sortOrder: number;
  label: string;
  value: string;
  portalId: string;
  portal: StatPortal;
  seoMetadata: any | null;
}

// API response data structure
export interface StatsData {
  stats: Stat[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Complete API response
export interface StatsResponse {
  status: number;
  data: StatsData;
  cached: boolean;
}
