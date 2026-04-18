"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const getLabel = (pathname: string) => {
  if (pathname === "/") return "home";
  if (pathname === "/blog") return "blog";
  if (pathname === "/projects") return "projects";
  if (pathname.startsWith("/blog/")) return "post";
  return "loading";
};

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    setLoading(true);
    const duration = isFirst ? 1200 : 500;
    const timer = setTimeout(() => {
      setLoading(false);
      setIsFirst(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key={pathname}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--bg)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {/* Grid background sama seperti halaman utama */}
          <div
            className="fixed inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative flex flex-col items-center gap-10">
            {/* Name */}
            <motion.div
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="font-mono font-bold text-xl tracking-tight"
                style={{ color: "var(--text-heading)" }}
              >
                Alfito Febriansyah
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--text-muted)" }}
              >
                ~/{getLabel(pathname)}
              </span>
            </motion.div>

            {/* Dots */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: "var(--text-muted)" }}
                  animate={{
                    y: ["0%", "-80%", "0%"],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 0.65,
                    repeat: Infinity,
                    delay: i * 0.12,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Bottom border line */}
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-px"
              style={{ backgroundColor: "var(--border)" }}
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}