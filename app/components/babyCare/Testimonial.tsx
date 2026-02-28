"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeading from "../common-ui/SectionHeading";
import CrawlingBaby from "../shared/CrawlingBaby";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Kathmandu",
      text: "Zuvara products have been a game-changer for my baby's sensitive skin. I've tried many brands, but nothing compares to the natural ingredients.",
      rating: 5,
      image: "/images/parent/parent2.png",
    },
    {
      id: 2,
      name: "Anita Poudel",
      location: "Pokhara",
      text: "My daughter has extremely sensitive skin, and Zuvara is the only brand that doesn't cause any irritation. Highly recommended for all Nepali mothers!",
      rating: 5,
      image: "/images/parent/parent.png",
    },
    {
      id: 3,
      name: "Sneha Gurung",
      location: "Bhaktapur",
      text: "Affordable, trustworthy, and effective. I love that Zuvara is a Nepali brand that understands our needs and delivers quality products.",
      rating: 5,
      image: "/images/parent/parent2.png",
    },
  ];

  // Container variants for staggering the entrance of cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen bg-linear-to-b from-babyCare/90 via-babyCare/80 to-babyCare/60 py-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8cd700]/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <header className="mb-16">
          <SectionHeading
            title="What"
            highlight=" Mothers Say"
            description="Real reviews from real mothers who trust Zuvara for their little ones."
            align="center"
          />
        </header>

        {/* The Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-white/95 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border border-white/50"
            >
              {/* Header: Image & Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative size-16 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-full object-cover rounded-2xl ring-2 ring-[#8cd700]/20"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#8cd700] rounded-full p-1 border-2 border-white">
                    <Icon icon="mdi:check-decagram" className="text-white" width={14} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg leading-tight">{item.name}</h4>
                  <p className="text-sm text-zinc-500 font-medium">{item.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    icon="mdi:star"
                    className={i < item.rating ? "text-[#8cd700]" : "text-zinc-200"}
                    width={18}
                  />
                ))}
              </div>

              {/* Body */}
              <div className="relative grow">
                <Icon 
                  icon="ri:double-quotes-l" 
                  className="absolute -top-2 -left-2 text-[#8cd700]/10" 
                  width={40} 
                />
                <p className="text-zinc-700 leading-relaxed italic relative z-10">
                  {item.text}
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#8cd700]">Verified Purchase</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className=" ">
          <CrawlingBaby />
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;