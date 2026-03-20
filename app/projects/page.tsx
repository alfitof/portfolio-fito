"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimateIn";

const projects = [
  {
    name: "Temu Jiwa",
    desc: "Platform for selling customizable digital invitations.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Radix UI",
      "Firebase",
      "GSAP",
      "Framer Motion",
      "Cloudinary",
    ],
    category: "Web",
    year: "2025",
    link: "https://temujiwa.alfitofebriansyah.blog/",
  },
  {
    name: "ASE Laboratory Website",
    desc: "Showcase website for Advanced Software Engineer Laboratory activities.",
    tech: ["React", "Tailwind CSS"],
    category: "Web",
    year: "2022",
    link: "#",
  },
  {
    name: "UMKM Mie Aceh Website",
    desc: "E-commerce platform helping UMKM traders sell their products online.",
    tech: ["MongoDB", "Express.js", "SCSS", "Node.js"],
    category: "Web",
    year: "2022",
    link: "#",
  },
  {
    name: "Droozle Store Website",
    desc: "Product display platform helping sellers showcase their items.",
    tech: ["PHP", "CodeIgniter", "Bootstrap"],
    category: "Web",
    year: "2022",
    link: "#",
  },
  {
    name: "KliniQ App Design",
    desc: "App design for accessing doctors, pharmacies, and health insurance easily.",
    tech: ["Figma"],
    category: "Design",
    year: "2022",
    link: "#",
  },
  {
    name: "Portfolio Website",
    desc: "Personal portfolio to showcase work and professional background.",
    tech: ["Next.js", "Bootstrap"],
    category: "Web",
    year: "2023",
    link: "#",
  },
  {
    name: "Kokumi Website",
    desc: "Visually engaging product website for Kokumi brand.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Web",
    year: "2023",
    link: "#",
  },
  {
    name: "Chicken William Website",
    desc: "Menu ordering and product showcase for Chicken William restaurant.",
    tech: ["Next.js", "Tailwind CSS", "Sanity.io"],
    category: "Web",
    year: "2023",
    link: "#",
  },
  {
    name: "E-Learning Course App",
    desc: "Mobile app for buying and studying online courses.",
    tech: ["Flutter", "Dart"],
    category: "Mobile",
    year: "2023",
    link: "#",
  },
  {
    name: "Rudi Russel Profile",
    desc: "Company profile website introducing Rudi Russell to the public.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Web",
    year: "2023",
    link: "#",
  },
  {
    name: "Logbook AirNav Website",
    desc: "Tool quality tracking notebook for AirNav internal operations.",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    category: "Web",
    year: "2023",
    link: "#",
  },
  {
    name: "LMS Rudi Russel",
    desc: "Comprehensive e-learning platform with interactive interfaces.",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    category: "Web",
    year: "2023",
    link: "#",
  },
];

const years = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.year))).sort(
    (a, b) => Number(b) - Number(a),
  ),
];

export default function ProjectsPage() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const filtered = projects
    .filter((p) => selectedYear === "All" || p.year === selectedYear)
    .sort((a, b) =>
      sortOrder === "desc"
        ? Number(b.year) - Number(a.year)
        : Number(a.year) - Number(b.year),
    );

  return (
    <main
      className="min-h-screen font-mono"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}
    >
      <Navbar active="Projects" />

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-28">
        {/* Header */}
        <FadeIn>
          <div
            className="pb-8 mb-8"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <p
              className="text-[10px] tracking-widest uppercase mb-2"
              style={{ color: "var(--text-muted)" }}
            >
              // work
            </p>
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: "var(--text-heading)" }}
            >
              Projects
            </h1>
            <p
              className="text-sm mt-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {filtered.length} of {projects.length} projects across web,
              mobile, and design.
            </p>
          </div>
        </FadeIn>

        {/* Filter & Sort controls */}
        <FadeIn delay={0.05}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            {/* Year filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-[10px] uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                Year:
              </span>
              {years.map((year) => (
                <motion.button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className="text-[10px] uppercase tracking-widest px-2 py-1 transition-colors"
                  style={{
                    color:
                      selectedYear === year
                        ? "var(--text-heading)"
                        : "var(--text-muted)",
                    border: "1px solid",
                    borderColor:
                      selectedYear === year
                        ? "var(--text-secondary)"
                        : "var(--border)",
                    backgroundColor:
                      selectedYear === year ? "var(--bg-card)" : "transparent",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {year}
                </motion.button>
              ))}
            </div>

            {/* Sort order */}
            <motion.button
              onClick={() =>
                setSortOrder(sortOrder === "desc" ? "asc" : "desc")
              }
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest transition-colors self-start sm:self-auto"
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

        <div>
          {/* Table header */}
          <FadeIn delay={0.08}>
            <div
              className="hidden md:grid grid-cols-12 gap-6 pb-3"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {["No", "Project", "Stack", "Category", "Year"].map((h, i) => (
                <div
                  key={h}
                  className={`${
                    i === 0
                      ? "col-span-1"
                      : i === 1
                        ? "col-span-4"
                        : i === 2
                          ? "col-span-4"
                          : i === 3
                            ? "col-span-2"
                            : "col-span-1 text-right"
                  }`}
                >
                  <span
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Rows */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedYear}-${sortOrder}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <StaggerContainer>
                {filtered.length === 0 ? (
                  <div className="py-16 text-center">
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      No projects found for {selectedYear}.
                    </p>
                  </div>
                ) : (
                  filtered.map((project, i) => (
                    <StaggerItem key={`${project.name}-${i}`}>
                      <Link
                        href={project.link}
                        target={project.link !== "#" ? "_blank" : undefined}
                        rel={
                          project.link !== "#"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={
                          project.link === "#"
                            ? "cursor-default pointer-events-none"
                            : ""
                        }
                      >
                        <motion.div
                          className="group grid grid-cols-12 gap-6 py-5 -mx-4 px-4 transition-colors"
                          style={{
                            borderBottom: "1px solid var(--border)",
                            cursor:
                              project.link !== "#" ? "pointer" : "default",
                          }}
                          whileHover={{ x: project.link !== "#" ? 4 : 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              project.link !== "#"
                                ? "var(--bg-card-hover)"
                                : "transparent")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "transparent")
                          }
                        >
                          <div className="hidden md:flex col-span-1 items-start pt-0.5">
                            <span
                              className="text-[10px] tabular-nums"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="col-span-12 md:col-span-4">
                            <div className="flex items-center gap-2 mb-1">
                              <h3
                                className="text-sm transition-colors"
                                style={{ color: "var(--text-heading)" }}
                              >
                                {project.name}
                              </h3>
                              {project.link !== "#" && (
                                <span
                                  className="text-[10px]"
                                  style={{ color: "var(--text-muted)" }}
                                >
                                  ↗
                                </span>
                              )}
                            </div>
                            <p
                              className="text-xs leading-relaxed"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {project.desc}
                            </p>
                          </div>
                          <div className="col-span-12 md:col-span-4 flex items-start flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                              <motion.span
                                key={t}
                                className="text-[9px] uppercase tracking-widest px-1.5 py-0.5"
                                style={{
                                  color: "var(--text-muted)",
                                  border: "1px solid var(--border)",
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.15 }}
                              >
                                {t}
                              </motion.span>
                            ))}
                          </div>
                          <div className="hidden md:flex col-span-2 items-start pt-0.5">
                            <span
                              className="text-[10px]"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {project.category}
                            </span>
                          </div>
                          <div className="hidden md:flex col-span-1 items-start justify-end pt-0.5">
                            <span
                              className="text-[10px] tabular-nums"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {project.year}
                            </span>
                          </div>
                        </motion.div>
                      </Link>
                    </StaggerItem>
                  ))
                )}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
