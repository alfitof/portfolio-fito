"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { projects } from "../lib/projects";

const PREVIEW_COUNT_DESKTOP = 6;
const PREVIEW_COUNT_MOBILE = 3;

export default function ProjectsPreview() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Pakai desktop count sebagai default sebelum mount
  // supaya tidak hydration mismatch
  const previewCount = mounted
    ? isMobile
      ? PREVIEW_COUNT_MOBILE
      : PREVIEW_COUNT_DESKTOP
    : PREVIEW_COUNT_DESKTOP;

  const preview = projects.slice(0, previewCount);
  const remaining = projects.length - previewCount;

  return (
    <div>
      <h2
        className="text-xs tracking-widest uppercase mb-6"
        style={{ color: "var(--text-secondary)" }}
      >
        // Projects
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px"
        style={{ backgroundColor: "var(--border)" }}
      >
        {preview.map((project, i) => (
          <Link
            key={i}
            href={project.link}
            target={project.link !== "#" ? "_blank" : undefined}
            rel={project.link !== "#" ? "noopener noreferrer" : undefined}
            className={
              project.link === "#" ? "cursor-default pointer-events-none" : ""
            }
          >
            <div
              className="p-5 md:p-6 h-full transition-colors"
              style={{ backgroundColor: "var(--bg-card)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--bg-card-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--bg-card)")
              }
            >
              <div className="flex items-center gap-1.5 mb-2">
                <h3
                  className="text-sm leading-snug"
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
                className="text-xs leading-relaxed mb-3 line-clamp-2"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.desc}
              </p>
              <span
                className="text-[10px] line-clamp-1 block"
                style={{ color: "var(--text-muted)" }}
              >
                {project.tech.join(", ")}
              </span>
            </div>
          </Link>
        ))}

        {remaining > 0 && (
          <div
            className="col-span-1 sm:col-span-2 md:col-span-3"
            style={{ backgroundColor: "var(--bg)" }}
          >
            <div className="flex justify-center pt-4 pb-2">
              <Link
                href="/projects"
                className="text-[10px] uppercase tracking-widest transition-colors hover:opacity-80 flex items-center gap-2"
                style={{
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  padding: "0.4rem 1rem",
                }}
              >
                View all {projects.length} projects →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
