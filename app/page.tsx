"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProfileInfo from "@/components/ProfileInfo";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import RecentPosts from "@/components/RecentPosts";
import ProjectsPreview from "../components/ProjectsPreview";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  PageEntrance,
} from "@/components/AnimateIn";
import { HoverRow } from "@/components/AnimatedCard";

const experiences = [
  {
    role: "Quality Assurance Engineer",
    company: "PT Bank CIMB Niaga Tbk",
    location: "Tangerang Selatan, Banten",
    period: "Aug 2025 — Current",
    points: [
      "Currently responsible for ensuring the quality and reliability of the One Statement project",
    ],
  },
  {
    role: "Front-End Developer",
    company: "PT Summit Global Teknologi",
    location: "Tangerang, Banten",
    period: "Jan 2025 — May 2025",
    points: [
      "Contributed to the development and maintenance of the USP website for Infinix products (Note, Smart, HOT, Accessories Series, XOS) using NuxtJS.",
      "Developed features for KarmaServe, a dashboard automation builder powered by Next.js, Selenium, and internal APIs.",
      "Developed the EKA Trailblazer dashboard for managing a localized Amazing Race event in Singapore, using Next.js and Python.",
    ],
  },
  {
    role: "My Digital Academy Student",
    company: "PT Bank Mandiri (Persero) Tbk",
    location: "Jakarta Raya (Remote)",
    period: "Dec 2023 — Jan 2024",
    points: [
      "Developed foundational product management skills, from problem definition and user research to solution ideation.",
      "Completed a capstone project — 'Beruang', a digital wallet application — using low-code development techniques.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Rudi Russel Academy",
    location: "Bandung, Jawa Barat",
    period: "Jun 2023 — Aug 2023",
    points: [
      "Built a Learning Management System from the ground up, overseeing both front-end and back-end development.",
      "Created a detailed system design and database architecture to ensure seamless integration and scalability.",
      "Optimized user experience through iterative testing, debugging, and user feedback incorporation.",
    ],
  },
  {
    role: "Teaching Factory Front-End Developer",
    company: "Telkom Indonesia",
    location: "Bandung, Jawa Barat (Remote)",
    period: "Feb 2023 — Aug 2023",
    points: [
      "Developed real-world projects using industry-standard tools and techniques.",
      "Worked collaboratively with a team of developers, designers, and project managers.",
      "Received feedback and guidance from experienced mentors to improve technical and soft skills.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "Advanced Software Engineer Laboratory, Telkom University",
    location: "Bandung, Jawa Barat",
    period: "May 2022 — Dec 2022",
    points: [
      "Gained experience using front-end frameworks such as ReactJS and TailwindCSS.",
      "Developed a strong understanding of front-end development principles and effective UX practices.",
    ],
  },
];

const educations = [
  {
    degree: "Bachelor of Information Technology",
    school: "Telkom University",
    location: "Bandung, Jawa Barat",
    period: "Aug 2020 — Aug 2024",
    gpa: "3.74 / 4.00",
    points: [
      "Contributed to the creation of a web platform for MSMEs as part of an IT Professionalism course.",
      "Joined the Advanced Software Engineer Laboratory, focusing on front-end development skills.",
      "Completed a thesis on the Design and Implementation of a Data Warehouse for Satu Data at Telkom University.",
    ],
  },
];

function calcDuration(period: string): string {
  const parseDate = (str: string): Date => {
    str = str.trim();
    if (str.toLowerCase() === "current") return new Date();
    const months: Record<string, number> = {
      jan: 0,
      feb: 1,
      mar: 2,
      apr: 3,
      may: 4,
      jun: 5,
      jul: 6,
      aug: 7,
      sep: 8,
      oct: 9,
      nov: 10,
      dec: 11,
    };
    const [mon, yr] = str.split(" ");
    return new Date(parseInt(yr), months[mon.toLowerCase().slice(0, 3)]);
  };
  const [startStr, endStr] = period.split("—").map((s) => s.trim());
  const start = parseDate(startStr);
  const end = parseDate(endStr);
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months}mo`;
  if (months === 0) return `${years}yr`;
  return `${years}yr ${months}mo`;
}

const sectionClass = "border-b";
const sectionStyle = { borderColor: "var(--border)" };
const innerClass = "max-w-5xl mx-auto px-6 py-10 md:py-14";
const headingStyle = { color: "var(--text-secondary)" };

export default function Home() {
  return (
    <main
      className="min-h-screen font-mono"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}
    >
      <Navbar active="Home" />

      {/* Profile */}
      <section className={sectionClass} style={sectionStyle}>
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-12 md:pt-28 md:pb-16">
          <PageEntrance>
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex-shrink-0 overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="/gallery/avatar-1.jpeg"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="flex-1 min-w-0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h1
                  className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2 mb-1 flex-wrap"
                  style={{ color: "var(--text-heading)" }}
                >
                  Alfito Febriansyah
                  <svg
                    className="w-[1.1rem] h-[1.1rem] text-blue-400 flex-shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </h1>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className="text-[10px] uppercase tracking-widest px-1.5 py-0.5"
                    style={{
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    Software Engineer
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-widest px-1.5 py-0.5"
                    style={{
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    Quality Assurance
                  </span>
                </div>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Creating with code.{" "}
                  <span className="text-blue-400">Small details matter.</span>
                </p>
                <ProfileInfo />
              </motion.div>
            </div>
          </PageEntrance>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={sectionClass} style={sectionStyle}>
        <div className={innerClass}>
          <FadeIn>
            <h2
              className="text-xs tracking-widest uppercase mb-6 md:mb-8"
              style={headingStyle}
            >
              // Tech Stack
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <TechStack />
          </FadeIn>
        </div>
      </section>

      {/* Experience */}
      <section className={sectionClass} style={sectionStyle}>
        <div className={innerClass}>
          <FadeIn>
            <h2
              className="text-xs tracking-widest uppercase mb-6 md:mb-8"
              style={headingStyle}
            >
              // Experience
            </h2>
          </FadeIn>
          <StaggerContainer className="divide-y divide-[var(--border)]">
            {experiences.map((exp, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-6 py-6">
                  <div className="sm:col-span-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p
                        className="text-[10px] tabular-nums"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {exp.period}
                      </p>
                      <span
                        className="text-[10px] tabular-nums px-1.5 py-0.5"
                        style={{
                          color: "var(--text-muted)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {calcDuration(exp.period)}
                      </span>
                    </div>
                    <p
                      className="text-[10px] mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {exp.location}
                    </p>
                  </div>
                  <div className="sm:col-span-9">
                    <h3
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: "var(--text-heading)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-xs mb-3"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      @ {exp.company}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span
                            className="flex-shrink-0"
                            style={{ color: "var(--text-muted)" }}
                          >
                            —
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Education */}
      <section className={sectionClass} style={sectionStyle}>
        <div className={innerClass}>
          <FadeIn>
            <h2
              className="text-xs tracking-widest uppercase mb-6 md:mb-8"
              style={headingStyle}
            >
              // Education
            </h2>
          </FadeIn>
          <StaggerContainer className="divide-y divide-[var(--border)]">
            {educations.map((edu, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-6 py-6">
                  <div className="sm:col-span-3">
                    <p
                      className="text-[10px] tabular-nums"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {edu.period}
                    </p>
                    <p
                      className="text-[10px] mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {edu.location}
                    </p>
                  </div>
                  <div className="sm:col-span-9">
                    <h3
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: "var(--text-heading)" }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="text-xs mb-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      @ {edu.school}
                    </p>
                    <p
                      className="text-[10px] mb-3"
                      style={{ color: "var(--text-muted)" }}
                    >
                      GPA {edu.gpa}
                    </p>
                    <ul className="space-y-1.5">
                      {edu.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span
                            className="flex-shrink-0"
                            style={{ color: "var(--text-muted)" }}
                          >
                            —
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Recent Posts */}
      <section className={sectionClass} style={sectionStyle}>
        <div className={innerClass}>
          <FadeIn>
            <RecentPosts />
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section className={sectionClass} style={sectionStyle}>
        <div className={innerClass}>
          <FadeIn>
            <ProjectsPreview />
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section className={sectionClass} style={sectionStyle}>
        <div className={innerClass}>
          <FadeIn>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
            © 2025 Alfito Febriansyah. Built with Next.js
          </p>
          <div className="flex items-center gap-4">
            {[
              { name: "github", url: "https://github.com/alfitof" },
              {
                name: "linkedin",
                url: "https://linkedin.com/in/alfito-fbriansyah",
              },
            ].map((s) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest transition-colors"
                style={{ color: "var(--text-muted)" }}
                whileHover={{ opacity: 0.6 }}
              >
                {s.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
