import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/services/blogService";
import { useMemo } from "react";

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => blogService.getBlogs(),
  });
}

export function useBlogBySlug(slug: string) {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: () => blogService.getBlogBySlug(slug),
    enabled: !!slug,
  });
}

/**
 * Hook to fetch blogs filtered by portal slug
 * @param portalSlug - "baby-care" or "personal-care"
 */
export function useBlogsByPortal(portalSlug: "baby-care" | "personal-care") {
  const { data, isLoading, error } = useBlogs();

  const filteredBlogs = useMemo(() => {
    if (!data?.blogs) return [];
    return data.blogs.filter((blog) => blog.portal?.slug === portalSlug);
  }, [data, portalSlug]);

  return {
    blogs: filteredBlogs,
    total: filteredBlogs.length,
    isLoading,
    error,
  };
}
