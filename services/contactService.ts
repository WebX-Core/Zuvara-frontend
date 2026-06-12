import { api } from "@/config/axios-config";
import type { ContactFormData, ContactResponse } from "@/type/contactType";

export const contactService = {
  /**
   * Submit contact form data to the backend
   */
  async submitContactForm(data: ContactFormData): Promise<ContactResponse> {
    const response = await api.post<ContactResponse>("/contact/create", data);
    return response.data;
  }
};
export default contactService;
