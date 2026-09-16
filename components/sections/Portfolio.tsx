"use client";

import { useState } from "react";
import Link from "next/link";
import {
  portfolio,
  portfolioCategories,
  type PortfolioCategory,
} from "@/data/projects";

type Filter = PortfolioCategory | "all";

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("all");

  const items =
    filter === "all" ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="portfolio section light">
      <div className="container section-title mx-auto">
        <h2>Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit.
        </p>
      </div>

      <div className="container mx-auto">
        <ul className="portfolio-filters mb-8 flex flex-wrap justify-center gap-2">
          {portfolioCategories.map((c) => (
            <li
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`cursor-pointer rounded-full px-4 py-1 text-sm font-medium transition-colors ${
                filter === c.id
                  ? "bg-[var(--accent)] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {c.label}
            </li>
          ))}
        </ul>

        <div className="row-isotope grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.slug}
              className="portfolio-item overflow-hidden rounded bg-white shadow transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="portfolio-content relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-cover"
                />
                <div className="portfolio-info absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h4 className="text-lg font-bold text-white">{p.title}</h4>
                  <p className="px-3 text-center text-sm text-gray-200">
                    {p.description}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <a
                      href={p.image}
                      target="_blank"
                      rel="noreferrer"
                      title="Zoom"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <Link
                      href={`/portfolio/${p.slug}`}
                      title="More Details"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white"
                    >
                      <i className="bi bi-link-45deg" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
