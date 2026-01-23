export interface Variant {
  id: number;
  image: string;
  name: string;
  color?: string;
  size?: string;
  // weight?: string;
}

export interface Product {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
  variants?: Variant[];
}
