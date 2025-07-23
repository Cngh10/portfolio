"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "I'm a full-stack developer specializing in building exceptional digital experiences."
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 50)
      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [typedText, fullText])

  return (
    <section className="relative">
      <Navbar />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="max-w-[700px] mt-4 text-lg text-muted-foreground md:text-xl h-[60px] sm:h-auto">
          {typedText}
          {!isTypingComplete && <span className="animate-blink">|</span>}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up">
          <Button asChild size="lg" className="transition-all duration-300 hover:scale-105">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="flex items-center justify-center w-10 h-10 rounded-full border transition-colors hover:bg-muted"
          >
            <ArrowDown className="h-5 w-5" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
