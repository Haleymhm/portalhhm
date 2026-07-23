"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { profile } from "@/data/profile";

export default function Hero() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const instance = new Typed(ref.current, {
      strings: profile.typedRoles,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
    return () => instance.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="hero section dark relative flex min-h-[100vh] items-end justify-start bg-sidebar text-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={profile.heroBackground}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative z-10 container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold tracking-wide md:text-6xl">
          {profile.name}
        </h2>
        <p className="mt-3 text-lg md:text-xl">
          I&apos;m{" "}
          <span
            ref={ref}
            className="typed text-[var(--accent)] font-semibold"
          />
        </p>
      </div>
    </section>
  );
}
