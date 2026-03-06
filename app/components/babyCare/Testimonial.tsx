"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeading from "../common-ui/SectionHeading";
import CrawlingBaby from "../shared/CrawlingBaby";
import Image from "next/image";

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
    <section className="relative py-0 bg-babyCare overflow-hidden">
      {/* Top Wave */}
      <div className=" w-full z-20000 pointer-events-none -mt-1">
        <Image
          src="/new/white-wave.svg"
          alt=""
          width={1920}
          height={100}
          className="w-full h-auto object-cover rotate-x-180"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <SectionHeading
            title="Hear from Our Happy Parents"
            highlight=""
            description="Discover why Nepali parents trust Zuvara for their baby's care, with heartfelt testimonials that speak to our commitment to quality and safety."
            align="center"
          />
        </motion.div>

        {/* Testimonials */}
        <div className="w-7xl mx-auto flex gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="flex flex-col items-start">
              {/* Speech Bubble */}
              <div className="relative bg-white rounded-2xl p-6 shadow-md text-left max-w-sm">
                <h4 className="font-semibold mb-2 text-gray-800">
                  {item.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>

                {/* Bubble Tail */}
                <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white rotate-45"></div>
              </div>

              {/* Profile Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover mt-6 border-4 border-white shadow-md"
              />

              {/* Location */}
              <p className="mt-3 text-foreground font-medium">{item.location}</p>

              {/* Stars */}
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    icon="mdi:star"
                    className="text-yellow-500"
                    width={18}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className=" w-full z-20000 pointer-events-none -mb-1">
        <Image
          src="/new/white-wave.svg"
          alt=""
          width={1920}
          height={100}
          className="w-full h-auto object-cover rotate-y-180"
          priority
        />
      </div>
    </section>
  );
};

export default Testimonials;
