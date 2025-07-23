import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">About Me</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={200}>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate full-stack developer with a strong foundation in web technologies. With over X years of
                experience, I've worked on a variety of projects ranging from small business websites to complex
                enterprise applications.
              </p>
              <p className="text-muted-foreground mb-6">
                My approach to development focuses on creating clean, efficient, and user-friendly solutions that solve
                real-world problems. I'm constantly learning and exploring new technologies to stay at the forefront of
                web development.
              </p>
              <Button size="lg">Download Resume</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
