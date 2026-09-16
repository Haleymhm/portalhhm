import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolio, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProjectBySlug(slug);
    if (!project) return { title: "Project not found" };
    return {
      title: `${project.title} — Portfolio`,
      description: project.description,
    };
  });
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="section">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold uppercase">{project.title}</h1>
        <span className="text-sm uppercase text-[var(--accent)]">
          {project.category}
        </span>
        <div className="mt-6 overflow-hidden rounded shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} className="w-full" />
        </div>
        <p className="mt-6 text-sm text-gray-700">{project.description}</p>
        <p className="mt-4 text-xs text-gray-500">
          Detailed case studies coming soon.
        </p>
      </div>
    </section>
  );
}
