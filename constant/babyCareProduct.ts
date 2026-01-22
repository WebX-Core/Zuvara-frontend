import { Product } from "../type/babyCareProductType";

export const babyCareProducts: Product[] = [
  {
    id: 1,
    name: "Premium Baby Lotion",
    rating: 4.8,
    reviews: 245,
    image: "/diaper/diaper2.png",
    category: "Baby Lotion",
    inStock: true,
    variants: [
      { id: 1, image: "/diaper/diaper2.png", color: "White" },
      { id: 2, image: "/diaper/diaper.png", color: "Cream" },
    ],
  },
  {
    id: 2,
    name: "Ultra Soft Baby Diapers",
    rating: 4.9,
    reviews: 512,
    image: "/diaper/diaper.png",
    category: "Baby Diaper",
    inStock: true,
    variants: [
      { id: 1, image: "/diaper/diaper.png", color: "Size S" },
      { id: 2, image: "/diaper/diaper2.png", color: "Size M" },
      { id: 3, image: "/diaper/diaper.png", color: "Size L" },
    ],
  },
  {
    id: 3,
    name: "Lightweight Baby Stroller",
    rating: 4.7,
    reviews: 189,
    image: "/diaper/diaper2.png",
    category: "Baby Stroller",
    inStock: true,
    variants: [
      { id: 1, image: "/diaper/diaper2.png", color: "Black" },
      { id: 2, image: "/diaper/diaper.png", color: "Gray" },
    ],
  },
  {
    id: 4,
    name: "Organic Baby T-Shirts",
    rating: 4.6,
    reviews: 156,
    image: "/diaper/diaper.png",
    category: "Baby T-Shirt",
    inStock: true,
    variants: [
      { id: 1, image: "/diaper/diaper.png", color: "White" },
      { id: 2, image: "/diaper/diaper2.png", color: "Blue" },
      { id: 3, image: "/diaper/diaper.png", color: "Pink" },
    ],
  },
];
