import { Product } from "../type/personalCareProductType";

export const personalCareProducts: Product[] = [
  {
    id: 5,
    name: "Premium Sanitary Pads",
    rating: 4.8,
    reviews: 423,
    image: "/diaper/diaper2.png",
    category: "Sanitary Pads",
    inStock: true,
    variants: [
      { id: 1, image: "/diaper/diaper2.png", color: "Regular" },
      { id: 2, image: "/diaper/diaper.png", color: "Heavy" },
      { id: 3, image: "/diaper/diaper2.png", color: "Overnight" },
    ],
  },
  {
    id: 6,
    name: "Gentle Face Moisturizer",
    rating: 4.8,
    reviews: 245,
    image: "/diaper/diaper.png",
    category: "Face Care",
    inStock: true,
    variants: [
      { id: 1, image: "/diaper/diaper.png", color: "Cream" },
      { id: 2, image: "/diaper/diaper2.png", color: "Gel" },
    ],
  },
  {
    id: 7,
    name: "Organic Body Lotion",
    rating: 4.6,
    reviews: 189,
    image: "/diaper/diaper2.png",
    category: "Body Care",
    inStock: true,
    variants: [
      { id: 1, image: "/diaper/diaper2.png", color: "Lavender" },
      { id: 2, image: "/diaper/diaper.png", color: "Rose" },
    ],
  },
  {
    id: 8,
    name: "Natural Hair Care Oil",
    rating: 4.7,
    reviews: 312,
    image: "/diaper/diaper.png",
    category: "Hair Care",
    inStock: true,
    variants: [
      { id: 1, image: "/diaper/diaper.png", color: "Pure" },
      { id: 2, image: "/diaper/diaper2.png", color: "Herbal" },
    ],
  },
];
