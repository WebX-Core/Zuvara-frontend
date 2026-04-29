import type { Product } from "../type/personalCareProductType";

type ProductSeed = {
  id: number;
  name: string;
  slug: string;
  productImage: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  subDesc1: string;
  variants: Product["variants"];
  highlights: string[];
  features: string[];
  reviewsData: Product["reviewsData"];
  faqs: Product["faqs"];
  productCloseView: Product["productCloseView"];
  heroAvatars: Product["heroAvatars"];
  whyItMattersImage: Product["whyItMattersImage"];
  moodboardImages: Product["moodboardImages"];
  sizeGuideImages: Product["sizeGuideImages"];
  carePromiseImages: Product["carePromiseImages"];
  trustImages: Product["trustImages"];
};

const defaultHeroAvatars = [
  "/images/personalCare/happy-lady.png",
  "/images/personalCare/lady-with-goggles.png",
  "/images/personalCare/sleeping-lady.png",
  "/images/personalCare/happy-lady.png",
];

const defaultMoodboardImages = [
  "/images/personalCare/happy-lady.png",
  "/images/personalCare/lady-with-goggles.png",
  "/images/personalCare/sleeping-lady.png",
  "/images/personalCare/happy-lady.png",
];

const defaultSizeGuideImages = [
  "/PRODUCTS/personal/period%20panties/size_m-l.jpg",
  "/PRODUCTS/personal/period%20panties/size_l-xl.jpg",
];

const commonFaqs: NonNullable<Product["faqs"]> = [
  {
    question: "How do I choose the right product size?",
    answer:
      "Check the size and weight guidance shown for each variant. If you are between ranges, choose the larger size for better comfort.",
  },
  {
    question: "Are these products safe for sensitive skin?",
    answer:
      "Yes. Our materials are selected to be gentle and breathable, and are made for everyday skin comfort.",
  },
  {
    question: "How often should I change or refresh during use?",
    answer:
      "This depends on your flow and routine. For best comfort and hygiene, change at regular intervals based on your day.",
  },
  {
    question: "Can I use these products overnight?",
    answer:
      "Yes. For longer protection windows, choose higher-absorbency variants or overnight-focused options.",
  },
];

const seeds: ProductSeed[] = [
  {
    id: 1,
    name: "Period Panties",
    slug: "period-panties",
    productImage: "/PRODUCTS/personal/period%20panties/product.png",
    image: "/PRODUCTS/personal/period%20panties/product.png",
    category: "Period Care",
    rating: 4.8,
    reviews: 423,
    description: "Soft, secure disposable period panties for confident day-to-night comfort.",
    subDesc1:
      "ZUVARA Period Panties offer reliable absorbency, breathable comfort, and a flexible fit for confident, leak-free protection throughout your day and night.",
    variants: [
      {
        id: 1,
        image: "/PRODUCTS/personal/period%20panties/size_m-l.jpg",
        size: "M-L",
        weight: "80-105",
      },
      {
        id: 2,
        image: "/PRODUCTS/personal/period%20panties/size_l-xl.jpg",
        size: "L-XL",
        weight: "85-130",
      },
    ],
    highlights: [
      "360-degree secure fit",
      "Breathable soft inner layer",
      "High absorbency core",
      "Leak-guard side support",
    ],
    features: [
      "360° Coverage",
      "Contoured Side Cuffs",
      "Breathable Fabric Feel",
      "Curve-Hugging Fit",
    ],
    reviewsData: [
      {
        id: 1,
        userName: "Ariana K.",
        userInitial: "AK",
        rating: 5,
        comment: "Comfortable fit and no leak stress during long work days.",
        date: "2026-01-16",
      },
      {
        id: 2,
        userName: "Meera S.",
        userInitial: "MS",
        rating: 5,
        comment: "Soft on skin and reliable overnight. Exactly what I needed.",
        date: "2026-02-02",
      },
    ],
    faqs: commonFaqs,
    productCloseView: [
      { icon: "/icons/inner-core.png", label: "Ultra Soft Top Layer" },
      { icon: "/icons/absorption.png", label: "Rapid Absorb Core" },
      { icon: "/icons/loop-style-waist.png", label: "Body-Hug Fit" },
      { icon: "/icons/disposable-tape.png", label: "Secure Disposal Tape" },
    ],
    heroAvatars: defaultHeroAvatars,
    whyItMattersImage: "/images/personalCare/sleeping-lady.png",
    moodboardImages: [
      "/images/personalCare/happy-lady.png",
      "/images/personalCare/sleeping-lady.png",
      "/images/personalCare/lady-with-goggles.png",
      "/images/personalCare/happy-lady.png",
    ],
    sizeGuideImages: [
      "/PRODUCTS/personal/period%20panties/size_m-l.jpg",
      "/PRODUCTS/personal/period%20panties/size_l-xl.jpg",
    ],
    carePromiseImages: [
      "/images/personalCare/sleeping-lady.png",
      "/images/personalCare/happy-lady.png",
      "/images/personalCare/lady-with-goggles.png",
    ],
    trustImages: {
      testimonialPrimary: "/images/personalCare/happy-lady.png",
      testimonialSecondary: "/images/personalCare/lady-with-goggles.png",
      comparisonZuvara: "/PRODUCTS/personal/period%20panties/product.png",
      comparisonOrdinary: "/new/nonbrand/periodpanty.jpg",
    },
  },
  {
    id: 2,
    name: "Sanitary Pads",
    slug: "sanitary-pads",
    productImage: "/PRODUCTS/personal/sanitary%20pads/product.png",
    image: "/PRODUCTS/personal/sanitary%20pads/product.png",
    category: "Period Care",
    rating: 4.7,
    reviews: 368,
    description: "Ultra-soft sanitary pads with fast absorbency and rash-aware comfort.",
    subDesc1:
      "ZUVARA Period Panties provide reliable absorbency, breathable comfort, and a flexible fit for confident, leak-free protection day and night.",
    variants: [
      {
        id: 1,
        image: "/PRODUCTS/personal/sanitary%20pads/product.png",
        size: "Regular",
        weight: "80-105",
      },
      {
        id: 2,
        image: "/PRODUCTS/personal/sanitary%20pads/product.png",
        size: "Large",
        weight: "85-130",
      },
    ],
    highlights: [
      "Fast absorbency channels",
      "Soft cotton-touch top sheet",
      "Wide wings for hold",
      "Odour control support",
    ],
    features: [
      "Ultra Soft Surface",
      "Rapid Absorption",
      "Wide Secure Wings",
      "Longer Coverage",
    ],
    reviewsData: [
      {
        id: 1,
        userName: "Nina R.",
        userInitial: "NR",
        rating: 5,
        comment: "Very comfortable and surprisingly light even on heavy days.",
        date: "2026-01-10",
      },
      {
        id: 2,
        userName: "Elena P.",
        userInitial: "EP",
        rating: 4,
        comment: "Good hold and less irritation compared to what I used before.",
        date: "2026-02-11",
      },
    ],
    faqs: commonFaqs,
    productCloseView: [
      { icon: "/icons/fabric.png", label: "Cotton-Soft Surface" },
      { icon: "/icons/absorption.png", label: "Quick Lock Channels" },
      { icon: "/icons/trust.png", label: "Leak-Guard Wing Hold" },
      { icon: "/icons/natural.png", label: "Breathable Comfort Layer" },
    ],
    heroAvatars: defaultHeroAvatars,
    whyItMattersImage: "/images/personalCare/happy-lady.png",
    moodboardImages: [
      "/images/personalCare/lady-with-goggles.png",
      "/images/personalCare/sleeping-lady.png",
      "/images/personalCare/happy-lady.png",
      "/images/personalCare/lady-with-goggles.png",
    ],
    sizeGuideImages: [
      "/PRODUCTS/personal/sanitary%20pads/tech1.jpg",
      "/PRODUCTS/personal/sanitary%20pads/tech2.jpg",
    ],
    carePromiseImages: [
      "/images/personalCare/happy-lady.png",
      "/images/personalCare/sleeping-lady.png",
      "/images/personalCare/lady-with-goggles.png",
    ],
    trustImages: {
      testimonialPrimary: "/images/personalCare/happy-lady.png",
      testimonialSecondary: "/images/personalCare/sleeping-lady.png",
      comparisonZuvara: "/PRODUCTS/personal/sanitary%20pads/product.png",
      comparisonOrdinary: "/new/nonbrand/sanitary-pad.jpg",
    },
  },

];

function normalizeProduct(seed: ProductSeed): Product {
  return {
    id: seed.id,
    name: seed.name,
    slug: seed.slug,
    rating: seed.rating,
    reviews: seed.reviews,
    productImage: seed.productImage,
    image: seed.image,
    category: seed.category,
    variants: seed.variants,
    description: seed.description,
    subDesc1: seed.subDesc1,
    highlights: seed.highlights,
    features: seed.features,
    reviewsData: seed.reviewsData,
    faqs: seed.faqs,
    productCloseView: seed.productCloseView,
    heroAvatars: seed.heroAvatars || defaultHeroAvatars,
    whyItMattersImage:
      seed.whyItMattersImage || "/images/personalCare/sleeping-lady.png",
    moodboardImages: seed.moodboardImages || defaultMoodboardImages,
    sizeGuideImages: seed.sizeGuideImages || defaultSizeGuideImages,
    carePromiseImages: seed.carePromiseImages || [
      "/images/personalCare/sleeping-lady.png",
    ],
    trustImages: seed.trustImages || {
      testimonialPrimary: "/images/personalCare/happy-lady.png",
      testimonialSecondary: "/images/personalCare/lady-with-goggles.png",
      comparisonZuvara: "/PRODUCTS/personal/sanitary%20pads/product.png",
      comparisonOrdinary: "/new/nonbrand/sanitary-pad.jpg",
    },
  };
}

export const personalCareProducts: Product[] = seeds.map(normalizeProduct);
