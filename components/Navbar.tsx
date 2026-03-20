"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--nav-bg)" }}
    >
      <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xs tracking-widest uppercase transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          ~/portfolio & blogs
        </Link>

        {/* Desktop links */}
        <div
          className="hidden md:flex items-center gap-6 text-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:opacity-100 group"
              style={{
                color:
                  active === link.label
                    ? "var(--text-primary)"
                    : "var(--text-secondary)",
              }}
            >
              {link.label}
              {/* Active underline */}
              {active === link.label && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-[17px] left-0 right-0 h-px bg-current"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </Link>
          ))}

          <a
            href="https://github.com/alfitof"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors flex items-center gap-1.5 hover:opacity-100"
            style={{ color: "var(--text-secondary)" }}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            className="transition-colors hover:opacity-100 flex items-center justify-center"
            style={{ color: "var(--text-secondary)" }}
            whileTap={{ scale: 0.85, rotate: 20 }}
            transition={{ duration: 0.2 }}
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </motion.button>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={toggle}
            className="transition-colors"
            style={{ color: "var(--text-secondary)" }}
            whileTap={{ scale: 0.85, rotate: 20 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </motion.button>

          <motion.button
            className="transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.85 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t overflow-hidden"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg)",
            }}
          >
            <motion.div
              className="px-6 py-4 flex flex-col gap-1"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                },
                hidden: {},
              }}
            >
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.25, ease: "easeOut" },
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-2.5 text-xs transition-colors"
                    style={{
                      color:
                        active === link.label
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",
                    }}
                  >
                    {link.label}
                    {active === link.label && (
                      <span
                        className="text-[10px] tracking-widest"
                        style={{ color: "var(--text-muted)" }}
                      >
                        ●
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.25, ease: "easeOut" },
                  },
                }}
              >
                <a
                  href="https://github.com/alfitof"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 py-2.5 text-xs transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  onClick={() => setOpen(false)}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
