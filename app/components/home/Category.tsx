"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Smile,
  Baby,
  Droplet,
  Zap,
  Sun,
  Wind,
  Sparkles,
} from "lucide-react";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Baby Care",
      description:
        "Gentle and safe products designed for your precious little one",
      icon: Smile,
      color: "text-foreground",
      bgColor: "bg-zinc-50",
      borderColor: "border-zinc-200",
      link: "/shop/baby-care",
    },
    {
      id: 2,
      name: "Skincare",
      description: "Premium skincare solutions for all skin types",
      icon: Droplet,
      color: "text-foreground",
      bgColor: "bg-zinc-50",
      borderColor: "border-zinc-200",
      link: "/shop/skincare",
    },
    {
      id: 3,
      name: "Personal Care",
      description: "Complete personal care range for daily use",
      icon: Heart,
      color: "text-foreground",
      bgColor: "bg-zinc-50",
      borderColor: "border-zinc-200",
      link: "/shop/personal-care",
    },
    {
      id: 4,
      name: "Hair Care",
      description: "Specialized hair care treatments for all hair types",
      icon: Sparkles,
      color: "text-foreground",
      bgColor: "bg-zinc-50",
      borderColor: "border-zinc-200",
      link: "/shop/hair-care",
    },
    {
      id: 5,
      name: "Wellness",
      description: "Health and wellness products for daily wellness",
      icon: Zap,
      color: "text-foreground",
      bgColor: "bg-zinc-50",
      borderColor: "border-zinc-200",
      link: "/shop/wellness",
    },
    {
      id: 6,
      name: "Organic",
      description: "100% organic and natural products",
      icon: Sun,
      color: "text-foreground",
      bgColor: "bg-zinc-50",
      borderColor: "border-zinc-200",
      link: "/shop/organic",
    },
    {
      id: 7,
      name: "Sensitive",
      description: "Hypoallergenic products for sensitive skin",
      icon: Wind,
      color: "text-foreground",
      bgColor: "bg-zinc-50",
      borderColor: "border-zinc-200",
      link: "/shop/sensitive",
    },
    {
      id: 8,
      name: "Premium",
      description: "Luxury and premium collection",
      icon: Baby,
      color: "text-foreground",
      bgColor: "bg-zinc-50",
      borderColor: "border-zinc-200",
      link: "/shop/premium",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-5xl">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-montserrat">
            Explore our Category
          </h2>
          <p>We&apos;re here to help you find the perfect products for your needs.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} href={category.link}>
                <div
                  className={`
                    group ${category.bgColor} rounded-lg p-5 lg:p-6
                    border border-zinc-200 transition-all duration-300
                    hover:border-foreground hover:bg-foreground/5 cursor-pointer text-center
                  `}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <IconComponent size={32} className={category.color} />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-sm lg:text-base font-semibold text-zinc-900 mb-2">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs lg:text-sm text-zinc-600 line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
