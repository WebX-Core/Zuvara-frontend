"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
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

        {/* Blog Grid - Using a modern 3-column layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white rounded-3xl border border-zinc-100 hover:border-emerald-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-4 block">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-semibold text-zinc-900 mb-4 leading-tight group-hover:text-emerald-900 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-zinc-500 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                {/* Footer Meta */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-100">
                  <div className="flex items-center gap-4 text-[11px] text-zinc-400">
                    <div className="flex items-center gap-1"><Calendar size={14} /> {post.date}</div>
                    <div className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</div>
                  </div>
                  <Link href={post.link} className="size-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;