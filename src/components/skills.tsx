import { Code, Database, Globe, Layout, Palette, Server, Smartphone, Cloud } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [ 
  {
    id: 1,
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "TypeScript", "Tailwind CSS"],
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: Server,
    skills: ["Python", "Django"],
    color: "text-green-500",
  },
  {
    id: 3,
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "Firebase"],
    color: "text-purple-500",
  },
  {
    id: 4,
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "PWA"],
    color: "text-pink-500",
  },
  {
    id: 5,
    title: "UI/UX Design",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing"],
    color: "text-orange-500",
  },
  {
    id: 6,
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS", "Docker"],
    color: "text-cyan-500",
  },
  {
    id: 7,
    title: "Tools & Others",
    icon: Code,
    skills: ["Git", "VS Code", "Postman", "Jest", "Webpack", "Vite"],
    color: "text-gray-500",
  },
  {
    id: 8,
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "WebGL", "WebRTC", "Service Workers"],
    color: "text-indigo-500",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Skills</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.id} delay={150 * (index + 1)}>
              <Card className="h-full hover-lift group">
                <CardHeader className="text-center pb-4">
                  <category.icon
                    className={`h-12 w-12 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
