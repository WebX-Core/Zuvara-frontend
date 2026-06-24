export interface FaqPortal {
  id: string;
  name: string;
  slug: string;
}

export interface ApiFaqItem {
  id: string;
  createdAt: string;
  sortOrder: number;
  question: string;
  answer: string; // HTML content
  portalId: string;
  portal: FaqPortal;
  productId?: string | null; // Optional: if FAQ is product-specific
  seoMetadata: any | null;
}

export interface FaqListData {
  faqs: ApiFaqItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface FaqListResponse {
  status: number;
  data: FaqListData;
  cached: boolean;
}

export interface SingleFaqResponse {
  status: number;
  faq: ApiFaqItem;
}
