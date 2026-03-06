export interface Variant {
  id: number;
  image: string;
  size: string;
  weight?: string;
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

export interface TrustImages {
  testimonialPrimary: string;
  testimonialSecondary: string;
  comparisonZuvara: string;
  comparisonOrdinary: string;
}

export interface Product {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  productImage: string;
  image: string;
  category: string;
  slug: string;
  variants: Variant[];
  description?: string;
  subDesc1?: string;
  highlights?: string[];
  features?: string[];
  reviewsData?: Review[];
  faqs?: FAQ[];
  productCloseView?: ProductCloseView[];
  heroAvatars?: string[];
  whyItMattersImage?: string;
  moodboardImages?: string[];
  sizeGuideImages?: string[];
  carePromiseImages?: string[];
  trustImages?: TrustImages;
}
