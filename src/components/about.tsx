"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { Download, Award, Users, Coffee } from "lucide-react"
import { useState } from "react"
import { ResumePDFViewer } from "@/components/resume-pdf-viewer"

const stats = [
  { icon: Award, label: "Years Experience", value: "0-1" },
  { icon: Users, label: "Projects Completed", value: "10+" },
  { icon: Coffee, label: "Technologies Mastered", value: "15+" },
]

export function About() {
  const [showResumeViewer, setShowResumeViewer] = useState(false)

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">About Me</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection delay={200} direction="left">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary hover-lift">
                <Image
                  src="/chandan-profile.jpeg"
                  alt="Chandan Mahato - Data Enthusiast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} direction="right">
            <div>
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate Data Enthusiast and Information Science graduate skilled in Python, SQL, and AI/ML.
                With expertise in AI-driven solutions, microservices, and data pipeline optimization, I focus on
                building scalable systems for impactful business outcomes.
              </p>
              <p className="text-muted-foreground mb-6">
                Recently completed intern at Spinnaker Analytics, I'm passionate about leveraging emerging technologies to
                solve real-world problems and contribute to high-performance engineering teams. My experience spans from
                emplyee churn prediction to fraud detection using advanced machine learning techniques.
              </p>
              <Button size="lg" className="hover-lift" onClick={() => setShowResumeViewer(true)}>
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Section */}
        <AnimatedSection delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={700 + index * 100}>
                <div className="text-center p-6 rounded-lg bg-background hover-lift">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <ResumePDFViewer isOpen={showResumeViewer} onClose={() => setShowResumeViewer(false)} />
    </section>
  )
}
