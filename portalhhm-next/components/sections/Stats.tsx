"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/data/stats";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="stats section">
      <div ref={ref} className="container mx-auto">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stats-item flex flex-col items-center justify-start gap-2 border-b border-blue-100 px-4 py-8 text-center sm:border-b-0 sm:border-l sm:border-blue-50 sm:first:border-l-0"
            >
              <i className={`bi ${s.icon} text-3xl text-[var(--accent)]`} />
              <span className="text-4xl font-bold text-gray-800">
                {inView ? (
                  <CountUp
                    end={s.end}
                    duration={s.duration}
                    start={0}
                    enableScrollSpy={false}
                  />
                ) : (
                  0
                )}
              </span>
              <p className="text-sm uppercase tracking-wide">
                <strong>{s.label}</strong>{" "}
                <span className="block text-gray-500 normal-case">{s.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
