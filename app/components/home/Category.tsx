"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Baby Care",
      description:
        "Gentle and safe products designed for your precious little one. Everything your baby needs for comfort and care.",
      image: "/categories/infant.png",
      link: "/shop/baby-care",
    },
    {
      id: 2,
      name: "Skincare",
      description:
        "Premium skincare solutions for all skin types. Nourish and protect delicate baby skin.",
      image: "/categories/lotion.png",
      link: "/shop/skincare",
    },
    {
      id: 3,
      name: "Diapers",
      description:
        "Premium diapers and essential baby products. Comfort and protection in every use.",
      image: "/categories/diaper3.png",
      link: "/shop/diapers",
    },
    {
      id: 4,
      name: "Strollers & Gear",
      description:
        "High-quality strollers and baby gear. Safe, durable, and designed for modern parents.",
      image: "/categories/stroller.png",

      link: "/shop/strollers",
    },
  ];

  return (
    <section className="py-4 lg:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground font-poppins mb-4">
            Explore our <span className="text-[#8cd700] italic">Categories</span>
          </h2>
          <p className="text-md text-zinc-600 max-w-2xl">
            Discover our curated selection of premium baby products designed to
            support every stage of your parenting journey.
          </p>
        </motion.div>

        {/* Categories Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden border border-zinc-200 transition-all duration-300 hover:shadow-md hover:border-[#8cd700] bg-zinc-50"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 lg:h-64 overflow-hidden bg-zinc-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 hover:transition-all hover:duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-2 lg:p-4">
                {/* Title */}
                <h3 className="text-2xl lg:text-xl font-bold text-[#8cd700] font-montserrat mb-3">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 mb-6 line-clamp-2">
                  {category.description}
                </p>

                {/* Explore Button */}
                <button
                  type="submit"
                  className="bg-foreground/10 border border-zinc-300 hover:bg-zinc-50 text-foreground hover:text-[#8cd700] font-semibold px-6 py-2 rounded-full transition-all text-sm flex items-center gap-2"
                >
                  View Products
                  <ArrowRight size={16} />
                </button>
                {/* <Button content="Explore Category" link={category.link} /> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
