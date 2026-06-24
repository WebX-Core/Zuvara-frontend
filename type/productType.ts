export interface BackendCategory {
  id: string;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
  categoryName: string;
  slug: string;
  portalId: string;
}

export interface BackendPortal {
  id: string;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
}

export interface BackendProductVariant {
  id: string;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
  size: string;
  color: string;
  price: string;
  stock: number;
  media: string[];
}

export interface BackendReview {
  id: string;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
  fullName: string;
  location: string;
  avatar: string | null;
  rating: number;
  comment: string;
  isFeatured: boolean;
  productId: string;
}

export interface BackendAvailableSize {
  id: string;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
  productId: string;
  size: string;
  weight: string;
}

export interface BackendHighlight {
  id: string;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
  title: string;
  description: string;
  highlightImages: string[];
  isActive: boolean;
}

export interface BackendProduct {
  id: string;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
  productName: string;
  slug: string;
  description: string;
  coverImage: string;
  videoUrl: string | null;
  isBestSeller: boolean;
  isActive: boolean;
  category: BackendCategory;
  portal: BackendPortal;
  seoMetadata: any | null;
  media: string[];
  productVariants?: BackendProductVariant[];
  reviews?: BackendReview[];
  availableSizes?: BackendAvailableSize[];
  highlights?: BackendHighlight[];
}

export interface ProductListResponse {
  status: number;
  data: {
    products: BackendProduct[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  cached?: boolean;
}

export interface SingleProductResponse {
  status: number;
  product: BackendProduct;
}
