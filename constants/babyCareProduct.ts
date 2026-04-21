// babyCareProduct.ts
import { Product } from "../type/babyCareProductType";

/**
 * Defaults: used to fill missing fields so EVERY product ends up with EVERYTHING.
 */
const DEFAULT_REVIEW = {
  id: 1,
  userName: "Zuvara Customer",
  userInitial: "ZC",
  rating: 5,
  comment: "Great quality and gentle on baby's skin.",
  date: "2024-01-01",
};

const DEFAULT_FAQ = [
  {
    question: "Is this product safe for babies?",
    answer:
      "Yes. This product is designed for delicate baby skin and is made with baby-safe materials. Please follow the usage instructions on the pack.",
  },
  {
    question: "How should I store this product?",
    answer:
      "Store in a cool, dry place away from direct sunlight. Ensure the pack is sealed properly after use.",
  },
];

const DEFAULT_VARIANT = {
  id: 1,
  image: "/images/placeholder.png",
  icon: "/icons/placeholder.png",
  size: "One Size",
  weight: "",
};

const DEFAULT_CLOSE_VIEW = [
  { icon: "/icons/placeholder.png", label: "Premium Material" },
  { icon: "/icons/placeholder.png", label: "Baby-safe Design" },
  { icon: "/icons/placeholder.png", label: "Comfort Fit" },
  { icon: "/icons/placeholder.png", label: "Leak Protection" },
];

function normalizeProduct(p: Product): Product {
  return {
    ...p,

    // core
    foreground: p.foreground ?? "#111827",
    background: p.background ?? "#ffffff",
    category: p.category ?? "Baby Care",
    description: p.description ?? "Premium baby care product by Zuvara.",
    video: p.video ?? "/videos/diaper-video2.mp4",

    // images
    heroImage: p.heroImage ?? p.image ?? "/images/placeholder.png",
    heroImage2:
      p.heroImage2 ?? p.heroImage ?? p.image ?? "/images/placeholder.png",
    image: p.image ?? p.heroImage ?? "/images/placeholder.png",

    // rating
    rating: typeof p.rating === "number" ? p.rating : 4.7,
    reviews: typeof p.reviews === "number" ? p.reviews : 120,

    // long descs
    subDesc1: p.subDesc1 ?? "",
    subDesc2: p.subDesc2 ?? "",
    subDesc3: p.subDesc3 ?? "",
    subDesc4: p.subDesc4 ?? "",

    // arrays
    highlights: Array.isArray(p.highlights) ? p.highlights : [],
    features: Array.isArray(p.features) ? p.features : [],

    // feature section
    featureImage: p.featureImage ?? p.image ?? "/images/placeholder.png",
    featureImageTitle1: p.featureImageTitle1 ?? "",
    featureImageTitle2: p.featureImageTitle2 ?? "",
    featureImageDesc: p.featureImageDesc ?? "",
    featureTitle: p.featureTitle ?? "",
    featureDesc: p.featureDesc ?? "",

    // variants
    variants:
      Array.isArray(p.variants) && p.variants.length
        ? p.variants.map((v, idx) => ({
            ...DEFAULT_VARIANT,
            ...v,
            id: v.id ?? idx + 1,
            image: v.image ?? DEFAULT_VARIANT.image,
            icon: v.icon ?? DEFAULT_VARIANT.icon,
            size: v.size ?? DEFAULT_VARIANT.size,
            weight: v.weight ?? "",
          }))
        : [{ ...DEFAULT_VARIANT }],

    // reviewsData
    reviewsData:
      Array.isArray(p.reviewsData) && p.reviewsData.length
        ? p.reviewsData
        : [{ ...DEFAULT_REVIEW }],

    // faqs
    faqs: Array.isArray(p.faqs) && p.faqs.length ? p.faqs : DEFAULT_FAQ,

    // productCloseView
    productCloseView:
      Array.isArray(p.productCloseView) && p.productCloseView.length
        ? p.productCloseView
        : DEFAULT_CLOSE_VIEW,
  };
}

/**
 * Raw data (keep as-is)
 */
const rawBabyCareProducts: Product[] = [
  {
    id: 1,
    name: "Premium Diapers & Pants",
    price: { amount: 249, currency: "NPR" },
    slug: "premium-diapers-pants",
    background: "#6abbb8",
    foreground: "#ffffff",
    rating: 4.8,
    reviews: 245,
    heroImage: "/PRODUCTS/Baby/premium-diapers/product.png",
    heroImage2: "/PRODUCTS/Baby/premium-diapers/product.png",
    image: "/PRODUCTS/Baby/premium-diapers/product.png",
    video: "/videos/diaper-video2.mp4",
    category: "Baby Diaper",
    variants: [
      {
        id: 1,
        image: "/PRODUCTS/Baby/premium-diapers/product.png",
        icon: "/icons/nb.png",
        size: "NB",
      },
      {
        id: 2,
        image: "/PRODUCTS/Baby/premium-diapers/product.png",
        icon: "/icons/s.png",
        size: "S",
        weight: "3-6",
      },
      {
        id: 3,
        image: "/PRODUCTS/Baby/premium-diapers/product.png",
        icon: "/icons/m.png",
        size: "M",
        weight: "4-10",
      },
      {
        id: 4,
        image: "/PRODUCTS/Baby/premium-diapers/product.png",
        icon: "/icons/l.png",
        size: "L",
        weight: "9-14",
      },
      {
        id: 5,
        image: "/PRODUCTS/Baby/premium-diapers/product.png",
        icon: "/icons/xl.png",
        size: "XL",
        weight: "13-18",
      },
      {
        id: 6,
        image: "/PRODUCTS/Baby/premium-diapers/product.png",
        icon: "/icons/xxl.png",
        size: "XXL",
        weight: "16-21",
      },
    ],
    reviewsData: [
      {
        id: 1,
        userName: "Amir S.",
        userInitial: "AS",
        rating: 5,
        comment:
          "This has completely changed our diaper routine. No more leaks at night!",
        date: "2024-01-15",
      },
      {
        id: 2,
        userName: "Maria K.",
        userInitial: "MK",
        rating: 4,
        comment:
          "Very soft and absorbent. Highly recommended for sensitive skin.",
        date: "2024-01-20",
      },
    ],
    highlights: [
      "Ultra-soft breathable top sheet",
      "Quick lock absorbent core",
      "Flexible waistband for active movement",
      "Wetness indicator for timely changes",
    ],
    faqs: [
      {
        question: "Are Feather Diapers safe to be used by my baby?",
        answer:
          "Only pure water-based inks are utilized on our Zuvara Feather Diapers, making them completely safe and secure to be used by babies daily. Zuvara Diapers are the softest disposable diapers and breathable pores to ensure air can easily pass through and work as a rash guard for your baby’s safety.",
      },
      {
        question: "How does the wetness indicator work in Feather Diapers?",
        answer:
          "Wetness indicators are a convenient way to indicate the time to change your baby’s diaper. Each Diaper comes with 3 wetness indicator lines on them. These lines turn from yellow to blue whenever your baby pees/poops",
      },
      {
        question: "How can I pick the right size of diaper for my baby?",
        answer: `Zuvara Diapers are obtainable in different sizes ranging from NB to XXL. You can select the perfect size depending on the weight of your baby. 

• Small size is perfect for babies weighing from 3-6 kgs. 
• Medium size is suitable for babies weighing from 4-10 kgs. 
• Large size is precise for babies weighing from 9-14 kgs. 
• Extra Large size is best for babies weighing from 13-18 kgs.
• Lastly, XXL size is the right fit for babies weighing more than 16kgs.`,
      },
      {
        question:
          "How to dispose off Feather diapers?Is there a wetness indicator?",
        answer:
          "Zuvara diapers come with disposable tape so that you can dispose of the diapers with utmost hygiene and care. The soiled diapers can be conveniently wrapped and sealed using disposable tape.",
      },
      {
        question: "Are Feather Diapers safe to be used by my baby?",
        answer:
          "Only pure water-based inks are used on our Zuvara Diapers making it completely safe to be used by babies on daily basis. Zuvara Diaper also has breathable pores to ensure air can easily pass through and act as a rash guard for your baby’s safety.",
      },
      {
        question: "Do Feather Diapers have an expiry date?",
        answer:
          "Yes, our Zuvara Diapers do have an expiry date. You can keep our baby diapers for up to 3 years without worry. We strongly recommend storing Feather diapers in a cool and dry environment for hygienic reasons.",
      },
    ],
    description:
      "Feather Diaper Tape technology provides a lightweight yet secure fit for newborns.",
    featureImage: "/PRODUCTS/Baby/premium-diapers/technology.jpg",
    featureTitle: "Absorbs 15x its weight in liquid",
    featureDesc:
      "Zuvara Premium Care Pants have super-absorbent gel absorbs the liquid to lock it away from your baby’s skin and prevent wetness from transferring to your baby’s bed or clothes.",
    features: [
      "Upgraded softbess for a cloud of touch and skin-friendly pampering",
      "Visibly thin, like it's not worn, the butt feel relaxed",
      "PE film for breathable relief and good mood healing",
      "Highly effective SAP core, instantly absorbent, as dry as the sun",
      "Upgraded bubble waistband for a soft, caressing hug and comfortable wear for your baby",
    ],
    productCloseView: [
      {
        icon: "/icons/fabric.png",
        label: "Cloud-Soft Top Sheet",
      },
      {
        icon: "/icons/absorption.png",
        label: "Quick-Lock Core",
      },
      {
        icon: "/icons/loop-style-waist.png",
        label: "Flex Waistband",
      },
      {
        icon: "/icons/wetness-indicator.png",
        label: "Wetness Indicator",
      },
    ],
  },
  {
    id: 2,
    name: "Supreme Diapers",
    price: { amount: 299, currency: "NPR" },
    slug: "supreme-diapers",
    background: "#456a5c",
    foreground: "#ffffff",
    rating: 4.8,
    reviews: 245,
    heroImage: "/PRODUCTS/Baby/supreme-diapers/product.png",
    heroImage2: "/PRODUCTS/Baby/supreme-diapers/product.png",
    image: "/PRODUCTS/Baby/supreme-diapers/product.png",
    video: "/videos/diaper-video2.mp4",
    category: "Baby Diaper",
    variants: [
      {
        id: 1,
        image: "/PRODUCTS/Baby/supreme-diapers/product.png",
        icon: "/icons/m.png",
        size: "M",
        weight: "4-10",
      },
      {
        id: 2,
        image: "/PRODUCTS/Baby/supreme-diapers/product.png",
        icon: "/icons/l.png",
        size: "L",
        weight: "9-14",
      },
      {
        id: 3,
        image: "/PRODUCTS/Baby/supreme-diapers/product.png",
        icon: "/icons/xl.png",
        size: "XL",
        weight: "12-17",
      },
      {
        id: 4,
        image: "/PRODUCTS/Baby/supreme-diapers/product.png",
        icon: "/icons/xxl.png",
        size: "XXL",
        weight: ">15",
      },
    ],
    description: "Get ready for a dry, leak-free adventure ahead!",
    subDesc1:
      "Say goodbye to worries over rashes, heaviness, and leakage with Zuvara Supreme Diapers! Your baby deserves the best, and these diapers deliver unparalleled comfort and protection.",
    subDesc2:
      "Crafted to be the thinnest diapers on the market, Zuvara Supreme Diapers prioritize your baby’s well-being. Dermatologically and Pediatrician tested, they’re gentle on even the most sensitive skin types. Plus, they’re completely chemical-free, with 0% Parabens, Latex, Fragrance, Phthalates, and Chlorine.",
    subDesc3:
      "Breathable pores ensure air circulation, acting as a shield against rashes, while the leak-proof design and 12-hour super absorbency guarantee uninterrupted playtime and sleep. The 360-degree elasticity provides freedom of movement, preventing discomfort during exploration and discovery.",
    subDesc4:
      "Zuvara Supreme Diapers also feature a handy wetness indicator, changing color when it’s time for a change, ensuring your baby stays dry and comfortable. Give your little one the gift of a happy diaper journey with Zuvara, the premium choice for discerning parents in Nepal.",
    highlights: [
      "Extra soft breathable outer layer",
      "12-hour leak protection",
      "Wetness indicator",
      "Hypoallergenic materials",
      "Flexible waistband for perfect fit",
    ],
    reviewsData: [
      {
        id: 1,
        userName: "Amir S.",
        userInitial: "AS",
        rating: 5,
        comment:
          "This has completely changed our diaper routine. No more leaks at night!",
        date: "2024-01-15",
      },
      {
        id: 2,
        userName: "Maria K.",
        userInitial: "MK",
        rating: 4,
        comment:
          "Very soft and absorbent. Highly recommended for sensitive skin.",
        date: "2024-01-20",
      },
    ],
    faqs: [
      {
        question: "Are Supreme Diapers safe to be used by my baby?",
        answer:
          "Only pure water-based inks are utilized on our Zuvara Supreme Diapers, making them completely safe and secure to be used by babies daily. Zuvara Diapers are the softest disposable diapers and breathable pores to ensure air can easily pass through and work as a rash guard for your baby’s safety.",
      },
      {
        question: "How does the wetness indicator work in Supreme Diapers?",
        answer:
          "Wetness indicators are a convenient way to indicate the time to change your baby’s diaper. Each Diaper comes with 3 wetness indicator lines on them. These lines turn from yellow to blue whenever your baby pees/poops",
      },
      {
        question: "How can I pick the right size of diaper for my baby?",
        answer: `Zuvara Diapers are obtainable in different sizes ranging from M to XXL. You can select the perfect size depending on the weight of your baby:

• Medium: 6-11 kgs
• Large: 9-14 kgs
• Extra Large: 12-17 kgs
• XXL: More than 15 kgs`,
      },
      {
        question:
          "How to dispose off Supreme diapers?Is there a wetness indicator?",
        answer:
          "Zuvara diapers come with disposable tape so that you can dispose of the diapers with utmost hygiene and care. The soiled diapers can be conveniently wrapped and sealed using disposable tape.",
      },
      {
        question: "Are Supreme Diapers safe to be used by my baby?",
        answer:
          "Only pure water-based inks are used on our Zuvara Diapers making it completely safe to be used by babies on daily basis. Zuvara Diaper also has breathable pores to ensure air can easily pass through and act as a rash guard for your baby’s safety.",
      },
      {
        question: "Do Supreme Diapers have an expiry date?",
        answer:
          "Yes, our Zuvara Diapers do have an expiry date. You can keep our baby diapers for up to 3 years without worry. We strongly recommend storing Feather diapers in a cool and dry environment for hygienic reasons.",
      },
    ],
    featureImage: "/PRODUCTS/Baby/supreme-diapers/technology.jpg",
    featureImageTitle1: "Chlorine-Free",
    featureImageTitle2: "Japanese Absorbent Core",
    featureImageDesc: "10s fast Absorption, Keep 12 Hours Dry",
    featureTitle: "Absorbs 15x its weight in liquid",
    featureDesc:
      "Zuvara Premium Care Pants have super-absorbent gel absorbs the liquid to lock it away from your baby’s skin and prevent wetness from transferring to your baby’s bed or clothes.",
    features: [
      "Upgraded softbess for a cloud of touch and skin-friendly pampering",
      "Visibly thin, like it's not worn, the butt feel relaxed",
      "PE film for breathable relief and good mood healing",
      "Highly effective SAP core, instantly absorbent, as dry as the sun",
      "Upgraded bubble waistband for a soft, caressing hug and comfortable wear for your baby",
    ],
    productCloseView: [
      {
        icon: "/icons/inner-core.png",
        label: "Velvety Soft Inner layer",
      },
      {
        icon: "/icons/loop-style-waist.png",
        label: "Loop Style Waist",
      },
      {
        icon: "/icons/disposable-tape.png",
        label: "Disposable Tape",
      },
      {
        icon: "/icons/wetness-indicator.png",
        label: "Wetness Indicator",
      },
    ],
  },

  {
    id: 3,
    name: "Feather Diaper Tape",
    price: { amount: 199, currency: "NPR" },
    slug: "feather-diaper-tape",
    background: "#f7d214",
    foreground: "#000000",
    rating: 4.8,
    reviews: 245,
    video: "/videos/diaper-video2.mp4",
    heroImage: "/PRODUCTS/Baby/premium-diapers/product.png",
    heroImage2: "/PRODUCTS/Baby/premium-diapers/product.png",
    image: "/PRODUCTS/Baby/premium-diapers/product.png",
    category: "Baby Diaper",
    variants: [
      {
        id: 1,
        image: "/PRODUCTS/Baby/premium-diapers/product.png",
        icon: "/icons/nb.png",
        size: "NB",
        weight: "<5",
      },
      {
        id: 2,
        image: "/PRODUCTS/Baby/premium-diapers/product.png",
        icon: "/icons/s.png",
        size: "S",
        weight: "3-6",
      },
    ],
    description:
      "Feather Diaper Tape technology provides a lightweight yet secure fit for newborns.",
    highlights: [
      "Feather-light materials",
      "Magic tape re-fastening system",
      "Navel protection cut for newborns",
      "Breathability optimized for delicate skin",
      "Instant absorption core",
    ],
    reviewsData: [
      {
        id: 1,
        userName: "Maya L.",
        userInitial: "ML",
        rating: 5,
        comment: "Perfect for my newborn. The tape is very secure but gentle.",
        date: "2024-03-05",
      },
    ],
    featureImage: "/PRODUCTS/Baby/premium-diapers/technology.jpg",
    featureTitle: "Reliable Absorption for Everyday Use",
    featureDesc:
      "Zuvara Value Series Diapers absorb up to 10x their weight in liquid (based on diaper weight and total absorbing capacity), keeping your baby dry, fresh, and comfortable all day long. The breathable core locks moisture away, preventing leaks and rashes, perfect for daily wear and active playtime.",
    features: [
      "Wetness Indicator",
      "Soft Inner Core",
      "Stretch Waistband",
      "Disposable Tape",
    ],
    productCloseView: [
      {
        icon: "/icons/inner-core.png",
        label: "Soft Inner Core",
      },
      {
        icon: "/icons/absorption.png",
        label: "10x Absorbency Core",
      },
      {
        icon: "/icons/comfortable.png",
        label: "Stretch Comfort Fit",
      },
      {
        icon: "/icons/disposable-tape.png",
        label: "Easy Disposal Tape",
      },
    ],
  },
  {
    id: 4,
    name: "Value Diapers & Pants",
    price: { amount: 179, currency: "NPR" },
    slug: "value-diapers-pants",
    background: "#f7d214",
    rating: 4.8,
    reviews: 245,
    heroImage: "/PRODUCTS/Baby/value-diapers/product.png",
    heroImage2: "/PRODUCTS/Baby/value-diapers/product.png",
    video: "/videos/diaper-video2.mp4",
    image: "/PRODUCTS/Baby/value-diapers/product.png",
    category: "Baby Diaper",
    variants: [
      {
        id: 1,
        image: "/PRODUCTS/Baby/value-diapers/product.png",
        icon: "/icons/nb.png",
        size: "NB",
      },
      {
        id: 2,
        image: "/PRODUCTS/Baby/value-diapers/product.png",
        icon: "/icons/s.png",
        size: "S",
        weight: "3-6",
      },
      {
        id: 3,
        image: "/PRODUCTS/Baby/value-diapers/product.png",
        icon: "/icons/m.png",
        size: "M",
        weight: "4-10",
      },
      {
        id: 4,
        image: "/PRODUCTS/Baby/value-diapers/product.png",
        icon: "/icons/l.png",
        size: "L",
        weight: "9-14",
      },
      {
        id: 5,
        image: "/PRODUCTS/Baby/value-diapers/product.png",
        icon: "/icons/xl.png",
        size: "XL",
        weight: "13-18",
      },
      {
        id: 6,
        image: "/PRODUCTS/Baby/value-diapers/product.png",
        icon: "/icons/xxl.png",
        size: "XXL",
        weight: "16-21",
      },
    ],
    description: "Get ready for a dry, leak-free adventure ahead!",
    subDesc1:
      "Say goodbye to worries over rashes, heaviness, and leakage with Zuvara Supreme Diapers! Your baby deserves the best, and these diapers deliver unparalleled comfort and protection.",
    subDesc2:
      "Crafted to be the thinnest diapers on the market, Zuvara Supreme Diapers prioritize your baby’s well-being. Dermatologically and Pediatrician tested, they’re gentle on even the most sensitive skin types. Plus, they’re completely chemical-free, with 0% Parabens, Latex, Fragrance, Phthalates, and Chlorine.",
    subDesc3:
      "Breathable pores ensure air circulation, acting as a shield against rashes, while the leak-proof design and 12-hour super absorbency guarantee uninterrupted playtime and sleep. The 360-degree elasticity provides freedom of movement, preventing discomfort during exploration and discovery.",
    subDesc4:
      "Zuvara Supreme Diapers also feature a handy wetness indicator, changing color when it’s time for a change, ensuring your baby stays dry and comfortable. Give your little one the gift of a happy diaper journey with Zuvara, the premium choice for discerning parents in Nepal.",
    highlights: [
      "Quick absorbent core for day-long dryness",
      "Soft inner layer for gentle skin contact",
      "Stretch waistband for better active fit",
      "Wetness indicator for easy diaper checks",
    ],
    faqs: [
      {
        question: "Are Value Diapers safe to be used by my baby?",
        answer:
          "Only pure water-based inks are utilized on our Zuvara Value Diapers, making them completely safe and secure to be used by babies daily. Zuvara Diapers are the softest disposable diapers and breathable pores to ensure air can easily pass through and work as a rash guard for your baby’s safety.",
      },
      {
        question: "How does the wetness indicator work in Value Diapers?",
        answer:
          "Wetness indicators are a convenient way to indicate the time to change your baby’s diaper. Each Diaper comes with 3 wetness indicator lines on them. These lines turn from yellow to blue whenever your baby pees/poops",
      },
      {
        question: "How can I pick the right size of diaper for my baby?",
        answer: `Zuvara Value Series Diapers come in a range of sizes from XS to XXL, designed to fit your baby perfectly based on their weight:
• Newborn (NB): 0–5 kg
• Small (S): 3–6 kg
• Medium (M): 6–10 kg
• Large (L): 9–14 kg
• Extra Large (XL): 13–18 kg
• XX-Large (XXL): 16–21 Kg

Choose the size that best matches your baby’s weight for a snug, comfortable fit and leak-free protection.`,
      },
      {
        question:
          "How to dispose off Value diapers?Is there a wetness indicator?",
        answer:
          "Zuvara diapers come with disposable tape so that you can dispose of the diapers with utmost hygiene and care. The soiled diapers can be conveniently wrapped and sealed using disposable tape.",
      },
      {
        question: "Are Value Diapers safe to be used by my baby?",
        answer:
          "Only pure water-based inks are used on our Zuvara Diapers making it completely safe to be used by babies on daily basis. Zuvara Diaper also has breathable pores to ensure air can easily pass through and act as a rash guard for your baby’s safety.",
      },
      {
        question: "Do Value Diapers have an expiry date?",
        answer:
          "Yes, our Zuvara Diapers do have an expiry date. You can keep our baby diapers for up to 3 years without worry. We strongly recommend storing Feather diapers in a cool and dry environment for hygienic reasons.",
      },
    ],
    featureImage: "/PRODUCTS/Baby/value-diapers/technology.jpg",
    featureTitle: "Reliable Absorption for Everyday Use",
    featureDesc:
      "Zuvara Value Series Diapers absorb up to 10x their weight in liquid (based on diaper weight and total absorbing capacity), keeping your baby dry, fresh, and comfortable all day long. The breathable core locks moisture away, preventing leaks and rashes, perfect for daily wear and active playtime.",
    features: [
      "Wetness Indicator",
      "Soft Inner Core",
      "Stretch Waistband",
      "Disposable Tape",
    ],
    productCloseView: [
      {
        icon: "/icons/inner-core.png",
        label: "Soft Inner Core",
      },
      {
        icon: "/icons/absorption.png",
        label: "10x Absorbency Core",
      },
      {
        icon: "/icons/comfortable.png",
        label: "Stretch Comfort Fit",
      },
      {
        icon: "/icons/disposable-tape.png",
        label: "Easy Disposal Tape",
      },
    ],
  },
  {
    id: 5,
    name: "Moisturising Tissue",
    price: { amount: 49, currency: "NPR" },
    slug: "moisturising-tissue",
    rating: 4.6,
    reviews: 156,
    heroImage: "/PRODUCTS/Baby/tissue/product.png",
    heroImage2: "/PRODUCTS/Baby/tissue/product.png",
    video: "/videos/diaper-video2.mp4",
    image: "/PRODUCTS/Baby/tissue/product.png",
    category: "Cotton Tissue",
    description:
      "Our Moisturising Tissue is infused with natural aloe and vitamin E to soothe even the most sensitive skin. ",
    highlights: [
      "Each wipe is made with a touch of cotton for softness",
      "Hypoallergenic and fragrance free",
      "Formulated without alcohol, parabens or phthalates.",
      "Gentle wipes for newborns and up",
      "Safe for cleaning full body including bottom, hand, and face",
      "Reclosable packs keep wipes moist",
      "Satisfaction guarantee: We’re proud of our products",
      "Designed with love for your loved one",
    ],
    reviewsData: [
      {
        id: 1,
        userName: "Anita P.",
        userInitial: "AP",
        rating: 5,
        comment: "So soft on my baby's face. Doesn't cause any redness.",
        date: "2024-03-20",
      },
    ],
    faqs: [
      {
        question: "What are Zuvara Baby Cotton Tissue?",
        answer:
          "Zuvara Baby Cotton Tissue is a premium-quality product made from soft and gentle cotton, designed specifically for the delicate skin of babies. It offers a luxurious exfoliating experience without causing harm and ensures thorough cleansing while preventing irritation. These tissues are multipurpose, serving as makeup removers, facial cleansers, bath towels, washcloths, and more, making them essential for baby’s skin care and hygiene.",
      },
      {
        question: "Are Zuvara Cotton Tissue hypoallergenic and fragrance free?",
        answer:
          "Yes, Zuvara Baby Cotton Tissue is hypoallergenic and fragrance-free, making it safe and gentle for use on delicate baby skin.",
      },
      {
        question: "How do Zuvara Baby Cotton Tissue clean?",
        answer:
          "Zuvara Baby Cotton Tissue effectively cleans by utilizing its soft and absorbent cotton material to gently lift away dirt, impurities, and excess oils from the skin’s surface. Its high-quality construction ensures a thorough yet gentle cleansing experience, leaving the skin feeling fresh, clean, and rejuvenated.",
      },
      {
        question: "Do Zuvara Tissue have an expiration date?",
        answer:
          "Like all Cotton Tissue, our Baby Cotton Tissue have an expiration date. We recommend opening within 24 months of the production date and using the pack within one month of opening. The production date and expiration date is printed on the back of the pack.",
      },
      {
        question: "Why should I use Zuvara Tissue on my new born baby’s skin?",
        answer:
          "In short, Zuvara Baby Cotton Tissue is ideal for your newborn because it’s gentle, hypoallergenic, fragrance-free, and prevents irritation. Its soft texture ensures effective yet comfortable cleansing, and its versatility makes it a handy addition to your baby care routine.",
      },
      {
        question: "Are Zuvara Tissue reusable?",
        answer:
          "Zuvara Tissue is typically designed for single-use purposes to maintain hygiene and prevent the spread of germs. While some may opt to reuse them, it’s essential to consider hygiene factors and potential contamination risks, especially for baby care. If you’re looking for reusable options, consider using washable and reusable cotton cloths specifically designed for baby care routines. Always prioritize hygiene and safety when caring for your baby’s delicate skin.",
      },
    ],
    productCloseView: [
      {
        icon: "/icons/natural.png",
        label: "Natural Cotton Base",
      },
      {
        icon: "/icons/fabric.png",
        label: "Soft Textured Sheet",
      },
      {
        icon: "/icons/trust.png",
        label: "Hypoallergenic Formula",
      },
      {
        icon: "/icons/clothes.png",
        label: "Multipurpose Daily Use",
      },
    ],
  },
  {
    id: 6,
    name: "Value Wet Wipes",
    price: { amount: 35, currency: "NPR" },
    slug: "value-wet-wipes",
    rating: 4.6,
    reviews: 156,
    heroImage: "/PRODUCTS/Baby/wet-wipes/product.png",
    heroImage2: "/PRODUCTS/Baby/wet-wipes/product2.jpg",
    video: "/videos/diaper-video2.mp4",
    image: "/PRODUCTS/Baby/wet-wipes/product.png",
    category: "Wipes",
    description: "Wipes that are skin friendly !!",
    subDesc1:
      "Water wipes Natural & Pure Tissue with soft and silky feel. Made with purified water, that contains 99% water. Each wipe is made with a touch of cotton for softness.Hypoallergenic and Fragrance free. Formulated without alcohol, parabens or phthalates. Gentle wipes for newborn and up.",
    subDesc2:
      "Safe for cleaning full body including bottom, hand, and face. Enclosable packs keep wipes moist. Satisfaction guarantee.",
    highlights: [
      "Made with purified water, container 99% water",
      "Each wipe is made with a touch of cotton for softness",
      "Hypoallergenic and fragrance free",
      "Formulated without alcohol, parabens or phthalates.",
      "Gentle wipes for newborns and up",
      "Safe for cleaning full body including bottom, hand, and face",
      "Reclosable packs keep wipes moist",
      "Satisfaction guarantee: We’re proud of our products",
      "Designed with love for your loved one",
    ],
    reviewsData: [
      {
        id: 1,
        userName: "Sanjay M.",
        userInitial: "SM",
        rating: 4,
        comment: "Good quality wipes. Not too thin and stay moist.",
        date: "2024-03-25",
      },
    ],
    faqs: [
      {
        question: "What are Zuvara water Wipes?",
        answer:
          "Zuvara Wipes are the world’s purest baby water wipes. Our baby wet wipes contain 99.9% water and are safe to use on delicate newborn babies’ skin.",
      },
      {
        question: "Are Zuvara Wipes hypoallergenic and fragrance free?",
        answer:
          "Yes. Our baby water wipes don’t contain any artificial fragrance and are considered hypoallergenic.",
      },
      {
        question: "How do Zuvara Wipes clean?",
        answer:
          "Our baby water wipes contain water. Water is nature’s natural cleanser and moisturizer which is why healthcare professionals recommend cotton wool and water for baby wipes. It also helps to maintain good skin condition.",
      },
      {
        question: "Do Zuvara Wipes have an expiration date?",
        answer:
          "Like all wet wipes, our water wipes have an expiration date. We recommend opening within 24 months of the production date and using the pack within one month of opening. The production date and expiration date is printed on the back of the pack.",
      },
      {
        question: "Why should I use Zuvara Wipes on my new born baby’s skin?",
        answer:
          "When a baby is born, its skin is much thinner than an adult’s. Because of this, healthcare professionals recommend you use cotton wool and water OR Water Wipes baby water wipes. Our baby water wipes are a fresh product that contain 99.9% water so they are suitable on newborn babies’ skin.",
      },
      {
        question: "Are Zuvara Wipes reusable?",
        answer:
          "No, Zuvara Wipes are not reusable and should be disposed of correctly after use.",
      },
    ],
    productCloseView: [
      {
        icon: "/icons/nature.png",
        label: "99.9% Water Base",
      },
      {
        icon: "/icons/fabric.png",
        label: "Gentle Wipe Fabric",
      },
      {
        icon: "/icons/trusted-icon.png",
        label: "Fragrance-Free Care",
      },
      {
        icon: "/icons/comfortable.png",
        label: "Soft Daily Comfort",
      },
    ],
  },
];

/**
 * Final export:
 * ✅ every product now has every field (via normalizeProduct)
 */
const PRODUCTS_WITH_DEDICATED_IMAGES = new Set([
  "premium-diapers-pants",
  "supreme-diapers",

  "value-diapers-pants",
  "moisturising-tissue",
  "value-wet-wipes",
]);

export const babyCareProducts: Product[] = rawBabyCareProducts
  .filter((product) => PRODUCTS_WITH_DEDICATED_IMAGES.has(product.slug))
  .map(normalizeProduct);
