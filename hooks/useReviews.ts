import { useState, useEffect } from "react";
import { reviewService } from "@/services/reviewService";
import type { Review, ReviewQueryParams } from "@/type/reviewType";

interface UseReviewsReturn {
  reviews: Review[];
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  totalPages: number;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch and manage reviews
 * @param params - Optional query parameters
 * @param autoFetch - Whether to fetch on mount (default: true)
 */
export const useReviews = (
  params?: ReviewQueryParams,
  autoFetch: boolean = true
): UseReviewsReturn => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await reviewService.getAllReviews(params);

      if (response.status === 200 && response.data) {
        setReviews(response.data.reviews);
        setTotal(response.data.total);
        setPage(response.data.page);
        setTotalPages(response.data.totalPages);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch reviews";
      setError(errorMessage);
      console.error("Error fetching reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchReviews();
    }
  }, [JSON.stringify(params), autoFetch]);

  return {
    reviews,
    loading,
    error,
    total,
    page,
    totalPages,
    refetch: fetchReviews,
  };
};

/**
 * Hook to fetch only featured reviews (general reviews with no product association)
 * Filters out product-specific reviews (productId = null)
 */
export const useFeaturedReviews = (): UseReviewsReturn => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await reviewService.getAllReviews({ isFeatured: true });

      if (response.status === 200 && response.data) {
        // Filter to only show general reviews (productId is null)
        const generalReviews = response.data.reviews.filter(
          (review) => review.productId === null
        );
        
        setReviews(generalReviews);
        setTotal(generalReviews.length);
        setPage(response.data.page);
        setTotalPages(response.data.totalPages);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch reviews";
      setError(errorMessage);
      console.error("Error fetching reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
    loading,
    error,
    total,
    page,
    totalPages,
    refetch: fetchReviews,
  };
};

/**
 * Hook to fetch reviews for a specific product
 */
export const useProductReviews = (productId: string): UseReviewsReturn => {
  return useReviews({ productId });
};