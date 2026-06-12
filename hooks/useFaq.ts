import { useQuery } from "@tanstack/react-query";
import { faqService } from "@/services/faqService";
import { useMemo } from "react";

export function useFaqs() {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: () => faqService.getFaqs(),
  });
}

export function useFaqById(id: string) {
  return useQuery({
    queryKey: ["faq", id],
    queryFn: () => faqService.getFaqById(id),
    enabled: !!id,
  });
}

/**
 * Hook to fetch FAQs filtered by portal slug
 * @param portalSlug - "baby-care" or "personal-care"
 */
export function useFaqsByPortal(portalSlug: "baby-care" | "personal-care") {
  const { data, isLoading, isError } = useFaqs();

  const filteredFaqs = useMemo(() => {
    if (!data?.faqs) return [];
    return data.faqs.filter((faq) => faq.portal?.slug === portalSlug);
  }, [data, portalSlug]);

  return {
    faqs: filteredFaqs,
    total: filteredFaqs.length,
    isLoading,
    isError,
  };
}
