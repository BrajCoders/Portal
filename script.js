// Theme Management
let isDark = true
const mousePosition = { x: 0, y: 0 }

function initTheme(body, themeIcon) {
  body.className = isDark
    ? "min-h-screen bg-black text-white relative transition-colors duration-300 dark"
    : "min-h-screen bg-white text-gray-900 relative transition-colors duration-300 light"
  themeIcon.className = isDark ? "fas fa-sun h-5 w-5" : "fas fa-moon h-5 w-5"
}

function toggleTheme(body, themeIcon) {
  isDark = !isDark
  initTheme(body, themeIcon)
  updateSpotlightColors()
}

function updateSpotlightColors() {
  const primarySpotlight = document.getElementById("spotlight-primary")
  const secondarySpotlight = document.getElementById("spotlight-secondary")
  if (!primarySpotlight || !secondarySpotlight) return
  if (isDark) {
    primarySpotlight.style.background = `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,165,0,0.15) 0%, rgba(255,140,0,0.1) 25%, transparent 50%)`
    secondarySpotlight.style.background = `radial-gradient(400px circle at ${mousePosition.x - 100}px ${mousePosition.y + 100}px, rgba(255,69,0,0.1) 0%, transparent 40%)`
  } else {
    primarySpotlight.style.background = `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,165,0,0.08) 0%, rgba(255,140,0,0.05) 25%, transparent 50%)`
    secondarySpotlight.style.background = `radial-gradient(400px circle at ${mousePosition.x - 100}px ${mousePosition.y + 100}px, rgba(255,69,0,0.05) 0%, transparent 40%)`
  }
}

function handleMouseMove(e) {
  mousePosition.x = e.clientX
  mousePosition.y = e.clientY
  updateSpotlightColors()
}

// Mouse position tracking
const mousePositio = { x: 0, y: 0 }

// Update spotlight colors based on theme
function updateSpotlightColors() {
  const primarySpotlight = document.getElementById("spotlight-primary")
  const secondarySpotlight = document.getElementById("spotlight-secondary")

  if (isDark) {
    primarySpotlight.style.background = `radial-gradient(800px circle at ${mousePositio.x}px ${mousePositio.y}px, rgba(255,165,0,0.15) 0%, rgba(255,140,0,0.1) 25%, transparent 50%)`
    secondarySpotlight.style.background = `radial-gradient(400px circle at ${mousePositio.x - 100}px ${mousePositio.y + 100}px, rgba(255,69,0,0.1) 0%, transparent 40%)`
  } else {
    primarySpotlight.style.background = `radial-gradient(800px circle at ${mousePositio.x}px ${mousePositio.y}px, rgba(255,165,0,0.08) 0%, rgba(255,140,0,0.05) 25%, transparent 50%)`
    secondarySpotlight.style.background = `radial-gradient(400px circle at ${mousePositio.x - 100}px ${mousePositio.y + 100}px, rgba(255,69,0,0.05) 0%, transparent 40%)`
  }
}

// Handle mouse movement for spotlight effect
function handleMouseMove(e) {
  mousePositio.x = e.clientX
  mousePositio.y = e.clientY
  updateSpotlightColors()
}

// Smooth scrolling for navigation links
function handleNavigation() {
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Form submission handler
function handleFormSubmission() {
  const form = document.querySelector("form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(form)
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const message = formData.get("message")

    // Simple validation
    if (!firstName || !lastName || !email || !message) {
      alert("Please fill in all fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return
    }

    // Simulate form submission
    const submitButton = form.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent

    submitButton.textContent = "Sending..."
    submitButton.disabled = true

    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.")
      form.reset()
      submitButton.textContent = originalText
      submitButton.disabled = false
    }, 2000)
  })
}

// Add scroll animations
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.2s ease, transform 0.2s ease"
    observer.observe(section)
  })
}

// Add card hover effects
function addCardEffects() {
  const cards = document.querySelectorAll(".service-card, .team-card, .project-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) translateY(-5px)"
      this.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) translateY(0)"
      this.style.boxShadow = "none"
    })
  })
}

// Add parallax effect to background elements
function addParallaxEffect() {
  let ticking = false

  function updateParallax() {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".fixed")

    parallaxElements.forEach((element) => {
      const speed = 0.5
      element.style.transform = `translateY(${scrolled * speed}px)`
    })

    ticking = false
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  })
}

// Add button interactions
function addButtonInteractions() {
  const buttons = document.querySelectorAll("button, .magic-button")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
      this.style.boxShadow = "0 4px 12px rgba(249, 115, 22, 0.3)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
    })

    // Add click ripple effect
    button.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect()
      const ripple = document.createElement("span")
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple-effect")

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
}

// Add enhanced scroll animations
function addEnhancedScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          entry.target.classList.add("animate-in")
        }, index * 50)
      }
    })
  }, observerOptions)

  // Observe all sections and cards
  const sections = document.querySelectorAll("section")
  const cards = document.querySelectorAll(".service-card, .team-card, .project-card")

  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.2s ease, transform 0.2s ease"
    observer.observe(section)
  })

  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`
    observer.observe(card)
  })
}

// Add cursor trail effect
function addCursorTrail() {
  const trail = []
  const trailLength = 10

  document.addEventListener("mousemove", (e) => {
    trail.push({ x: e.clientX, y: e.clientY })

    if (trail.length > trailLength) {
      trail.shift()
    }

    const existingTrails = document.querySelectorAll(".cursor-trail")
    existingTrails.forEach(t => t.remove())

    trail.forEach((point, index) => {
      const dot = document.createElement("div")
      dot.className = "cursor-trail"
      dot.style.cssText = `
        position: fixed;
        width: ${8 - index * 0.5}px;
        height: ${8 - index * 0.5}px;
        background: rgba(249, 115, 22, ${0.8 - index * 0.08});
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${point.x}px;
        top: ${point.y}px;
        transition: opacity 0.3s ease;
      `
      document.body.appendChild(dot)

      setTimeout(() => {
        dot.style.opacity = "0"
        setTimeout(() => dot.remove(), 300)
      }, 100)
    })
  })
}

// Add loading animation
function addLoadingAnimation() {
  window.addEventListener("load", () => {
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.5s ease"

    setTimeout(() => {
      document.body.style.opacity = "1"
    }, 100)
  })
}

// Add social media interactions
function addSocialInteractions() {
  const socialIcons = document.querySelectorAll(".fab")

  socialIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const iconClass = this.className
      let url = ""

      if (iconClass.includes("github")) {
        url = "https://github.com/BrajCoders/"
      } else if (iconClass.includes("linkedin")) {
        url = "https://linkedin.com/company/brajcoders"
      } else if (iconClass.includes("twitter")) {
        url = "https://twitter.com/brajcoders"
      }

      if (url) {
        window.open(url, "_blank")
      }
    })
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("body")
  const themeToggle = document.getElementById("theme-toggle")
  const themeIcon = document.getElementById("theme-icon")

  if (body && themeToggle && themeIcon) {
    initTheme(body, themeIcon)
    themeToggle.addEventListener("click", () => toggleTheme(body, themeIcon))
    window.addEventListener("mousemove", handleMouseMove)
    updateSpotlightColors()
  }

  // Smooth scrolling for navigation links
  handleNavigation()

  // Form submission handler
  handleFormSubmission()

  // Add scroll animations
  addScrollAnimations()
  addEnhancedScrollAnimations()

  // Add card effects
  addCardEffects()

  // Add parallax effect
  addParallaxEffect()

  // Add button interactions
  addButtonInteractions()

  // Add loading animation
  addLoadingAnimation()

  // Add social interactions
  addSocialInteractions()

  // Add cursor trail effect
  addCursorTrail()

  // Event listeners
  themeToggle.addEventListener("click", toggleTheme)
  window.addEventListener("mousemove", handleMouseMove)

  // Initialize spotlight
  updateSpotlightColors()

  // Add smooth reveal animation for hero section
  setTimeout(() => {
    const heroSection = document.getElementById("home")
    heroSection.style.opacity = "1"
    heroSection.style.transform = "translateY(0)"
  }, 200)
})

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("keyboard-navigation")
  }

  // Theme toggle with 'T' key
  if (e.key === "t" || e.key === "T") {
    if (!e.target.matches("input, textarea")) {
      toggleTheme()
    }
  }
})

document.addEventListener("mousedown", () => {
  document.body.classList.remove("keyboard-navigation")
})

// Performance optimization - throttle scroll events
function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments

    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Add error handling for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")

  images.forEach((img) => {
    img.addEventListener("error", function () {
      this.src =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, sans-serif' font-size='14'%3EImage not found%3C/text%3E%3C/svg%3E"
    })
  })
})