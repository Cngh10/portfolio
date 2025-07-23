"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

interface NavbarProps {
  onResumeClick?: () => void
}

export function Navbar({ onResumeClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        isScrolled && "shadow-md",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl hover:text-primary transition-colors">
          My Portfolio
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden focus-ring"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors focus-ring rounded-sm px-2 py-1"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors focus-ring rounded-sm px-2 py-1"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors focus-ring rounded-sm px-2 py-1"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors focus-ring rounded-sm px-2 py-1"
          >
            Contact
          </Link>
          <ThemeToggle />
          <Button className="hover-lift" onClick={onResumeClick}>
            Resume
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden glass">
            <nav className="flex flex-col p-4 gap-4">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors focus-ring rounded-sm px-2 py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors focus-ring rounded-sm px-2 py-2"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-colors focus-ring rounded-sm px-2 py-2"
                onClick={closeMenu}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors focus-ring rounded-sm px-2 py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="flex items-center justify-between pt-2 border-t">
                <ThemeToggle />
                <Button
                  className="ml-4 flex-1"
                  onClick={() => {
                    onResumeClick?.()
                    closeMenu()
                  }}
                >
                  Resume
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
