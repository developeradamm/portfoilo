import { notFound } from "next/navigation"
import { projects } from "@/lib/projects-data"
import { ProjectDetailClient } from "@/components/project-detail-client"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
