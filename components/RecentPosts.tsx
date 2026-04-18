"use client";

import Link from "next/link";
import { useState } from "react";
import { posts } from "@/lib/posts";

const PREVIEW_COUNT = 3;

export default function RecentPosts() {
  const preview = posts.slice(0, PREVIEW_COUNT);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-secondary)" }}
        >
          // Recent Posts
        </h2>
      </div>

      <div>
        {preview.map((post, i) => (
          <Link
            key={i}
            href={`/blog/${post.slug}`}
            className="group flex flex-col sm:flex-row sm:items-start sm:justify-between py-6 -mx-4 px-4 transition-colors gap-1 sm:gap-0"
            style={{ borderBottom: "1px solid var(--border)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg-card-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <div className="flex items-start gap-4">
              <span
                className="text-[10px] mt-0.5 tabular-nums flex-shrink-0"
                style={{ color: "var(--text-muted)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  className="text-sm transition-colors"
                  style={{ color: "var(--text-heading)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {post.excerpt}
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right flex-shrink-0 sm:ml-8 pl-8 sm:pl-0">
              <p
                className="text-[10px] tabular-nums"
                style={{ color: "var(--text-secondary)" }}
              >
                {post.date}
              </p>
              <p
                className="text-[10px] mt-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                {post.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {posts.length > PREVIEW_COUNT && (
        <div className="mt-[2.5rem] flex justify-center">
          <Link
            href="/blog"
            className="text-[10px] uppercase tracking-widest transition-colors hover:opacity-80 flex items-center gap-2"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              padding: "0.4rem 1rem",
            }}
          >
            View all {posts.length} posts →
          </Link>
        </div>
      )}
    </div>
  );
}
