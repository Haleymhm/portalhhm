import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) return { title: "Service not found" };
    return {
      title: `${service.title} — Services`,
      description: service.description,
    };
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <section className="section">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold uppercase">{service.title}</h1>
        <i className={`bi ${service.icon} mt-3 block text-5xl text-[var(--accent)]`} />
        <p className="mt-6 max-w-2xl text-sm text-gray-700">
          {service.description}
        </p>
      </div>
    </section>
  );
}
