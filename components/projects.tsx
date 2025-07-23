import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A responsive web application built with React and Node.js",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "#",
    liveUrl: "#",
    slug: "project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "An e-commerce platform with payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    githubUrl: "#",
    liveUrl: "#",
    slug: "project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A mobile-first dashboard for data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "D3.js", "Firebase", "Material UI"],
    githubUrl: "#",
    liveUrl: "#",
    slug: "project-three",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Projects</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={200 * (index + 1)}>
              <Card className="overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={`/projects/${project.slug}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={800}>
          <div className="flex justify-center mt-12">
            <Button size="lg" variant="outline">
              View More Projects
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Export the projects data for use in other components
export { projects }
