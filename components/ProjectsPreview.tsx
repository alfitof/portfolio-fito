"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const PREVIEW_COUNT_DESKTOP = 6;
const PREVIEW_COUNT_MOBILE = 3;

const allProjects = [
  { name: "ASE Laboratory Website", desc: "Showcase website for Advanced Software Engineer Laboratory activities.", tech: "React, Tailwind CSS" },
  { name: "UMKM Mie Aceh Website", desc: "E-commerce platform helping UMKM traders sell their products online.", tech: "MongoDB, Express.js, SCSS, Node.js" },
  { name: "Droozle Store Website", desc: "Product display platform helping sellers showcase their items.", tech: "PHP, CodeIgniter, Bootstrap" },
  { name: "KliniQ App Design", desc: "App design for accessing doctors, pharmacies, and health insurance easily.", tech: "Figma" },
  { name: "Kokumi Website", desc: "Visually engaging product website for Kokumi brand.", tech: "Next.js, Tailwind CSS" },
  { name: "Chicken William Website", desc: "Menu ordering and product showcase for Chicken William restaurant.", tech: "Next.js, Tailwind CSS, Sanity.io" },
  { name: "E-Learning Course App", desc: "Mobile app for buying and studying online courses.", tech: "Flutter, Dart" },
  { name: "Logbook AirNav Website", desc: "Tool quality tracking notebook for AirNav internal operations.", tech: "Next.js, Tailwind CSS, Firebase" },
  { name: "LMS Rudi Russel", desc: "Comprehensive e-learning platform with interactive interfaces.", tech: "Next.js, Tailwind CSS, Firebase" },
];

export default function ProjectsPreview() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const previewCount = isMobile ? PREVIEW_COUNT_MOBILE : PREVIEW_COUNT_DESKTOP;
  const preview = allProjects.slice(0, previewCount);
  const remaining = allProjects.length - previewCount;

  return (
    <div>
      <h2 className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-secondary)" }}>
        // Projects
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px"
        style={{ backgroundColor: "var(--border)" }}
      >
        {preview.map((project, i) => (
          <div
            key={i}
            className="p-5 md:p-6 cursor-pointer transition-colors"
            style={{ backgroundColor: "var(--bg-card)" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-card-hover)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--bg-card)")}
          >
            <h3 className="text-sm leading-snug mb-2" style={{ color: "var(--text-heading)" }}>
              {project.name}
            </h3>
            <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
              {project.desc}
            </p>
            <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              {project.tech}
            </span>
          </div>
        ))}

        {/* More card */}
        {remaining > 0 && (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 pt-2" style={{ backgroundColor: "var(--bg)" }}>
          <div className="flex justify-center pt-4 pb-2">
            <Link
              href="/projects"
              className="text-[10px] uppercase tracking-widest transition-colors hover:opacity-80 flex items-center gap-2"
              style={{ color: "var(--text-muted)", border: "1px solid var(--border)", padding: "0.4rem 1rem" }}
            >
              View all {allProjects.length} projects →
            </Link>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}