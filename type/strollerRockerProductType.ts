export interface Variant {
  id: number;
  image: string;
  color: string;
  weight?: string;
  width?: string;
  height?: string;
  depth?: string;
  features?: string[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  variants: Variant[];
  description?: string;
}
