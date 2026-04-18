"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { posts } from "../../lib/posts";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimateIn";

function parseDate(dateStr: string): number {
  return new Date(dateStr).getTime();
}

export default function BlogPage() {
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const sorted = [...posts].sort((a, b) =>
    sortOrder === "desc"
      ? parseDate(b.date) - parseDate(a.date)
      : parseDate(a.date) - parseDate(b.date)
  );

  return (
    <main
      className="min-h-screen font-mono relative z-10"
      style={{ color: "var(--text-primary)" }}
    >
      <Navbar active="Blog" />
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-28">

        <FadeIn>
          <div className="pb-8 mb-8" style={{ borderBottom: "1px solid var(--border)" }}>
            <p className="text-[10px] tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>
              // writing
            </p>
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text-heading)" }}>
              Blog
            </h1>
            <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
              {posts.length} posts about code, design, and building things.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="flex items-center justify-end mb-2">
            <motion.button
              onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest transition-colors"
              style={{ color: "var(--text-muted)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ rotate: sortOrder === "desc" ? 0 : 180 }}
                transition={{ duration: 0.25 }}
                className="inline-block"
              >
                ↓
              </motion.span>
              {sortOrder === "desc" ? "Newest first" : "Oldest first"}
            </motion.button>
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={sortOrder}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <StaggerContainer>
              {sorted.map((post, i) => (
                <StaggerItem key={post.slug}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-6 py-8 px-4 transition-colors"
                      style={{ borderBottom: "1px solid var(--border)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "var(--bg-card-hover)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <div className="sm:col-span-2 sm:text-right">
                        <p className="text-[10px] tabular-nums" style={{ color: "var(--text-secondary)" }}>
                          {post.date}
                        </p>
                      </div>
                      <div className="sm:col-span-8">
                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          {post.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] uppercase tracking-widest px-1.5 py-0.5"
                              style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-sm mb-1 transition-colors" style={{ color: "var(--text-heading)" }}>
                          {post.title}
                        </h2>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="sm:col-span-2 sm:text-right">
                        <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                          {post.readTime}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}