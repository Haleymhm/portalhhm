"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, type Skill } from "@/data/skills";

export default function SkillsSection() {
  const left = skills.filter(
    (s) => s.category === "frontend",
  ) as Skill[];
  const right = skills.filter(
    (s) => s.category !== "frontend",
  ) as Skill[];

  return (
    <section id="skills" className="skills section light">
      <div className="container section-title mx-auto">
        <h2>Skills</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container mx-auto grid gap-8 md:grid-cols-2">
        <SkillsColumn skills={left} />
        <SkillsColumn skills={right} />
      </div>
    </section>
  );
}

function SkillsColumn({ skills }: { skills: Skill[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="skills-animation space-y-4">
      {skills.map((s) => (
        <div key={s.name} className="progress">
          <span className="skill flex justify-between text-sm font-semibold uppercase tracking-wide">
            <span>{s.name}</span>
            <i className="val">{s.value}%</i>
          </span>
          <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
            <motion.div
              className="h-full rounded-full bg-[var(--accent)]"
              initial={{ width: 0 }}
              animate={inView ? { width: `${s.value}%` } : { width: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
