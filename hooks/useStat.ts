import { useQuery } from "@tanstack/react-query";
import { statService } from "@/services/statService";
import { useMemo } from "react";

/**
 * Hook to fetch all stats
 */
export function useStats() {
  return useQuery({
    queryKey: ["stats"],
    queryFn: () => statService.getAllStats(),
  });
}

/**
 * Hook to fetch stats filtered by portal slug
 * @param portalSlug - "baby-care" or "personal-care"
 */
export function useStatsByPortal(portalSlug: "baby-care" | "personal-care") {
  const { data, isLoading, error } = useStats();

  const filteredStats = useMemo(() => {
    if (!data?.data?.stats) return [];
    return data.data.stats.filter((stat) => stat.portal?.slug === portalSlug);
  }, [data, portalSlug]);

  return {
    stats: filteredStats,
    isLoading,
    error,
  };
}
