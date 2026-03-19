import Link from "next/link";
import Navbar from "@/components/Navbar";
import { posts } from "../../../lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen font-mono" style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}>
      <Navbar active="Blog" />
      <article className="max-w-2xl mx-auto px-6 pt-24 pb-20 md:pt-28">
        <div className="flex items-center justify-between mb-8">
          <Link href="/blog" className="text-[10px] uppercase tracking-widest transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            ← back
          </Link>
          <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{post.readTime}</span>
        </div>

        <div className="flex items-center gap-1.5 mb-4 flex-wrap">
          {post.tags?.map((tag) => (
            <span key={tag} className="text-[9px] uppercase tracking-widest px-1.5 py-0.5" style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-xl md:text-2xl font-bold tracking-tight leading-tight mb-4" style={{ color: "var(--text-heading)" }}>{post.title}</h1>

        <div className="flex items-center gap-3 text-[10px] pb-8 mb-10 flex-wrap" style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>Alfito Febriansyah</span>
        </div>

        <div
          className="prose prose-sm max-w-none
            prose-p:leading-[1.8] prose-p:mb-5
            prose-h2:text-base prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-sm prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
            prose-code:text-blue-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-mono
            prose-pre:border prose-pre:rounded-none prose-pre:my-6
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-blockquote:pl-4 prose-blockquote:my-6
            prose-li:leading-relaxed prose-li:mb-1
            prose-ul:my-4 prose-ol:my-4"
          style={{
            ["--tw-prose-body" as string]: "var(--text-secondary)",
            ["--tw-prose-headings" as string]: "var(--text-heading)",
            ["--tw-prose-bold" as string]: "var(--text-heading)",
            ["--tw-prose-quotes" as string]: "var(--text-secondary)",
            ["--tw-prose-quote-borders" as string]: "var(--border)",
            ["--tw-prose-code" as string]: "var(--text-primary)",
            ["--tw-prose-pre-bg" as string]: "var(--bg-card)",
          } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 flex justify-between text-xs" style={{ borderTop: "1px solid var(--border)", color: "var(--text-secondary)" }}>
          <Link href="/blog" className="transition-colors hover:opacity-80">← All posts</Link>
          <span style={{ color: "var(--text-muted)" }}>— end —</span>
        </div>
      </article>
    </main>
  );
}