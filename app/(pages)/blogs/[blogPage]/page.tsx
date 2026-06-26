"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSection } from "@/app/providers/SectionProvider";
import { ArrowLeft, ChevronRight, Clock, Calendar } from "lucide-react";
import DOMPurify from "dompurify";
import { useBlogBySlug, useBlogs } from "@/hooks/useBlog";

const formatDate = (isoString: string) => {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "Recent";
  }
};

const formatDateShort = (isoString: string) => {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recent";
  }
};

const getReadingTime = (html?: string) => {
  if (!html) return 1;
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

const BlogDetailPage = () => {
  const params = useParams();
  const blogPage = params?.blogPage;
  const slug = Array.isArray(blogPage) ? blogPage[0] : blogPage;

  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  const { data: blog, isLoading: isBlogLoading } = useBlogBySlug(slug || "");
  const { data: allBlogsData } = useBlogs();

  const relatedBlogs = useMemo(() => {
    if (!blog || !allBlogsData?.blogs) return [];

    const matches = allBlogsData.blogs.filter(
      (b) => b.id !== blog.id && b.portal?.slug === blog.portal?.slug
    );

    const candidates =
      matches.length > 0
        ? matches
        : allBlogsData.blogs.filter((b) => b.id !== blog.id);

    return candidates.slice(0, 4).map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      desc: item.excerpt,
      image: Array.isArray(item.coverImage)
        ? item.coverImage[0] || "/images/placeholder.png"
        : item.coverImage || "/images/placeholder.png",
      category: item.portal?.name || "General",
      date: formatDateShort(item.createdAt),
    }));
  }, [blog, allBlogsData]);

  if (isBlogLoading) {
    return (
      <div className="min-h-screen animate-pulse bg-white lg:mt-5">
        <section className="px-4 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-6">
            <div className="h-4 w-48 rounded-full bg-zinc-200" />
            <div className="h-6 w-28 rounded-full bg-zinc-200" />
            <div className="space-y-3">
              <div className="h-10 w-full rounded-xl bg-zinc-200 sm:w-3/4" />
              <div className="h-10 w-2/3 rounded-xl bg-zinc-200 sm:w-1/2" />
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="size-11 rounded-full bg-zinc-200" />
              <div className="space-y-2">
                <div className="h-4 w-32 rounded bg-zinc-200" />
                <div className="h-3 w-24 rounded bg-zinc-200" />
              </div>
            </div>
            <div className="h-[50vh] w-full rounded-2xl bg-zinc-200" />
          </div>
        </section>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Blog Not Found</h1>
          <Link href="/blogs" className="text-foreground hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const authorName = "Zuvara Team";
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
    authorName
  )}&top=straight01&hairColor=724133&facialHairProbability=0&mouth=smile&clothing=blazerAndShirt`;

  const coverImg = Array.isArray(blog.coverImage)
    ? blog.coverImage[0] || "/images/placeholder.png"
    : blog.coverImage || "/images/placeholder.png";

  const readingTime = getReadingTime(blog.content);
  const accentText = isPersonal ? "text-personal-accent" : "text-baby-accent";
  const accentBg = isPersonal ? "bg-personal-accent" : "bg-baby-accent";
  const accentChip = isPersonal ? "bg-personal-chip" : "bg-baby-chip";
  const accentHover = isPersonal ? "hover:text-personal-accent" : "hover:text-baby-accent";

  return (
    <div className="min-h-screen bg-white lg:mt-5">
      {/* Header / Hero */}
      <header className="px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 text-xs font-medium text-zinc-500"
          >
            <Link href="/" className={cn("transition-colors", accentHover)}>
              Home
            </Link>
            <ChevronRight size={13} className="text-zinc-300" />
            <Link
              href="/blogs"
              className={cn("transition-colors", accentHover)}
            >
              Blogs
            </Link>
            <ChevronRight size={13} className="text-zinc-300" />
            <span className={cn("max-w-[10rem] truncate sm:max-w-xs", accentText)}>
              {blog.title}
            </span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            {/* Category */}
            <span
              className={cn(
                "inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em]",
                accentChip,
                accentText
              )}
            >
              {blog.portal?.name || "General"}
            </span>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              {blog.title}
            </h1>

            {/* Excerpt */}
            {blog.excerpt && (
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-500">
                {blog.excerpt}
              </p>
            )}

            {/* Author + Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-zinc-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-full ring-1 ring-zinc-200">
                  <Image
                    src={avatarUrl}
                    alt={authorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {authorName}
                  </p>
                  <p className="text-xs text-zinc-500">Editorial Desk</p>
                </div>
              </div>

              <span className="hidden h-8 w-px bg-zinc-200 sm:block" />

              <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                <Calendar size={14} className="text-zinc-400" />
                {formatDate(blog.createdAt)}
              </div>

              <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                <Clock size={14} className="text-zinc-400" />
                {readingTime} min read
              </div>
            </div>
          </motion.div>

          {/* Cover Image */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-lg lg:aspect-[2.4/1]"
          >
            <Image
              src={coverImg}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </motion.figure>
        </div>
      </header>

      {/* Main content with sidebar */}
      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Article Content */}
            <article className="min-w-0 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.content || "") || "",
                }}
                className={cn(
                  "prose prose-lg max-w-none text-zinc-700",
                  // Headings
                  "[&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:tracking-tight [&_h2]:text-zinc-900 sm:[&_h2]:text-3xl",
                  "[&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:text-zinc-900",
                  // Paragraphs
                  "[&_p]:mb-6 [&_p]:leading-[1.85] [&_p]:text-zinc-600",
                  // Lists
                  "[&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
                  "[&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
                  "[&_li]:leading-[1.8] [&_li]:text-zinc-600 [&_li]:marker:text-zinc-400",
                  // Emphasis
                  "[&_strong]:font-semibold [&_strong]:text-zinc-800",
                  "[&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4",
                  isPersonal
                    ? "[&_a]:text-personal-accent [&_a]:decoration-personal-border"
                    : "[&_a]:text-baby-accent [&_a]:decoration-baby-border",
                  // Blockquote
                  "[&_blockquote]:my-8 [&_blockquote]:rounded-r-xl [&_blockquote]:border-l-4 [&_blockquote]:py-4 [&_blockquote]:pl-6 [&_blockquote]:pr-4 [&_blockquote]:text-lg [&_blockquote]:italic [&_blockquote]:text-zinc-600",
                  isPersonal
                    ? "[&_blockquote]:border-personal-accent [&_blockquote]:bg-personal-panel"
                    : "[&_blockquote]:border-baby-accent [&_blockquote]:bg-baby-panel",
                  // Media
                  "[&_img]:my-8 [&_img]:w-full [&_img]:rounded-xl",
                  "[&_hr]:my-10 [&_hr]:border-zinc-200"
                )}
              />

              {/* Back link */}
              <footer className="mt-12 border-t border-zinc-200 pt-8">
                <Link
                  href="/blogs"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition-colors hover:text-zinc-900"
                >
                  <ArrowLeft
                    size={18}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  Back to all articles
                </Link>
              </footer>
            </article>

            {/* Right Sidebar - Related Blogs */}
            {relatedBlogs.length > 0 && (
              <aside className="w-full shrink-0 lg:w-80 xl:w-96">
                <div className="lg:sticky lg:top-20">
                  <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900">
                      Related Articles
                    </h2>
                    <Link
                      href="/blogs"
                      className={cn(
                        "text-xs font-semibold transition-colors hover:underline",
                        accentText
                      )}
                    >
                      View all
                    </Link>
                  </div>

                  <div className="space-y-5">
                    {relatedBlogs.map((item, idx) => (
                      <motion.article
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                        className="group"
                      >
                        <Link
                          href={`/blogs/${item.slug}`}
                          className="flex gap-4"
                        >
                          <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex min-w-0 flex-col justify-center">
                            <p
                              className={cn(
                                "mb-1 text-[10px] font-bold uppercase tracking-wider",
                                accentText
                              )}
                            >
                              {item.category}
                            </p>
                            <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-zinc-900 transition-colors group-hover:text-zinc-600">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-xs text-zinc-400">
                              {item.date}
                            </p>
                          </div>
                        </Link>
                      </motion.article>
                    ))}
                  </div>

                  {/* Newsletter or CTA box */}
                  <div
                    className={cn(
                      "mt-8 rounded-2xl p-5",
                      isPersonal ? "bg-personal-panel" : "bg-baby-panel"
                    )}
                  >
                    <h3 className="mb-2 text-sm font-bold text-zinc-900">
                      Stay Updated
                    </h3>
                    <p className="mb-4 text-xs leading-relaxed text-zinc-600">
                      Get the latest tips and guides on baby care delivered to
                      your inbox.
                    </p>
                    <Link
                      href="/contact"
                      className={cn(
                        "inline-flex w-full items-center justify-center rounded-full py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90",
                        accentBg
                      )}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
