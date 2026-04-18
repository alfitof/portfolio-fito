"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function GridBackground() {
  const { theme } = useTheme();

  const color =
    theme === "light" ? "rgba(0,0,0,0.025)" : "rgba(255,255,255,0.01)";

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(${color} 1px, transparent 1px),
          linear-gradient(90deg, ${color} 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px",
      }}
    />
  );
}
