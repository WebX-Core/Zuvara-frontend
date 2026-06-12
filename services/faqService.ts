import { api } from "@/config/axios-config";
import type { FaqListResponse, FaqListData, SingleFaqResponse, ApiFaqItem } from "@/type/faqType";

export const faqService = {
  /**
   * Fetch all FAQs
   */
  async getFaqs(): Promise<FaqListData> {
    const response = await api.get<FaqListResponse>("/faq/get-all");
    return response.data.data;
  },

  /**
   * Fetch a single FAQ by its ID
   */
  async getFaqById(id: string): Promise<ApiFaqItem> {
    const response = await api.get<SingleFaqResponse>(`/faq/get/${id}`);
    return response.data.faq;
  }
};

export default faqService;
