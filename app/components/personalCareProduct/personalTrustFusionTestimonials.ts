export type PersonalTrustFusionTestimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
  badge: string;
  time: string;
};

export const personalTrustFusionTestimonials: PersonalTrustFusionTestimonial[] =
  [
    {
      id: 1,
      name: "Nina R.",
      location: "Kathmandu",
      text: "I feel secure even on long days. It is soft, breathable, and genuinely dependable.",
      rating: 5,
      image: "/images/personalCare/period-panties.png",
      badge: "Verified Customer",
      time: "2 weeks ago",
    },
    {
      id: 2,
      name: "Priya T.",
      location: "Pokhara",
      text: "No bunching, no stress. It stays comfortable through work, travel, and sleep.",
      rating: 5,
      image: "/images/personalCare/sanitary-pad.png",
      badge: "Daily Use",
      time: "1 month ago",
    },
    {
      id: 3,
      name: "Anusha K.",
      location: "Lalitpur",
      text: "The fit feels better, the protection lasts, and I can move through the day with more confidence.",
      rating: 5,
      image: "/images/personalCare/period-panties.png",
      badge: "All-Day Comfort",
      time: "5 days ago",
    },
  ];
