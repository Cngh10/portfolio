import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Layout className="h-8 w-8 mb-4 text-primary" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Server className="h-8 w-8 mb-4 text-primary" />,
    skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
  },
  {
    id: 3,
    title: "Database",
    icon: <Database className="h-8 w-8 mb-4 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma", "Supabase"],
  },
  {
    id: 4,
    title: "UI/UX Design",
    icon: <Palette className="h-8 w-8 mb-4 text-primary" />,
    skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Wireframing"],
  },
  {
    id: 5,
    title: "DevOps",
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    skills: ["Git", "GitHub", "CI/CD", "Docker", "AWS", "Vercel", "Netlify"],
  },
  {
    id: 6,
    title: "Other",
    icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
    skills: ["SEO", "Performance Optimization", "Accessibility", "Testing", "Agile Methodology"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Skills</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.id} delay={150 * (index + 1)}>
              <div className="bg-background p-6 rounded-lg shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  {category.icon}
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
