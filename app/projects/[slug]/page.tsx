import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/components/projects"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid gap-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="aspect-video w-full rounded-lg overflow-hidden relative">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground">
                  This is a detailed description of {project.title}. Here you would include information about the
                  project's purpose, the problem it solves, and your approach to building it. This section gives
                  visitors a comprehensive understanding of what the project is about and why it matters.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Development Process</h2>
                <p className="text-muted-foreground mb-4">
                  In this section, you can describe the development process, including the challenges you faced and how
                  you overcame them. This helps showcase your problem-solving abilities and technical skills.
                </p>
                <p className="text-muted-foreground">
                  You might want to include information about the architecture, design decisions, and any interesting
                  technical solutions you implemented. This demonstrates your thought process and expertise.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Feature one description with details about implementation</li>
                  <li>Feature two description with details about implementation</li>
                  <li>Feature three description with details about implementation</li>
                  <li>Feature four description with details about implementation</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Timeline</h4>
                    <p className="text-muted-foreground">January 2023 - March 2023</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Role</h4>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Client</h4>
                    <p className="text-muted-foreground">Personal Project</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button asChild>
                  <Link href={project.liveUrl} className="w-full">
                    <Globe className="mr-2 h-4 w-4" />
                    View Live Site
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
