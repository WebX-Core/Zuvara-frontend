// Single review item
export interface Review {
  id: string;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
  fullName: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  isFeatured: boolean;
  productId: string | null;
  product: any | null;
}

// API response data structure
export interface ReviewsData {
  reviews: Review[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Complete API response
export interface ReviewsResponse {
  status: number;
  data: ReviewsData;
  cached: boolean;
}

// Query parameters for fetching reviews
export interface ReviewQueryParams {
  page?: number;
  limit?: number;
  isFeatured?: boolean;
  productId?: string;
}
