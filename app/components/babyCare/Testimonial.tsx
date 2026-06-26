"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { assetWithFill, wave3Svg } from "@/constants/svgs";
import { colors } from "@/lib/tokens";
import { Section, Container } from "@/app/components/layout";
import SectionIntro, {
  sectionContentSpacing,
  sectionIntroSpacing,
} from "@/app/components/common-ui/SectionIntro";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import the custom hook
import { useFeaturedReviews } from "@/hooks/useReviews";

const palette = {
  accent: colors.baby.accent,
  accentSoft: colors.baby.accentSoft,
  border: colors.baby.border,
  chip: colors.baby.chip,
  panel: colors.baby.panel,
  page: colors.baby.page,
  body: colors.baby.body,
};

const Testimonials = () => {
  const productBottomWave = assetWithFill(wave3Svg, colors.baby.hero);
  
  // Fetch featured reviews from API
  const { reviews, loading, error } = useFeaturedReviews();

  // Helper function to calculate relative time
  const getRelativeTime = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7);
      return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    }
    const months = Math.floor(diffInDays / 30);
    return months === 1 ? "1 month ago" : `${months} months ago`;
  };

  return (
    <Section
      size="md"
      className="relative overflow-hidden bg-babyCare pt-6 pb-8 md:pt-0 md:pb-12 lg:pb-48"
    >
      <div
        className="absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
      />
      <div className="pointer-events-none absolute left-1/2 top-14 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl" />

      <style>{`
        .testimonials-swiper .swiper-pagination {
          position: static;
          margin-top: 1.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          width: 0.7rem;
          height: 0.625rem;
          border-radius: 9999px;
          background: rgba(132, 170, 165, 0.35);
          opacity: 1;
          transition: width 0.3s, background 0.3s;
          margin: 0 !important;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          width: 2.8rem;
          background: ${palette.accent};
        }
        .testimonials-swiper .swiper-slide {
          height: auto;
        }
      `}</style>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={sectionIntroSpacing}
        >
          <SectionIntro
            align="center"
            className="mx-auto max-w-3xl"
            title={
              <>
                Hear from Our
                <span className="font-light italic"> Happy Parents</span>
              </>
            }
            titleClassName="text-2xl font-semibold tracking-tight text-foreground lg:text-5xl"
          />
        </motion.div>

        <div className={`${sectionContentSpacing} rounded-4xl  sm:px-4 `}>
          {/* Loading State - Skeleton */}
          {loading && (
            <>
              {/* Header Skeleton */}
              <div className="mb-5 hidden sm:flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-32 animate-pulse rounded bg-gray-200/60" />
                  <div className="h-4 w-48 animate-pulse rounded bg-gray-200/60" />
                </div>
                <div className="flex gap-2">
                  <div className="h-11 w-11 animate-pulse rounded-full bg-gray-200/60" />
                  <div className="h-11 w-11 animate-pulse rounded-full bg-gray-200/60" />
                </div>
              </div>

              {/* Skeleton Cards - Desktop */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-5">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center rounded-[2.25rem] border p-6 md:p-7 min-h-100"
                    style={{
                      borderColor: `${palette.border}44`,
                      backgroundColor: "rgba(255,255,255,0.94)",
                    }}
                  >
                    {/* Avatar skeleton */}
                    <div className="h-18 w-18 animate-pulse rounded-full bg-gray-200/60" />
                    
                    {/* Stars skeleton */}
                    <div className="mt-5 flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className="h-4 w-4 animate-pulse rounded bg-gray-200/60" />
                      ))}
                    </div>

                    {/* Name and location skeleton */}
                    <div className="mt-3 flex flex-col items-center gap-2 w-full">
                      <div className="h-5 w-32 animate-pulse rounded bg-gray-200/60" />
                      <div className="h-4 w-24 animate-pulse rounded bg-gray-200/60" />
                    </div>

                    {/* Badge and time skeleton */}
                    <div className="mt-3 flex justify-between w-full min-w-72">
                      <div className="h-7 w-24 animate-pulse rounded-full bg-gray-200/60" />
                      <div className="h-4 w-20 animate-pulse rounded bg-gray-200/60" />
                    </div>

                    {/* Comment skeleton */}
                    <div className="mt-5 w-full space-y-2">
                      <div className="h-4 w-full animate-pulse rounded bg-gray-200/60" />
                      <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200/60" />
                      <div className="h-4 w-4/6 animate-pulse rounded bg-gray-200/60" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Skeleton Cards - Mobile Swiper */}
              <div className="block lg:hidden">
                <div className="flex gap-4 overflow-hidden">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-[85%] flex flex-col items-center rounded-[2.25rem] border p-6 min-h-92"
                      style={{
                        borderColor: `${palette.border}44`,
                        backgroundColor: "rgba(255,255,255,0.94)",
                      }}
                    >
                      <div className="h-16 w-16 animate-pulse rounded-full bg-gray-200/60" />
                      <div className="mt-5 flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <div key={s} className="h-4 w-4 animate-pulse rounded bg-gray-200/60" />
                        ))}
                      </div>
                      <div className="mt-3 flex flex-col items-center gap-2 w-full">
                        <div className="h-5 w-32 animate-pulse rounded bg-gray-200/60" />
                        <div className="h-4 w-24 animate-pulse rounded bg-gray-200/60" />
                      </div>
                      <div className="mt-3 flex justify-between w-full">
                        <div className="h-7 w-24 animate-pulse rounded-full bg-gray-200/60" />
                        <div className="h-4 w-20 animate-pulse rounded bg-gray-200/60" />
                      </div>
                      <div className="mt-5 w-full space-y-2">
                        <div className="h-4 w-full animate-pulse rounded bg-gray-200/60" />
                        <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200/60" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Error State */}
          {error && (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-lg text-red-500">Failed to load reviews</p>
              <p className="mt-2 text-sm text-zinc-500">{error}</p>
            </div>
          )}

          {/* Reviews Content */}
          {!loading && !error && reviews.length > 0 && (
            <>
              {/* Header row */}
              <div className="mb-5 hidden sm:flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span
                className="flex items-center gap-2 py-2 text-lg font-semibold sm:text-xl"
                style={{ color: palette.accent }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="50"
                  viewBox="0 0 512 168"
                >
                  <path
                    fill="#ff302f"
                    d="m496.052 102.672l14.204 9.469c-4.61 6.79-15.636 18.44-34.699 18.44c-23.672 0-41.301-18.315-41.301-41.614c0-24.793 17.816-41.613 39.308-41.613c21.616 0 32.206 17.193 35.633 26.475l1.869 4.735l-55.692 23.049c4.236 8.348 10.84 12.584 20.183 12.584c9.345 0 15.823-4.61 20.495-11.525M452.384 87.66l37.19-15.45c-2.056-5.17-8.16-8.845-15.45-8.845c-9.281 0-22.176 8.223-21.74 24.295"
                  />
                  <path
                    fill="#20b15a"
                    d="M407.407 4.931h17.94v121.85h-17.94z"
                  />
                  <path
                    fill="#3686f7"
                    d="M379.125 50.593h17.318V124.6c0 30.711-18.128 43.357-39.558 43.357c-20.183 0-32.33-13.58-36.878-24.606l15.885-6.604c2.865 6.79 9.78 14.827 20.993 14.827c13.767 0 22.24-8.535 22.24-24.482v-5.98h-.623c-4.112 4.983-11.961 9.468-21.928 9.468c-20.807 0-39.87-18.128-39.87-41.488c0-23.486 19.063-41.8 39.87-41.8c9.905 0 17.816 4.423 21.928 9.282h.623zm1.245 38.499c0-14.702-9.78-25.417-22.239-25.417c-12.584 0-23.174 10.715-23.174 25.417c0 14.514 10.59 25.042 23.174 25.042c12.46.063 22.24-10.528 22.24-25.042"
                  />
                  <path
                    fill="#ff302f"
                    d="M218.216 88.78c0 23.984-18.688 41.613-41.613 41.613c-22.924 0-41.613-17.691-41.613-41.613c0-24.108 18.689-41.675 41.613-41.675c22.925 0 41.613 17.567 41.613 41.675m-18.19 0c0-14.95-10.84-25.23-23.423-25.23S153.18 73.83 153.18 88.78c0 14.826 10.84 25.23 23.423 25.23c12.584 0 23.423-10.404 23.423-25.23"
                  />
                  <path
                    fill="#ffba40"
                    d="M309.105 88.967c0 23.984-18.689 41.613-41.613 41.613c-22.925 0-41.613-17.63-41.613-41.613c0-24.108 18.688-41.613 41.613-41.613c22.924 0 41.613 17.443 41.613 41.613m-18.253 0c0-14.95-10.839-25.23-23.423-25.23s-23.423 10.28-23.423 25.23c0 14.826 10.84 25.23 23.423 25.23c12.646 0 23.423-10.466 23.423-25.23"
                  />
                  <path
                    fill="#3686f7"
                    d="M66.59 112.328c-26.102 0-46.534-21.056-46.534-47.158c0-26.101 20.432-47.157 46.534-47.157c14.079 0 24.357 5.544 31.957 12.646l12.522-12.521C100.479 7.984 86.338.258 66.59.258C30.833.259.744 29.414.744 65.17s30.089 64.912 65.846 64.912c19.312 0 33.889-6.354 45.289-18.19c11.711-11.712 15.324-28.158 15.324-41.489c0-4.174-.498-8.472-1.059-11.649H66.59v17.318h42.423c-1.246 10.84-4.672 18.253-9.718 23.298c-6.105 6.168-15.76 12.958-32.705 12.958"
                  />
                </svg>
                Reviews
              </span>
              <p className="text-sm text-zinc-500">
                Swipe through real feedback from parents
              </p>
            </div>

            {/* Custom nav buttons */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                className="testimonials-prev flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.04]"
                style={{
                  borderColor: `${palette.border}55`,
                  backgroundColor: "rgba(255,255,255,0.92)",
                  color: palette.accent,
                }}
                aria-label="Previous reviews"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="testimonials-next flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.04]"
                style={{
                  borderColor: `${palette.border}55`,
                  backgroundColor: "rgba(255,255,255,0.92)",
                  color: palette.accent,
                }}
                aria-label="Next reviews"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
              </div>

              <Swiper
                className="testimonials-swiper"
                modules={[Autoplay, Pagination, Navigation, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                grabCursor={true}
                loop={reviews.length > 2}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: ".testimonials-prev",
                  nextEl: ".testimonials-next",
                }}
                breakpoints={{
                  1024: { slidesPerView: 2, spaceBetween: 20 },
                }}
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.id}>
                    <article
                      className="flex h-full min-h-92 flex-col items-center rounded-[2.25rem] border p-6 text-center md:min-h-100 md:p-7"
                      style={{
                        borderColor: `${palette.border}44`,
                        backgroundColor: "rgba(255,255,255,0.94)",
                      }}
                    >
                      <div className="relative h-16 w-16 overflow-hidden rounded-full md:h-18 md:w-18">
                        <Image
                          src={review.avatar}
                          alt={review.fullName}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="mt-5 flex flex-col items-center gap-3">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              size={17}
                              fill="#fbbf24"
                              color="#fbbf24"
                            />
                          ))}
                        </div>

                        <div>
                          <p
                            className="text-base font-semibold md:text-lg"
                            style={{ color: palette.accent }}
                          >
                            {review.fullName}
                          </p>
                          <p className="text-sm text-zinc-500">{review.location}</p>
                        </div>

                        <div className="flex min-w-72 justify-between">
                          <span
                            className="w-fit rounded-full px-3.5 py-1.5 text-xs font-semibold"
                            style={{
                              color: palette.accentSoft,
                            }}
                          >
                            {review.isFeatured ? "Featured" : "Verified"}
                          </span>
                          <span className="text-sm text-zinc-400">
                            {getRelativeTime(review.createdAt)}
                          </span>
                        </div>
                      </div>

                      <p
                        className="mt-5 text-base leading-relaxed md:text-lg"
                        style={{ color: palette.body }}
                      >
                        {review.comment}
                      </p>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}

          {/* Empty State */}
          {!loading && !error && reviews.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-lg" style={{ color: palette.body }}>
                No reviews available yet
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
