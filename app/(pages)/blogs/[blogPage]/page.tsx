"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { blogLists } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSection } from "@/app/providers/SectionProvider";
import { ArrowLeft, Calendar, User, Tag, ChevronRight } from "lucide-react";
import DOMPurify from "dompurify";

const BlogDetailPage = () => {
  const { blogPage } = useParams();
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  const [blog, setBlog] = useState<(typeof blogLists)[0] | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<typeof blogLists>([]);

  useEffect(() => {
    const currentBlog = blogLists.find((b) => b.slug === blogPage);
    if (currentBlog) {
      setBlog(currentBlog);
      // Filter related blogs (same category or just other blogs excluding current)
      const related = blogLists
        .filter((b) => b.id !== currentBlog.id)
        .slice(0, 3);
      setRelatedBlogs(related);
    }
  }, [blogPage]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Link href="/blogs" className="text-foreground hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:mt-6">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="absolute inset-0 flex items-center pt-6 pb-4 lg:pt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-3xl h-full flex flex-col justify-between"
            >
              <nav className="flex items-center gap-2 text-white/80 text-sm lg:text-base font-medium">
                <Link href="/" className="">
                  Home
                </Link>
                <ChevronRight size={14} />
                <Link href="/blogs" className="">
                  Blogs
                </Link>
                <ChevronRight size={14} />
                <span
                  className={cn(
                    "truncate max-w-[200px] lg:max-w-none",
                    isPersonal ? "text-personalCare" : "text-babyCare",
                  )}
                >
                  {blog.title}
                </span>
              </nav>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md text-white",
                      isPersonal
                        ? "bg-personalCare/70 border-personalCare/30"
                        : "bg-babyCare/70 border-babyCare/30",
                    )}
                  >
                    {blog.category}
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  {blog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-3">
                    <div className="size-10 lg:size-12 rounded-full overflow-hidden border-2 border-white/50 bg-white/10 backdrop-blur-sm">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${blog.author}`}
                        alt={blog.author}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold opacity-60">
                        Written BY
                      </span>
                      <span className="font-bold text-sm lg:text-base">
                        {blog.author}
                      </span>
                    </div>
                  </div>

                  <div className="h-10 w-px bg-white/20 hidden sm:block" />

                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest font-bold opacity-60">
                      Published ON
                    </span>
                    <span className="font-bold text-sm lg:text-base">
                      {blog.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.content) || "",
              }}
              className={cn(
                "text-zinc-700 leading-relaxed text-lg lg:text-xl",
                // Heading 2 styles
                "[&_h2]:text-3xl [&_h2]:lg:text-4xl [&_h2]:font-extrabold [&_h2]:mt-8 lg:[&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:leading-tight",
                isPersonal
                  ? "[&_h2]:text-personalCare"
                  : "[&_h2]:text-foreground",
                // Paragraph styles
                "[&_p]:mb-6",
                // List styles
                "[&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6",
                "[&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6",
                "[&_li]:mb-2",
                // Bold text
                "[&_strong]:font-bold",
                isPersonal
                  ? "[&_strong]:text-personalCare"
                  : "[&_strong]:text-foreground",
              )}
            />
          </motion.div>

          <footer className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-end gap-6">
            {/* <div className="flex items-center gap-3">
              <span className="text-zinc-500 font-bold uppercase text-xs tracking-widest">
                Share this post:
              </span>
              <div className="flex gap-2">
                {["Facebook", "Twitter", "Linkedin"].map((platform) => (
                  <button
                    key={platform}
                    className="size-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all"
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="size-5 bg-zinc-400 rounded-sm" />
                  </button>
                ))}
              </div>
            </div> */}

            <Link
              href="/blogs"
              className={cn(
                "group flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all",
                isPersonal
                  ? "bg-personalCare hover:bg-personalCare/70 text-white!"
                  : "bg-foreground text-white! hover:bg-babyCare",
              )}
            >
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
              All Articles
            </Link>
          </footer>
        </div>
      </section>

      {/* Related Blogs Section */}
      <section
        className={cn(
          "py-8 lg:py-16",
          isPersonal ? "bg-personalCare/5" : "bg-babyCare/10",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
                Recommended Stories
              </h2>
            </div>
            <Link
              href="/blogs"
              className="hidden sm:flex items-center gap-2 font-bold text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              View More
              <ArrowLeft className="rotate-180" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/blogs/${item.slug}`} className="block space-y-4">
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-zinc-200 border border-zinc-100 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={cn(
                          "px-3 py-1 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-wider text-zinc-900",
                          isPersonal
                            ? "bg-personalCare text-white"
                            : "bg-babyCare",
                        )}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3
                      className={cn(
                        "text-xl font-bold text-zinc-900 line-clamp-2 leading-[1.3] transition-colors",
                        isPersonal
                          ? "group-hover:text-personalCare"
                          : "group-hover:text-foreground",
                      )}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium">
                      <span>{item.author}</span>
                      <span className="size-1 rounded-full bg-zinc-300" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
