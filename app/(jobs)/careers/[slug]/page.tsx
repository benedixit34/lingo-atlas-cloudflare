import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JobPage from "@/components/JobPage";
import { getJob, jobs } from "@/lib/jobs";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};

  return {
    title: job.title,
    description: job.description,
    icons: { icon: [{ url: "/assets/favicon_atlas.ico", type: "image/x-icon" }] },
  };
}

export default async function CareerRolePage({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return <JobPage job={job} />;
}
