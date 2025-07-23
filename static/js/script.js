// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")
  const themeIcon = document.getElementById("theme-icon")
  const html = document.documentElement

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem("theme") || "light"
  html.setAttribute("data-theme", currentTheme)
  updateThemeIcon(currentTheme)

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    html.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    updateThemeIcon(newTheme)
  })

  function updateThemeIcon(theme) {
    if (theme === "dark") {
      themeIcon.className = "fas fa-sun"
    } else {
      themeIcon.className = "fas fa-moon"
    }
  }

  // Typing Animation
  const typedTextElement = document.getElementById("typed-text")
  if (typedTextElement) {
    const text = "I'm a Python developer specializing in web development and data science."
    let index = 0

    function typeWriter() {
      if (index < text.length) {
        typedTextElement.innerHTML += text.charAt(index)
        index++
        setTimeout(typeWriter, 50)
      }
    }

    typeWriter()
  }

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loaded")
      }
    })
  }, observerOptions)

  // Observe all cards and sections
  document.querySelectorAll(".card, .fade-in, .fade-in-up").forEach((el) => {
    el.classList.add("loading")
    observer.observe(el)
  })

  // Auto-advance testimonial carousel
  const testimonialCarousel = document.getElementById("testimonialCarousel")
  if (testimonialCarousel) {
    const bootstrap = window.bootstrap // Declare the bootstrap variable
    const carousel = new bootstrap.Carousel(testimonialCarousel, {
      interval: 5000,
      wrap: true,
    })
  }

  // Form Validation
  const contactForm = document.querySelector('form[action*="contact"]')
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim()
      const email = document.getElementById("email").value.trim()
      const subject = document.getElementById("subject").value.trim()
      const message = document.getElementById("message").value.trim()

      if (!name || !email || !subject || !message) {
        e.preventDefault()
        alert("Please fill in all fields.")
        return false
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        e.preventDefault()
        alert("Please enter a valid email address.")
        return false
      }
    })
  }

  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.classList.add("shadow")
    } else {
      navbar.classList.remove("shadow")
    }
  })
})
