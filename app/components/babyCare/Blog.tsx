"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Button from "../common-ui/Button";
import SectionHeading from "../common-ui/SectionHeading";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Understanding Women's Menstrual Health: Period Problems & Solutions",
      excerpt:
        "Learn about common period problems, their impact on daily life, and how proper care and products can make a difference.",
      category: "Women's Health",
      image: "/blogs/period.png",
      date: "January 15, 2026",
      author: "Health Expert",
      readTime: "5 min read",
      link: "/blog/menstrual-health",
    },
    {
      id: 2,
      title: "Baby Care Essentials: What Every New Parent Should Know",
      excerpt:
        "Discover the complete guide to baby care, from skincare routines to diaper selection and maintaining your baby's comfort.",
      category: "Baby Care",
      image: "/blogs/period.png",
      date: "January 12, 2026",
      author: "Pediatrician",
      readTime: "7 min read",
      link: "/blog/baby-care-guide",
    },
    {
      id: 3,
      title: "Neglecting Baby Care: Long-term Consequences & Prevention",
      excerpt:
        "Understanding what happens when baby care is overlooked and how it affects physical and emotional development.",
      category: "Awareness",
      image: "/blogs/period2.png",
      date: "January 10, 2026",
      author: "Child Development Expert",
      readTime: "8 min read",
      link: "/blog/care-consequences",
    },
    {
      id: 4,
      title: "Postpartum Care for Mothers: Health, Hygiene & Recovery",
      excerpt:
        "Essential guide for postpartum mothers covering physical recovery, hygiene practices, and emotional wellbeing.",
      category: "Postpartum Health",
      image: "/blogs/baby.png",
      date: "January 8, 2026",
      author: "Midwife",
      readTime: "6 min read",
      link: "/blog/postpartum-guide",
    },
  ];

  const categoryColors: Record<string, string> = {
    "Women's Health": "bg-pink-100 text-pink-700",
    "Baby Care": "bg-blue-100 text-blue-700",
    Awareness: "bg-red-100 text-red-700",
    "Postpartum Health": "bg-purple-100 text-purple-700",
    "Baby Skincare": "bg-green-100 text-green-700",
  };

  return (
    <section className="py-4 lg:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-4 lg:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0 justify-between item-start md:items-center ">
          <SectionHeading
            title="Expert Insights on"
            highlight="Health & Care"
            description="Stay informed about women's health, baby care essentials, and the importance of proper hygiene and care practices."
          />
          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button link="/blog" content="View All Posts" />
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden border border-transparent hover:border-[#8cd700] transition-all duration-300 flex flex-col h-full bg-white"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden bg-zinc-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:transition-all hover:duration-500"
                />
              </div>

              {/* Post Content */}
              <div className="p-6 flex flex-col grow">
                {/* Category Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit ${
                    categoryColors[post.category] || "bg-zinc-100 text-zinc-700"
                  }`}
                >
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-[#8cd700] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-zinc-600 mb-4 line-clamp-2 grow">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-zinc-500 border-t border-zinc-100 pt-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#8cd700]" />
                    <span>
                      {post.date.split(" ")[1]} {post.date.split(" ")[2]}
                    </span>
                  </div>
                  <span className="text-zinc-300">•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More Link */}
                <Link href={post.link}>
                  <div className="inline-flex items-center gap-2 text-[#8cd700] font-semibold hover:gap-3 transition-all cursor-pointer group/link">
                    Read More
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
