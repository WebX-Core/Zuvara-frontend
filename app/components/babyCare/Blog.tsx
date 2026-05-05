"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../common-ui/Button";
import SectionIntro, { sectionIntroSpacing } from "../common-ui/SectionIntro";
import { blogLists } from "@/constants";
import { wave32Svg } from "@/constants/svgs";
import { Section, Container } from "@/app/components/layout";
import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const blogPosts = blogLists.slice(0, 3);

  return (
    <Section
      size="md"
      className="relative overflow-hidden bg-babyCare/20 pt-6  pb-8 md:pt-4 md:pb-12 lg:pb-48"
    >
      <div
        className="absolute -bottom-2 left-1/2 z-20 w-screen  -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: wave32Svg.markup }}
      />
      <style>{`
        .blog-swiper .swiper-pagination {
          position: static;
          margin-top: 1.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        .blog-swiper .swiper-pagination-bullet {
          width: 0.7rem;
          height: 0.625rem;
          border-radius: 9999px;
          background: rgba(132, 170, 165, 0.35);
          opacity: 1;
          transition: width 0.3s, background 0.3s;
          margin: 0 !important;
        }
        .blog-swiper .swiper-pagination-bullet-active {
          width: 2.8rem;
          background: #45685e;
        }
        .blog-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
      <Container>
        <div
          className={`${sectionIntroSpacing} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}
        >
          <SectionIntro
            className="max-w-2xl"
            title={
              <>
                Insights for
                <span className="font-light italic"> Modern Parents</span>
              </>
            }
            description="Real experiences from families who trust Zuvara for comfort, care, and gentle everyday protection."
            titleClassName="text-2xl font-semibold tracking-tight text-foreground lg:text-5xl"
            descriptionClassName="text-sm font-medium leading-relaxed text-foreground lg:text-lg"
          />
          <div className=" items-center justify-center py-4 pt-6 hidden  sm:flex">
            <Button
              link="/blogs"
              content="Read All Articles"
              className="text-white! rounded-full"
            />
          </div>
        </div>
        <div className="block md:hidden">
          <Swiper
            className="blog-swiper block md:hidden"
            modules={[Autoplay, Pagination, A11y]}
            slidesPerView={1.08}
            spaceBetween={16}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 4200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group h-full pr-1"
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden sm:flex items-center justify-center py-4 pt-6  ">
            <Button
              link="/blogs"
              content="Read All Articles"
              className="text-white! rounded-full"
            />
          </div>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
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
      </Container>
      <div className="flex items-center justify-center py-4 pt-6  sm:hidden">
        <Button
          link="/blogs"
          content="Read All Articles"
          className="text-white! rounded-full"
        />
      </div>
    </Section>
  );
};

export default Blog;
