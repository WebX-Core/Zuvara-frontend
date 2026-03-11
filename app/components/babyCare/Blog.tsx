"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";
import { blogLists } from "@/constants";
import { wave32Svg } from "@/constants/svgs";

const Blog = () => {
  const blogPosts = blogLists.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-babyCare/20 py-16 lg:py-32">
       <div
              className="absolute -bottom-1 left-1/2 z-20 w-screen  -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
              dangerouslySetInnerHTML={{ __html: wave32Svg.markup }}
            />
      <div className="container max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col gap-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full border border-foreground/20 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground mb-5">
              Parenting Journal
            </p>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight lg:text-5xl">
              Insights for
              <span className=" font-light italic"> Modern Parents</span>
            </h2>
            <p className="text-sm lg:text-lg text-foreground mt-5 font-medium leading-relaxed">
              Real experiences from families who trust Zuvara for comfort, care,
              and gentle everyday protection.
            </p>
          </div>
          <Button
            link="/blogs"
            content="Read All Articles"
            className="text-white!"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Link href={`/blogs/${post.slug}`} className="block h-full">
                <article className="h-full">
                  <div className="relative mb-5 aspect-16/10 overflow-hidden rounded-3xl bg-zinc-100 shadow-sm">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-3">
                    <span className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {post.category}
                    </span>

                    <h3 className="text-xl font-semibold leading-tight text-foreground transition-colors group-hover:underline">
                      {post.title}
                    </h3>

                    <p className="line-clamp-2 text-sm leading-relaxed text-zinc-500">
                      {post.desc}
                    </p>

                    <div className="flex items-center gap-3 pt-4">
                      <div className="relative size-8 overflow-hidden rounded-full border border-zinc-100 bg-zinc-200">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="font-bold text-zinc-900">
                          {post.author}
                        </span>
                        <span className="text-zinc-400">&bull;</span>
                        <span className="text-zinc-500">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
