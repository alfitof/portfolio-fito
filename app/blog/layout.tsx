import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and thoughts by Alfito Febriansyah on software engineering, QA, frontend development, and AI agents.",
  openGraph: {
    title: "Blog — Alfito Febriansyah",
    description:
      "Articles and thoughts on software engineering, QA, frontend development, and AI agents.",
    url: "https://alfitofebriansyah.blog/blog",
  },
  alternates: {
    canonical: "https://alfitofebriansyah.blog/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
