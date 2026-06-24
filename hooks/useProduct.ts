import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/productService";

/**
 * Hook to fetch all products
 */
export function useProducts(params?: Record<string, string | number>) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => productService.getProducts(params),
  });
}

/**
 * Hook to fetch products by category
 */
export function useProductsByCategory(category: string) {
  return useQuery({
    queryKey: ["products", "category", category],
    queryFn: () => productService.getProductsByCategory(category),
    enabled: !!category,
  });
}

/**
 * Hook to fetch a single product by slug
 */
export function useProductBySlug(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => productService.getProductBySlug(slug),
    enabled: !!slug,
  });
}
