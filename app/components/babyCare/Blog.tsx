"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";
import SectionHeading from "../common-ui/SectionHeading";

const Blog = () => {
  const blogPosts = [
    {
      id: 2,
      title: "Baby Care Essentials: What Every New Parent Should Know",
      excerpt: "A complete guide to baby care, from skincare routines to diaper selection and maintaining your baby's comfort.",
      category: "Baby Care",
      image: "/blogs/period.png",
      date: "Jan 12, 2026",
      readTime: "7 min read",
      link: "/blog/baby-care-guide",
    },
    {
      id: 3,
      title: "Neglecting Baby Care: Long-term Consequences & Prevention",
      excerpt: "Understanding what happens when baby care is overlooked and how it affects physical and emotional development.",
      category: "Awareness",
      image: "/blogs/period2.png",
      date: "Jan 10, 2026",
      readTime: "8 min read",
      link: "/blog/care-consequences",
    },
    {
      id: 4,
      title: "Postpartum Care: Health, Hygiene & Recovery",
      excerpt: "Essential guide for mothers covering physical recovery, hygiene practices, and emotional wellbeing.",
      category: "Postpartum",
      image: "/blogs/baby.png",
      date: "Jan 8, 2026",
      readTime: "6 min read",
      link: "/blog/postpartum-guide",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-[90%]">
        {/* Header - Aligned for clean visual flow */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionHeading
              title="Insights for"
              highlight="Modern Parents"
              description="Expert-led advice on health, hygiene, and daily care."
            />
          </div>
          <Button link="/blogs" content="Read All Articles" className="text-white!" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={post.link} className="block h-full">
                {/* Image Container */}
                <div className="relative aspect-16/10 mb-5 overflow-hidden rounded-3xl bg-zinc-100 shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <span className="text-xs font-bold tracking-wider uppercase text-foreground block">
                    {post.category}
                  </span>

                  <h3 className="text-xl font-bold text-zinc-900 leading-tight transition-colors group-hover:text-foreground">
                    {post.title}
                  </h3>

                  <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 flex items-center gap-1.5 text-xs">
                    <span className="text-zinc-500">{post.date}</span>
                    <span className="text-zinc-400">&bull;</span>
                    <span className="text-zinc-500">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
