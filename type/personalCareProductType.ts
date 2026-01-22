export interface Variant {
  id: number;
  image: string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
  variants: Variant[];
}
