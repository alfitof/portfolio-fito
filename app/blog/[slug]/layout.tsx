import type { Metadata } from "next";
import { posts } from "@/lib/posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Alfito Febriansyah" }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://alfitofebriansyah.blog/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Alfito Febriansyah"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://alfitofebriansyah.blog/blog/${post.slug}`,
    },
  };
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
