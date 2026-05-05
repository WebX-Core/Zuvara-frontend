"use client";

import { useSection } from "@/app/providers/SectionProvider";
import { blogLists } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SectionIntro, { sectionIntroSpacing } from "@/app/components/common-ui/SectionIntro";

import Link from "next/link";

const BlogList = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  return (
    <section className="container mx-auto py-4 lg:py-8 px-4 sm:px-6 lg:px-8 w-[90%]">
      <div className={sectionIntroSpacing}>
        <SectionIntro
          align="center"
          className={cn(
            "mx-auto max-w-3xl py-4",
            isPersonal ? "text-personalCare" : "text-foreground",
          )}
          eyebrow={<p className="text-sm font-semibold">Our Articles</p>}
          title={
            <>
              Explore Our Expert
              <span className="ml-2 font-light italic">Suggestions</span>
            </>
          }
          description="We post the important articles daily so that you can learn and implement them for your babies life."
          titleClassName="text-2xl font-semibold leading-[0.98] lg:text-5xl"
          descriptionClassName="text-sm font-medium leading-relaxed md:text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {blogLists.map((blog, index) => {
          const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
            blog.author,
          )}&top=straight01&hairColor=724133&facialHairProbability=0&mouth=smile&clothing=blazerAndShirt`;

          return (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blogs/${blog.slug}`} className="block h-full">
                {/* Image Container */}
                <div className="relative aspect-16/10 mb-5 overflow-hidden rounded-3xl bg-zinc-100 shadow-sm">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "text-xs font-bold tracking-wider uppercase",
                        isPersonal ? "text-personalCare" : "text-foreground",
                      )}
                    >
                      {blog.category}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "text-xl font-semibold leading-tight transition-colors",
                      isPersonal
                        ? "text-personalCare group-hover:underline"
                        : "text-foreground  group-hover:underline",
                    )}
                  >
                    {blog.title}
                  </h3>
                  <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                    {blog.desc}
                  </p>

                  {/* Author Section */}
                  <div className="pt-4 flex items-center gap-3">
                    <div className="size-8 rounded-full bg-zinc-200 overflow-hidden relative border border-zinc-100">
                      <img
                        src={avatarUrl}
                        alt={blog.author}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="font-bold text-zinc-900">
                        {blog.author}
                      </span>
                      <span className="text-zinc-400">•</span>
                      <span className="text-zinc-500">{blog.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogList;
