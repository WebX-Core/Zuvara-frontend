import { api } from "@/config/axios-config";
import type { ReviewsResponse, ReviewQueryParams } from "@/type/reviewType";

export const reviewService = {
  /**
   * Fetch all reviews from the backend
   * @param params - Optional query parameters (page, limit, isFeatured, productId)
   */
  async getAllReviews(params?: ReviewQueryParams): Promise<ReviewsResponse> {
    const response = await api.get<ReviewsResponse>("/review/get-all", {
      params,
    });
    return response.data;
  },

  /**
   * Fetch featured reviews only
   */
  async getFeaturedReviews(): Promise<ReviewsResponse> {
    return this.getAllReviews({ isFeatured: true });
  },

  /**
   * Fetch reviews for a specific product
   * @param productId - The ID of the product
   */
  async getProductReviews(productId: string): Promise<ReviewsResponse> {
    return this.getAllReviews({ productId });
  },
};

export default reviewService;
