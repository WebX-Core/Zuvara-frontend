import { api } from "@/config/axios-config";
import type { NewsletterFormData, NewsletterResponse } from "@/type/newsletterType";

export const newsletterService = {
  /**
   * Subscribe to newsletter with email
   */
  async subscribe(data: NewsletterFormData): Promise<NewsletterResponse> {
    const response = await api.post<NewsletterResponse>("/newsletter/create", data);
    return response.data;
  }
};

export default newsletterService;
