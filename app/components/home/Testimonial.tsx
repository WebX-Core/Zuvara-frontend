"use client";

import { Icon } from "@iconify-icon/react";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Kathmandu",
      text: "Zuvara products have been a game-changer for my baby's sensitive skin. I've tried many brands, but nothing compares to the natural ingredients and gentle care.",
      rating: 5,
    },
    {
      id: 2,
      name: "Anita Poudel",
      location: "Pokhara",
      text: "My daughter has extremely sensitive skin, and Zuvara is the only brand that doesn't cause any irritation. Highly recommended for all Nepali mothers!",
      rating: 5,
    },
    {
      id: 3,
      name: "Sneha Gurung",
      location: "Bhaktapur",
      text: "Affordable, trustworthy, and effective. I love that Zuvara is a Nepali brand that understands our needs and delivers quality products.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Icon
        key={i}
        icon="mdi:star"
        width="16"
        height="16"
        className={i < rating ? "text-[#8cd700]" : "text-zinc-300"}
      />
    ));
  };

  return (
    <section className="py-4 lg:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-between items-center gap-4 flex-col lg:flex-row"
        >
          <div className="">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground font-poppins mb-2">
              What <span className="text-[#8cd700] italic">Nepali Mothers </span>Say
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Real reviews from real mothers who trust Zuvara
            </p>
          </div>
          {/* Google Review Button */}
          <div className="flex justify-center">
            <Button
              content="Read Reviews on Google"
              link="https://www.google.com/search?q=zuvara"
              icon="mdi:google"
            />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-zinc-200 hover:border-[#8cd700] bg-zinc-50 hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-zinc-500 mb-6 leading-relaxed text-lg italic lg:text-base">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div>
                <h4 className="font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-zinc-600">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
