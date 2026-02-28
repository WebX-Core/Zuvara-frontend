export interface Money {
  amount: number;
  currency: "USD" | "NPR" | "EUR" | "GBP" | "INR";
}

export interface Variant {
  id: number;
  image: string;
  icon?: string;
  color?: string;
  size?: string;
  weight?: string;
  price?: Money; // optional variant-level price
}


export interface Review {
  id: number;
  userName: string;
  userInitial: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProductCloseView {
  icon: string;
  label: string;
}

export interface Product {
  id: number;
  name: string;
  price?: Money; // new price field for product
  background?: string;
  foreground?: string;
  disableInvert?: boolean;
  rating: number;
  reviews: number;
  heroImage: string;
  heroImage2?: string;
  image: string;
  video?: string;
  category: string;
  slug: string;
  variants?: Variant[];
  description?: string;
  subDesc1?: string;
  subDesc2?: string;
  subDesc3?: string;
  subDesc4?: string;
  highlights?: string[];
  reviewsData?: Review[];
  faqs?: FAQ[];
  featureImage?: string;
  featureImageTitle1?: string;
  featureImageTitle2?: string;
  featureImageDesc?: string;
  featureTitle?: string;
  featureDesc?: string;
  features?: string[];
  productCloseView?: ProductCloseView[];
}
