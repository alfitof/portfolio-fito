import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of web, mobile, and design projects built by Alfito Febriansyah across various technologies.",
  openGraph: {
    title: "Projects — Alfito Febriansyah",
    description:
      "A collection of web, mobile, and design projects built by Alfito Febriansyah.",
    url: "https://alfitofebriansyah.blog/projects",
  },
  alternates: {
    canonical: "https://alfitofebriansyah.blog/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
