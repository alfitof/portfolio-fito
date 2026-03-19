"use client";

import Navbar from "../../components/Navbar";

const projects = [
  { name: "ASE Laboratory Website", desc: "Showcase website for Advanced Software Engineer Laboratory activities.", tech: ["React", "Tailwind CSS"], category: "Web", year: "2022" },
  { name: "UMKM Mie Aceh Website", desc: "E-commerce platform helping UMKM traders sell their products online.", tech: ["MongoDB", "Express.js", "SCSS", "Node.js"], category: "Web", year: "2022" },
  { name: "Droozle Store Website", desc: "Product display platform helping sellers showcase their items.", tech: ["PHP", "CodeIgniter", "Bootstrap"], category: "Web", year: "2022" },
  { name: "KliniQ App Design", desc: "App design for accessing doctors, pharmacies, and health insurance easily.", tech: ["Figma"], category: "Design", year: "2022" },
  { name: "Portfolio Website", desc: "Personal portfolio to showcase work and professional background.", tech: ["Next.js", "Bootstrap"], category: "Web", year: "2023" },
  { name: "Kokumi Website", desc: "Visually engaging product website for Kokumi brand.", tech: ["Next.js", "Tailwind CSS"], category: "Web", year: "2023" },
  { name: "Chicken William Website", desc: "Menu ordering and product showcase for Chicken William restaurant.", tech: ["Next.js", "Tailwind CSS", "Sanity.io"], category: "Web", year: "2023" },
  { name: "E-Learning Course App", desc: "Mobile app for buying and studying online courses.", tech: ["Flutter", "Dart"], category: "Mobile", year: "2023" },
  { name: "Rudi Russel Profile", desc: "Company profile website introducing Rudi Russell to the public.", tech: ["Next.js", "Tailwind CSS"], category: "Web", year: "2023" },
  { name: "Logbook AirNav Website", desc: "Tool quality tracking notebook for AirNav internal operations.", tech: ["Next.js", "Tailwind CSS", "Firebase"], category: "Web", year: "2023" },
  { name: "LMS Rudi Russel", desc: "Comprehensive e-learning platform with interactive interfaces.", tech: ["Next.js", "Tailwind CSS", "Firebase"], category: "Web", year: "2023" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen font-mono" style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}>
      <Navbar active="Projects" />

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-28">
        <div className="pb-8 mb-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <p className="text-[10px] tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>// work</p>
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text-heading)" }}>Projects</h1>
          <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>{projects.length} projects across web, mobile, and design.</p>
        </div>

        <div>
          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 gap-6 pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
            {["No", "Project", "Stack", "Category", "Year"].map((h, i) => (
              <div key={h} className={`${i === 0 ? "col-span-1" : i === 1 ? "col-span-4" : i === 2 ? "col-span-4" : i === 3 ? "col-span-2" : "col-span-1 text-right"}`}>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>{h}</span>
              </div>
            ))}
          </div>

          {projects.map((project, i) => (
            <div
              key={i}
              className="group grid grid-cols-12 gap-6 py-5 -mx-4 px-4 transition-colors cursor-default"
              style={{ borderBottom: "1px solid var(--border)" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-card-hover)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div className="hidden md:flex col-span-1 items-start pt-0.5">
                <span className="text-[10px] tabular-nums" style={{ color: "var(--text-muted)" }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-sm mb-1 transition-colors" style={{ color: "var(--text-heading)" }}>{project.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.desc}</p>
              </div>
              <div className="col-span-12 md:col-span-4 flex items-start flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] uppercase tracking-widest px-1.5 py-0.5" style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="hidden md:flex col-span-2 items-start pt-0.5">
                <span className="text-[10px]" style={{ color: "var(--text-secondary)" }}>{project.category}</span>
              </div>
              <div className="hidden md:flex col-span-1 items-start justify-end pt-0.5">
                <span className="text-[10px] tabular-nums" style={{ color: "var(--text-muted)" }}>{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}