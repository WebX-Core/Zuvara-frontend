export interface CategoryPortal {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  description?: string;
}

export interface CategoryItem {
  id: string;
  createdAt: string;
  sortOrder: number;
  categoryName: string;
  slug: string;
  portalId: string;
  portal: CategoryPortal;
  seoMetadata?: any | null;
}

export interface CategoryData {
  category: CategoryItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface CategoryListResponse {
  status: number;
  data: CategoryData;
  cached: boolean;
}

export interface SingleCategoryResponse {
  status: number;
  category: CategoryItem;
}
