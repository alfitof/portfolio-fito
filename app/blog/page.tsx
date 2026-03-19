"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { posts } from "../../lib/posts";

export default function BlogPage() {
  return (
    <main className="min-h-screen font-mono" style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}>
      <Navbar active="Blog" />
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-28">
        <div className="pb-8 mb-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <p className="text-[10px] tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>// writing</p>
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text-heading)" }}>Blog</h1>
          <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>{posts.length} posts about code, design, and building things.</p>
        </div>

        <div style={{ borderColor: "var(--border)" }}>
          {posts.map((post, i) => (
            <Link
              key={i}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-6 py-5 -mx-4 px-4 transition-colors"
              style={{ borderBottom: "1px solid var(--border)" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-card-hover)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div className="sm:col-span-2 sm:text-right">
                <p className="text-[10px] tabular-nums" style={{ color: "var(--text-secondary)" }}>{post.date}</p>
              </div>
              <div className="sm:col-span-8">
                <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest px-1.5 py-0.5" style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-sm mb-1 transition-colors" style={{ color: "var(--text-heading)" }}>{post.title}</h2>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{post.excerpt}</p>
              </div>
              <div className="sm:col-span-2 sm:text-right">
                <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}