import { api } from "@/config/axios-config";
import type { CategoryListResponse, CategoryData, SingleCategoryResponse, CategoryItem } from "@/type/categoryType";

export const categoryService = {
  /**
   * Fetch all categories
   */
  async getCategories(): Promise<CategoryData> {
    const response = await api.get<CategoryListResponse>("/category/get-all");
    return response.data.data;
  },

  /**
   * Fetch a single category by slug
   */
  async getCategoryBySlug(slug: string): Promise<CategoryItem> {
    const response = await api.get<SingleCategoryResponse>(`/category/get/${slug}`);
    return response.data.category;
  }
};

export default categoryService;
