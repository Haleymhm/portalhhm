"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setHidden(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  if (hidden) return null;

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[var(--accent)]" />
    </div>
  );
}
