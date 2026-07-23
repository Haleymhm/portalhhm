"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 100);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href="#"
      aria-label="Scroll to top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`scroll-top fixed right-5 bottom-5 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white opacity-0 transition-opacity duration-300 ${
        visible ? "!opacity-100" : "pointer-events-none"
      }`}
    >
      <i className="bi bi-arrow-up-short text-xl" />
    </a>
  );
}
