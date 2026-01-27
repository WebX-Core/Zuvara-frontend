import { Product } from "@/type/strollerRockerProductType";

export const strollerRockerProducts: Product[] = [
  {
    id: 1,
    name: "ZUVARA Zinx-Infant-to-Toddler Baby Rocker",
    slug: "zuvara-zinx-infant-to-toddler-baby-rocker",
    category: "Stroller & Rocker",
    image: "/images/strollerRocker/rocker1.png",
    rating: 4.8,
    reviews: 42,
    inStock: true,
    variants: [
      {
        id: 1,
        image: "/images/strollerRocker/rocker1.png",
        color: "Blue (ZV-R31)",
        weight: "4.42kg",
        width: "81.50cm",
        height: "52cm",
        depth: "30cm",
        features: [
          "Simulating",
          "Comfortable",
          "Folding",
          "First Chair for New Born",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "ZUVARA Cheer Baby Stroller",
    slug: "zuvara-cheer-baby-stroller",
    category: "Stroller & Rocker",
    image: "/images/strollerRocker/stroller-blue-1.png",
    rating: 4.5,
    reviews: 28,
    inStock: true,
    variants: [
      {
        id: 1,
        image: "/images/strollerRocker/stroller-blue-1.png",
        color: "Blue (ZV-S1)",
        features: [
          "Safety is our Top Priority",
          "Soft Cushion",
          "Quick Folding pram",
          "Extended Canopy for UV Protection",
          "Premium Oxford Fabric",
        ],
      },
      {
        id: 2,
        image: "/images/strollerRocker/stroller-black-1.png",
        color: "Black (ZV-B68)",
        features: [
          "Safety is our Top Priority",
          "Welcome to the New Fold",
          "Multi-position Seat Reclining",
          "Storage Bag",
          "Canopy with Sky View",
          "Simulating & Comfortable",
          "Super Premium Linen Fabric",
        ],
      },
      {
        id: 3,
        image: "/images/strollerRocker/stroller-grey-1.png",
        color: "Grey (ZV-S1)",
        features: [
          "Safety is our Top Priority",
          "Soft Cushion",
          "Quick Folding pram",
          "Extended Canopy for UV Protection",
          "Premium Oxford Fabric",
        ],
      },
    ],
  },
];
