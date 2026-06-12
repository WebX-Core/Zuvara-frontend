import { useMutation } from "@tanstack/react-query";
import { contactService } from "@/services/contactService";
import type { ContactFormData } from "@/type/contactType";

export function useSubmitContact() {
  return useMutation({
    mutationFn: (data: ContactFormData) => contactService.submitContactForm(data),
  });
}
