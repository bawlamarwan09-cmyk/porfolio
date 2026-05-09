import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { CaseStudy } from "@/components/case-study/CaseStudy";

type Params = { slug: string };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title.en,
    description: project.description.en,
    openGraph: {
      title: project.title.en,
      description: project.description.en,
      images: [{ url: project.cover, width: 1600, height: 900, alt: project.title.en }]
    },
    twitter: {
      card: "summary_large_image",
      title: project.title.en,
      description: project.description.en,
      images: [project.cover]
    }
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();
  return <CaseStudy project={project} />;
}
