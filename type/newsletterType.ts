export interface NewsletterFormData {
  email: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
  data?: any;
}
