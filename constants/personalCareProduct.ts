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
  "/images/personalCare/period-panties-pack.png",
  "/images/personalCare/period-panties-pack-l.png",
  "/images/personalCare/sanitary-pads-pack.png",
  "/images/personalCare/sanitary-pads-pack-l.png",
  "/images/personalCare/happy-lady.png",
  "/images/personalCare/lady-with-goggles.png",
  "/images/personalCare/sleeping-lady.png",
  "/images/personalCare/period-panties-pack-s.png",
];

const defaultSizeGuideImages = [
  "/images/personalCare/period-panties-pack-s.png",
  "/images/personalCare/period-panties-pack-l.png",
  "/images/personalCare/sanitary-pads-pack-s.png",
  "/images/personalCare/sanitary-pads-pack-l.png",
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
    productImage: "/images/personalCare/period-panties.png",
    image: "/images/personalCare/period-panties.png",
    category: "Period Care",
    rating: 4.8,
    reviews: 423,
    description: "Soft, secure disposable period panties for confident day-to-night comfort.",
    subDesc1:
      "ZUVARA Period Panties are designed for dependable absorbency, breathable comfort, and a flexible fit that moves with your body. They help reduce leak anxiety and support comfortable wear through work, travel, rest, and overnight use.",
    variants: [
      {
        id: 1,
        image: "/images/personalCare/period-panties-pack-s.png",
        size: "M-L",
        weight: "80-105",
      },
      {
        id: 2,
        image: "/images/personalCare/period-panties-pack-l.png",
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
      "/images/personalCare/period-panties-pack.png",
      "/images/personalCare/period-panties.png",
      "/images/personalCare/happy-lady.png",
      "/images/personalCare/period-panties-pack-l.png",
      "/images/personalCare/sleeping-lady.png",
      "/images/personalCare/lady-with-goggles.png",
      "/images/personalCare/period-panties-pack-s.png",
      "/images/personalCare/sanitary-pads-pack.png",
    ],
    sizeGuideImages: [
      "/images/personalCare/period-panties-pack-s.png",
      "/images/personalCare/period-panties-pack-l.png",
      "/images/personalCare/sanitary-pads-pack-s.png",
      "/images/personalCare/sanitary-pads-pack-l.png",
    ],
    carePromiseImages: [
      "/images/personalCare/sleeping-lady.png",
      "/images/personalCare/happy-lady.png",
      "/images/personalCare/lady-with-goggles.png",
    ],
    trustImages: {
      testimonialPrimary: "/images/personalCare/happy-lady.png",
      testimonialSecondary: "/images/personalCare/lady-with-goggles.png",
      comparisonZuvara: "/images/personalCare/period-panties-pack.png",
      comparisonOrdinary: "/images/personalCare/sanitary-pads-pack.png",
    },
  },
  {
    id: 2,
    name: "Sanitary Pads",
    slug: "sanitary-pads",
    productImage: "/images/personalCare/sanitary-pad.png",
    image: "/images/personalCare/sanitary-pad.png",
    category: "Period Care",
    rating: 4.7,
    reviews: 368,
    description: "Ultra-soft sanitary pads with fast absorbency and rash-aware comfort.",
    subDesc1:
      "ZUVARA Sanitary Pads are built for quick lock-in absorbency and breathable comfort. The top layer stays gentle on skin while the core helps keep you dry and fresh across daily movement.",
    variants: [
      {
        id: 1,
        image: "/images/personalCare/sanitary-pads-pack-s.png",
        size: "Regular",
        weight: "80-105",
      },
      {
        id: 2,
        image: "/images/personalCare/sanitary-pads-pack-l.png",
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
      "/images/personalCare/sanitary-pads-pack.png",
      "/images/personalCare/sanitary-pad.png",
      "/images/personalCare/sanitary-pads-pack-l.png",
      "/images/personalCare/sanitary-pads-pack-s.png",
      "/images/personalCare/lady-with-goggles.png",
      "/images/personalCare/sleeping-lady.png",
      "/images/personalCare/happy-lady.png",
      "/images/personalCare/period-panties-pack.png",
    ],
    sizeGuideImages: defaultSizeGuideImages,
    carePromiseImages: [
      "/images/personalCare/happy-lady.png",
      "/images/personalCare/sleeping-lady.png",
      "/images/personalCare/lady-with-goggles.png",
    ],
    trustImages: {
      testimonialPrimary: "/images/personalCare/happy-lady.png",
      testimonialSecondary: "/images/personalCare/sleeping-lady.png",
      comparisonZuvara: "/images/personalCare/sanitary-pads-pack.png",
      comparisonOrdinary: "/images/personalCare/sanitary-pads-pack-l.png",
    },
  },
  {
    id: 3,
    name: "Overnight Pads",
    slug: "sanitary-pads-overnight",
    productImage: "/images/personalCare/sanitary-pad.png",
    image: "/images/personalCare/sanitary-pads-pack-l.png",
    category: "Night Protection",
    rating: 4.9,
    reviews: 291,
    description: "Extra-length overnight pads for uninterrupted sleep and leak confidence.",
    subDesc1:
      "Our overnight sanitary pad variant is crafted for longer hours and restful sleep. Its extended back coverage and absorbent core are designed to reduce night-time leaks while staying comfortable.",
    variants: [
      {
        id: 1,
        image: "/images/personalCare/sanitary-pads-pack-l.png",
        size: "Night",
        weight: "85-130",
      },
      {
        id: 2,
        image: "/images/personalCare/sanitary-pads-pack-s.png",
        size: "Night Lite",
        weight: "80-105",
      },
    ],
    highlights: [
      "Extended back coverage",
      "High-capacity absorbent core",
      "Secure overnight fit",
      "Soft and breathable touch",
    ],
    features: [
      "Overnight Length",
      "Leak-Lock Channels",
      "Secure Wing Hold",
      "Soft Comfort Surface",
    ],
    reviewsData: [
      {
        id: 1,
        userName: "Priya T.",
        userInitial: "PT",
        rating: 5,
        comment: "Finally sleeping through the night without worrying about stains.",
        date: "2026-01-28",
      },
      {
        id: 2,
        userName: "Sara M.",
        userInitial: "SM",
        rating: 5,
        comment: "Great overnight support and still feels gentle on skin.",
        date: "2026-02-18",
      },
    ],
    faqs: commonFaqs,
    productCloseView: [
      { icon: "/icons/12-hours.png", label: "Overnight Length" },
      { icon: "/icons/absorption.png", label: "High-Capacity Core" },
      { icon: "/icons/trusted-icon.png", label: "Back Leak Shield" },
      { icon: "/icons/fabric.png", label: "Soft Skin Contact Layer" },
    ],
    heroAvatars: defaultHeroAvatars,
    whyItMattersImage: "/images/personalCare/sleeping-lady.png",
    moodboardImages: [
      "/images/personalCare/sanitary-pads-pack-l.png",
      "/images/personalCare/sleeping-lady.png",
      "/images/personalCare/sanitary-pads-pack.png",
      "/images/personalCare/happy-lady.png",
      "/images/personalCare/lady-with-goggles.png",
      "/images/personalCare/sanitary-pads-pack-s.png",
      "/images/personalCare/period-panties-pack-l.png",
      "/images/personalCare/period-panties-pack-s.png",
    ],
    sizeGuideImages: defaultSizeGuideImages,
    carePromiseImages: [
      "/images/personalCare/sleeping-lady.png",
      "/images/personalCare/lady-with-goggles.png",
      "/images/personalCare/happy-lady.png",
    ],
    trustImages: {
      testimonialPrimary: "/images/personalCare/sleeping-lady.png",
      testimonialSecondary: "/images/personalCare/lady-with-goggles.png",
      comparisonZuvara: "/images/personalCare/sanitary-pads-pack-l.png",
      comparisonOrdinary: "/images/personalCare/sanitary-pads-pack-s.png",
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
      comparisonZuvara: "/images/personalCare/sanitary-pads-pack.png",
      comparisonOrdinary: "/images/personalCare/sanitary-pads-pack-l.png",
    },
  };
}

export const personalCareProducts: Product[] = seeds.map(normalizeProduct);
