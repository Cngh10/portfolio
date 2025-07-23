import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, Globe, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/components/projects"

// Enhanced project data with more details
const projectDetails = {
  "ecommerce-platform": {
    overview:
      "A comprehensive e-commerce platform built with modern web technologies, featuring a responsive design, secure payment processing, and an intuitive admin dashboard. The platform supports multiple payment methods, inventory management, and real-time order tracking.",
    process:
      "The development process involved careful planning of the user experience, implementing a scalable architecture, and ensuring security best practices. We used Next.js for server-side rendering, Stripe for payment processing, and implemented a headless CMS for content management.",
    features: [
      "Responsive design that works seamlessly across all devices",
      "Secure payment processing with Stripe integration",
      "Real-time inventory management and order tracking",
      "Admin dashboard with analytics and reporting",
      "SEO-optimized product pages with dynamic meta tags",
      "Advanced search and filtering capabilities",
      "User authentication and profile management",
      "Email notifications for order updates",
    ],
    challenges:
      "One of the main challenges was implementing a scalable cart system that could handle concurrent users while maintaining data consistency. We solved this by implementing optimistic updates with proper error handling and rollback mechanisms.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma", "PostgreSQL"],
    timeline: "3 months",
    role: "Full Stack Developer",
    client: "E-commerce Startup",
  },
  "task-management-app": {
    overview:
      "A collaborative task management application designed for remote teams, featuring real-time updates, project organization, and team collaboration tools. The app helps teams stay organized and productive with intuitive task tracking and progress monitoring.",
    process:
      "Built with a focus on real-time collaboration, the app uses WebSocket connections for instant updates. The architecture emphasizes scalability and performance, with efficient data synchronization and offline support.",
    features: [
      "Real-time collaboration with instant updates",
      "Drag-and-drop task organization with Kanban boards",
      "Team member assignment and role management",
      "Project timeline and milestone tracking",
      "File attachments and comment system",
      "Mobile-responsive design for on-the-go access",
      "Integration with popular calendar applications",
      "Advanced reporting and productivity analytics",
    ],
    challenges:
      "Implementing real-time synchronization across multiple users while maintaining performance was complex. We used Socket.io for real-time communication and implemented conflict resolution algorithms for concurrent edits.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
    timeline: "4 months",
    role: "Lead Developer",
    client: "Remote Team Solutions",
  },
  "analytics-dashboard": {
    overview:
      "A comprehensive analytics dashboard that transforms complex data into actionable insights through interactive visualizations. The platform serves businesses looking to understand their data better and make informed decisions.",
    process:
      "The project involved extensive data modeling, creating efficient APIs for data retrieval, and building interactive charts that can handle large datasets. We focused on performance optimization and user experience design.",
    features: [
      "Interactive charts and graphs with D3.js",
      "Real-time data updates and live monitoring",
      "Customizable dashboard layouts and widgets",
      "Advanced filtering and data segmentation",
      "Export functionality for reports and presentations",
      "Multi-tenant architecture for different organizations",
      "Role-based access control and permissions",
      "Mobile-optimized responsive design",
    ],
    challenges:
      "Handling large datasets while maintaining smooth interactions required careful optimization. We implemented data virtualization, efficient caching strategies, and progressive loading to ensure optimal performance.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
    timeline: "5 months",
    role: "Full Stack Developer",
    client: "Data Analytics Company",
  },
  "social-media-app": {
    overview:
      "A modern social media platform built for mobile-first experiences, featuring real-time messaging, content sharing, and community building tools. The app focuses on user engagement and seamless social interactions.",
    process:
      "Developed using React Native for cross-platform compatibility, with Firebase providing backend services. The app emphasizes user experience with smooth animations, intuitive navigation, and responsive design.",
    features: [
      "Real-time messaging and chat functionality",
      "Photo and video sharing with filters",
      "User profiles and social connections",
      "Content discovery and recommendation engine",
      "Push notifications for engagement",
      "Cross-platform compatibility (iOS and Android)",
      "Offline support for core features",
      "Advanced privacy and security settings",
    ],
    challenges:
      "Optimizing performance for mobile devices while handling real-time features required careful resource management. We implemented efficient state management and optimized image/video processing for mobile networks.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
    timeline: "6 months",
    role: "Mobile Developer",
    client: "Social Media Startup",
  },
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  const details = projectDetails[params.slug as keyof typeof projectDetails]

  if (!project || !details) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 focus-ring rounded-sm px-2 py-1"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid gap-8">
          {/* Project Header */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image */}
          <div className="aspect-video w-full rounded-lg overflow-hidden relative shadow-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{details.overview}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Development Process</h2>
                <p className="text-muted-foreground leading-relaxed">{details.process}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                <p className="text-muted-foreground leading-relaxed">{details.challenges}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted text-sm rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Timeline</p>
                      <p className="text-sm text-muted-foreground">{details.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Role</p>
                      <p className="text-sm text-muted-foreground">{details.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Client</p>
                      <p className="text-sm text-muted-foreground">{details.client}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button asChild className="w-full hover-lift">
                  <Link href={project.liveUrl} target="_blank">
                    <Globe className="mr-2 h-4 w-4" />
                    View Live Site
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full hover-lift bg-transparent">
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Link>
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interested in Similar Work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'd love to help you build something amazing. Let's discuss your project!
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/#contact">Get In Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
