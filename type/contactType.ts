// Data submitted to the API
export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
  phone: string;
  location: string;
  productId?: string;
}

// Form data including all fields
export interface ContactFormInput {
  fullName: string;
  email: string;
  message: string;
  phone: string;
  location: string;
  productId?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: any;
}
