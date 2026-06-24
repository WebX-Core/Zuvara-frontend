import { api } from "@/config/axios-config";
import type { Product as BabyProduct } from "@/type/babyCareProductType";
import type { Product as ClothingProduct } from "@/type/babyClothesType";
import type { Product as StrollerProduct } from "@/type/strollerRockerProductType";
import type { Product as PersonalProduct } from "@/type/personalCareProductType";
import type { BackendProduct, ProductListResponse, SingleProductResponse } from "@/type/productType";

// General product type that can represent any of the categories
export type AppProduct = BabyProduct | ClothingProduct | StrollerProduct | PersonalProduct;

export const productService = {
  /**
   * Fetch all products or filter them by query parameters
   * @param params optional query params
   */
  async getProducts(params?: Record<string, string | number>): Promise<BackendProduct[]> {
    const response = await api.get<ProductListResponse>("/product/get-all", { params });
    return response.data.data.products;
  },

  /**
   * Fetch products by category slug/ID
   */
  async getProductsByCategory(category: string): Promise<BackendProduct[]> {
    const products = await this.getProducts({ category });
    return products.filter(p => p.category.slug === category || p.category.id === category);
  },

  /**
   * Fetch a single product by its unique slug
   */
  async getProductBySlug(slug: string): Promise<BackendProduct> {
    const response = await api.get<SingleProductResponse>(`/product/get/${slug}`);
    return response.data.product;
  },

  /**
   * Create a new product (admin feature example)
   */
  async createProduct(productData: Partial<BackendProduct>): Promise<BackendProduct> {
    const response = await api.post<SingleProductResponse>("/product/create", productData);
    return response.data.product;
  },

  /**
   * Update an existing product (admin feature example)
   */
  async updateProduct(id: string, productData: Partial<BackendProduct>): Promise<BackendProduct> {
    const response = await api.put<SingleProductResponse>(`/product/update/${id}`, productData);
    return response.data.product;
  },

  /**
   * Delete a product
   */
  async deleteProduct(id: string): Promise<void> {
    await api.delete(`/product/delete/${id}`);
  }
};

export default productService;
