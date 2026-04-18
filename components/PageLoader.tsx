"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const getLabel = (pathname: string) => {
  if (pathname === "/") return "home";
  if (pathname === "/blog") return "blog";
  if (pathname === "/projects") return "projects";
  if (pathname.startsWith("/blog/")) return "post";
  return "...";
};

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    setLoading(true);

    const duration = isFirst ? 1000 : 600;
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
          className="fixed inset-0 z-[9999] flex"
          initial="initial"
          exit="exit"
        >
          <motion.div
            className="relative w-1/2 h-full flex items-center justify-end pr-8 md:pr-16"
            style={{ backgroundColor: "var(--bg)" }}
            variants={{
              initial: { x: 0 },
              exit: {
                x: "-100%",
                transition: {
                  duration: 0.6,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.1,
                },
              },
            }}
          >
            <motion.div
              className="flex flex-col items-end gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span
                className="font-mono font-bold text-2xl md:text-3xl tracking-tight"
                style={{ color: "var(--text-heading)" }}
              >
                Alfito
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                ~/portfolio
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: "var(--border)" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{
              scaleY: 0,
              originY: 0,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.div
            className="relative w-1/2 h-full flex items-center justify-start pl-8 md:pl-16"
            style={{ backgroundColor: "var(--bg-card)" }}
            variants={{
              initial: { x: 0 },
              exit: {
                x: "100%",
                transition: {
                  duration: 0.6,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.1,
                },
              },
            }}
          >
            <motion.div
              className="flex flex-col items-start gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span
                className="font-mono font-bold text-2xl md:text-3xl tracking-tight"
                style={{ color: "var(--text-heading)" }}
              >
                Febriansyah
              </span>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--text-secondary)" }}
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  {getLabel(pathname)}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ backgroundColor: "var(--border)" }}
          >
            <motion.div
              className="h-full"
              style={{ backgroundColor: "var(--text-secondary)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: isFirst ? 0.9 : 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
