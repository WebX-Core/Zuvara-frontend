export type TrustFusionTestimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
  badge: string;
  time: string;
};

export const trustFusionTestimonials: TrustFusionTestimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Kathmandu",
    text: "Finally, a night where I didn't wake up to a leak. Zuvara feels like a soft hug that works.",
    rating: 5,
    image: "/images/baby/baby15.png",
    badge: "Verified Parent",
    time: "2 weeks ago",
  },
  {
    id: 2,
    name: "Aarati P.",
    location: "Pokhara",
    text: "The fit feels softer, the dryness lasts longer, and bedtime feels much less stressful now.",
    rating: 5,
    image: "/images/baby/baby15.png",
    badge: "Overnight Care",
    time: "1 month ago",
  },
  {
    id: 3,
    name: "Nima T.",
    location: "Lalitpur",
    text: "Comfort, softness, and reliable protection in one. It feels more premium than what we used before.",
    rating: 5,
    image: "/images/baby/baby15.png",
    badge: "Daily Use",
    time: "6 days ago",
  },
];
