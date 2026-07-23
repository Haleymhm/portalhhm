import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title mx-auto">
        <h2>Services</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit.
        </p>
      </div>

      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.slug}
            className="service-item flex gap-3"
          >
            <div className="icon flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-[var(--accent)]/10 text-[var(--accent)]">
              <i className={`bi ${s.icon} text-2xl`} />
            </div>
            <div>
              <h4 className="title mb-1 text-lg font-bold">
                <Link
                  href={`/services/${s.slug}`}
                  className="stretched-link hover:text-[var(--accent)]"
                >
                  {s.title}
                </Link>
              </h4>
              <p className="description text-sm text-gray-600">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
