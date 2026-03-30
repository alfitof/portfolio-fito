"use client";

import { useState } from "react";
import { IoLogoFirebase } from "react-icons/io5";
import { useTheme } from "@/components/ThemeProvider";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiNuxt,
  SiJavascript,
  SiPython,
  SiMysql,
  SiN8N,
  SiOllama,
  SiOpenai,
  SiJest,
  SiPostman,
  SiSass,
  SiGsap,
  SiInsomnia,
  SiJira,
  SiMongodb,
  SiClaude,
} from "react-icons/si";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { BiLogoVuejs } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const PREVIEW_COUNT = 5;

const techStack = [
  {
    category: "Frontend",
    items: [
      // Framework & Library
      {
        name: "React",
        icon: <SiReact className="w-5 h-5" />,
        color: "text-[#61DAFB]",
      },
      {
        name: "Vue.js",
        icon: <BiLogoVuejs className="w-5 h-5" />,
        color: "text-[#47ba87]",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-5 h-5" />,
        color: "text-zinc-100",
      },
      {
        name: "Nuxt.js",
        icon: <SiNuxt className="w-5 h-5" />,
        color: "text-green-400",
      },
      // Language
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-5 h-5" />,
        color: "text-[#F7DF1E]",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-5 h-5" />,
        color: "text-[#3178C6]",
      },
      // Styling
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-5 h-5" />,
        color: "text-[#38bdf8]",
      },
      {
        name: "Sass",
        icon: <SiSass className="w-5 h-5" />,
        color: "text-[#be6090]",
      },
      {
        name: "Ant Design",
        icon: (
          <img
            src="/icons/ant-icon.svg"
            alt="Ant Design"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
      // Animation
      {
        name: "GSAP",
        icon: <SiGsap className="w-5 h-5" />,
        color: "text-[#12e54e]",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      // Runtime & Language
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-5 h-5" />,
        color: "text-[#5FA04E]",
      },
      {
        name: "Go",
        icon: <SiGo className="w-5 h-5" />,
        color: "text-[#00ACD7]",
      },
      {
        name: "Python",
        icon: <SiPython className="w-5 h-5" />,
        color: "text-[#3776AB]",
      },
      // Relational DB
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-5 h-5" />,
        color: "text-[#4169E1]",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="w-5 h-5" />,
        color: "text-[#4479A1]",
      },
      // NoSQL & BaaS
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-5 h-5" />,
        color: "text-[#47A248]",
      },
      {
        name: "Firebase",
        icon: <IoLogoFirebase className="w-5 h-5" />,
        color: "text-[#ffa000]",
      },
    ],
  },
  {
    category: "Testing",
    items: [
      // Functional / E2E
      {
        name: "UFT One",
        icon: (
          <img
            src="/icons/uft-icon.png"
            alt="UFT One"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
      {
        name: "Katalon",
        icon: (
          <img
            src="/icons/katalon-icon.svg"
            alt="Katalon"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
      {
        name: "TestNG",
        icon: (
          <img
            src="/icons/testng-icon.webp"
            alt="TestNG"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
      {
        name: "Jest",
        icon: <SiJest className="w-5 h-5" />,
        color: "text-[#C21325]",
      },
      {
        name: "Playwright",
        icon: (
          <img
            src="/icons/playwright-icon.svg"
            alt="Playwright"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
      // API Testing
      {
        name: "Postman",
        icon: <SiPostman className="w-5 h-5" />,
        color: "text-[#FF6C37]",
      },
      {
        name: "Insomnia",
        icon: <SiInsomnia className="w-5 h-5" />,
        color: "text-[#6e5fc1]",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      // Version Control & CI/CD
      {
        name: "Git",
        icon: <SiGit className="w-5 h-5" />,
        color: "text-[#F05032]",
      },
      {
        name: "Jenkins",
        icon: (
          <img
            src="/icons/jenkins-icon.png"
            alt="Jenkins"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
      {
        name: "Docker",
        icon: <SiDocker className="w-5 h-5" />,
        color: "text-[#2496ED]",
      },
      // Project Management
      {
        name: "Jira",
        icon: <SiJira className="w-5 h-5" />,
        color: "text-[#2e87ff]",
      },
      // Design
      {
        name: "Figma",
        icon: (
          <img
            src="/icons/figma-icon.svg"
            alt="Figma"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
      {
        name: "Adobe Photoshop",
        icon: <DiPhotoshop className="w-5 h-5" />,
        color: "text-[#37abff]",
      },
      {
        name: "Adobe Illustrator",
        icon: <DiIllustrator className="w-5 h-5" />,
        color: "text-[#ff9d08]",
      },
      {
        name: "Aseprite",
        icon: (
          <img
            src="/icons/aseprite-icon.png"
            alt="Aseprite"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
      // Database & Cloud
      {
        name: "DBeaver",
        icon: (
          <img
            src="/icons/dbeaver-icon.png"
            alt="DBeaver"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
      {
        name: "Cloud Data Fusion",
        icon: (
          <img
            src="/icons/gcp-icon.png"
            alt="Cloud Data Fusion"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
      // Editor
      {
        name: "VSCode",
        icon: <VscVscode className="w-5 h-5" />,
        color: "text-[#007ACC]",
      },
    ],
  },
  {
    category: "Currently Learning",
    items: [
      // AI & Automation
      {
        name: "n8n",
        icon: <SiN8N className="w-5 h-5" />,
        color: "text-[#EA4B71]",
      },
      {
        name: "OpenAI API",
        icon: <SiOpenai className="w-5 h-5" />,
        color: "text-[#74AA9C]",
      },
      {
        name: "Claude API",
        icon: <SiClaude className="w-5 h-5" />,
        color: "text-[#d77655]",
      },
      {
        name: "Ollama",
        icon: <SiOllama className="w-5 h-5" />,
        color: "text-zinc-100",
      },
      {
        name: "OpenClaw",
        icon: (
          <img
            src="/icons/openclaw-icon.png"
            alt="OpenClaw"
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 object-contain"
          />
        ),
        color: "",
      },
    ],
  },
];

function TechGroup({ group }: { group: (typeof techStack)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();
  const hasMore = group.items.length > PREVIEW_COUNT;
  const visible = expanded ? group.items : group.items.slice(0, PREVIEW_COUNT);
  const hiddenCount = group.items.length - PREVIEW_COUNT;

  return (
    <div className="p-4 md:p-5" style={{ backgroundColor: "var(--bg-card)" }}>
      <p
        className="text-[10px] uppercase tracking-widest mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        {group.category}
      </p>

      <div className="flex flex-col gap-3">
        {/* Always visible items */}
        {group.items.slice(0, PREVIEW_COUNT).map((item) => {
          let iconEl = item.icon;
          if (item.name === "TestNG") {
            iconEl = (
              <img
                src={
                  theme === "light"
                    ? "/icons/testng-icon-light.webp"
                    : "/icons/testng-icon.webp"
                }
                alt="TestNG"
                width={20}
                height={20}
                loading="lazy"
                className="w-5 h-5 object-contain"
              />
            );
          } else if (item.name === "Next.js" && theme === "light") {
            iconEl = (
              <span className="w-5 h-5 flex items-center justify-center text-[#09090b]">
                {item.icon}
              </span>
            );
          } else if (item.name === "Ollama" && theme === "light") {
            iconEl = (
              <span className="w-5 h-5 flex items-center justify-center text-[#09090b]">
                {item.icon}
              </span>
            );
          } else if (item.name === "Katalon") {
            iconEl = (
              <img
                src={
                  theme === "light"
                    ? "/icons/katalon-icon-light.svg"
                    : "/icons/katalon-icon.svg"
                }
                alt="Katalon"
                width={20}
                height={20}
                loading="lazy"
                className="w-5 h-5 object-contain"
              />
            );
          }
          return (
            <div
              key={item.name}
              className="flex items-center gap-2.5 group cursor-default"
            >
              <span
                className={`${item.name === "Next.js" && theme === "light" ? "" : item.color} opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0`}
              >
                {iconEl}
              </span>
              <span
                className="text-xs transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.name}
              </span>
            </div>
          );
        })}

        {/* Expandable items */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="extra"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-3">
                {group.items.slice(PREVIEW_COUNT).map((item, i) => {
                  let iconEl = item.icon;
                  if (item.name === "TestNG") {
                    iconEl = (
                      <img
                        src={
                          theme === "light"
                            ? "/icons/testng-icon-light.webp"
                            : "/icons/testng-icon.webp"
                        }
                        alt="TestNG"
                        width={20}
                        height={20}
                        loading="lazy"
                        className="w-5 h-5 object-contain"
                      />
                    );
                  } else if (item.name === "Next.js" && theme === "light") {
                    iconEl = (
                      <span className="w-5 h-5 flex items-center justify-center text-[#09090b]">
                        {item.icon}
                      </span>
                    );
                  } else if (item.name === "Ollama" && theme === "light") {
                    iconEl = (
                      <span className="w-5 h-5 flex items-center justify-center text-[#09090b]">
                        {item.icon}
                      </span>
                    );
                  } else if (item.name === "Katalon") {
                    iconEl = (
                      <img
                        src={
                          theme === "light"
                            ? "/icons/katalon-icon-light.svg"
                            : "/icons/katalon-icon.svg"
                        }
                        alt="Katalon"
                        width={20}
                        height={20}
                        loading="lazy"
                        className="w-5 h-5 object-contain"
                      />
                    );
                  }
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      className="flex items-center gap-2.5 group cursor-default"
                    >
                      <span
                        className={`${item.name === "Next.js" && theme === "light" ? "" : item.color} opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0`}
                      >
                        {iconEl}
                      </span>
                      <span
                        className="text-xs transition-colors"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {hasMore && (
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-[10px] uppercase tracking-widest transition-colors hover:opacity-80 flex items-center gap-1"
          style={{ color: "var(--text-muted)" }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="inline-block"
          >
            ↓
          </motion.span>
          {expanded ? `hide ${hiddenCount}` : `${hiddenCount} more`}
        </motion.button>
      )}
    </div>
  );
}

export default function TechStack() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-px"
      style={{ backgroundColor: "var(--border)" }}
    >
      {techStack.map((group) => (
        <TechGroup key={group.category} group={group} />
      ))}
    </div>
  );
}
