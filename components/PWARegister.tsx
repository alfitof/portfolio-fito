"use client";

import { useEffect } from "react";
import { posts } from "@/lib/posts";

export default function PWARegister() {
  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("SW registered:", reg.scope);
        })
        .catch((err) => console.error("SW error:", err));
    }

    // Pre-fetch semua halaman penting di background
    // supaya masuk cache saat online
    const pagesToCache = [
      "/projects",
      "/blog",
      ...posts.map((p) => `/blog/${p.slug}`),
    ];

    if ("serviceWorker" in navigator && navigator.onLine) {
      pagesToCache.forEach((url) => {
        fetch(url, { method: "GET", credentials: "same-origin" }).catch(
          () => {},
        );
      });
    }
  }, []);

  return null;
}
