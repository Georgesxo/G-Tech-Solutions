
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useIsMobile } from '../../hooks/useIsMobile'
import '../Header/Header.css'

interface HeaderProps {
  onProfessionalsClick: () => void
  onContactClick: () => void
  onNavigateHome?: () => void
}

export function Header({
  onProfessionalsClick,
  onContactClick,
  onNavigateHome,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const handleNavClick = (callback: () => void) => {
    callback()
    setMobileMenuOpen(false)
  }

  // Scroll helpers — always find the element by id so the correct
  // section is targeted regardless of what the parent's ref points to.
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Navigate to a section, handling legal pages by going home first
  const navigateTo = (callback: () => void) => {
    if (onNavigateHome) {
      onNavigateHome()
      // Small delay to ensure page switch before scrolling
      setTimeout(callback, 100)
    } else {
      callback()
    }
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header-container">

        {/* ── Logo ── */}
        <div className="logo-section">
          <a
            href="#"
            className="logo"
            onClick={(e) => { e.preventDefault(); navigateTo(() => window.scrollTo({ top: 0, behavior: 'smooth' })) }}
          >
            <img src="/images/logo.png" alt="G-Tech Freelancers Logo" className="logo-image" />
            <span className="company-name">G-Tech Freelancers</span>
          </a>
        </div>

        {isMobile ? (
          <>
            {/* Mobile header bar: CTA + hamburger */}
            <div className="mobile-header-actions">
              <a href="#contact" className="header-cta mobile-cta" onClick={onContactClick}>
                Get Started
              </a>
              <button
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>

            {/* Full-screen overlay */}
            {mobileMenuOpen && (
              <nav className="mobile-nav" role="dialog" aria-modal="true" aria-label="Navigation">

                <div className="mobile-nav-header">
                  <a
                    href="#"
                    className="mobile-nav-logo"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(() => navigateTo(() => window.scrollTo({ top: 0, behavior: 'smooth' })))
                    }}
                  >
                    <img
                      src="/images/logo.png"
                      alt="G-Tech Freelancers Logo"
                      className="mobile-nav-logo-image"
                    />
                    <span className="mobile-nav-logo-name">G-Tech Freelancers</span>
                  </a>
                  <button
                    className="mobile-nav-close"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="mobile-nav-links">
                  <a
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(() => navigateTo(() => window.scrollTo({ top: 0, behavior: 'smooth' })))
                    }}
                  >
                    Home
                  </a>

                  {/* FIX: scrolls to id="about" (the mvv-section in Hero.tsx) */}
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(() => navigateTo(() => scrollTo('about')))
                    }}
                  >
                    About Us
                  </a>

                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(() => navigateTo(() => scrollTo('services')))
                    }}
                  >
                    Services
                  </a>

                  <a
                    href="#why"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(() => navigateTo(() => scrollTo('why')))
                    }}
                  >
                    Why G-Tech
                  </a>

                  <a
                    href="#professionals"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(() => navigateTo(onProfessionalsClick))
                    }}
                  >
                    Our Team
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(() => navigateTo(onContactClick))
                    }}
                  >
                    Contact
                  </a>
                </div>

                <div className="mobile-nav-cta">
                  <a
                    href="#contact"
                    className="contact-button-mobile"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(onContactClick)
                    }}
                  >
                    Get Started
                  </a>
                </div>

              </nav>
            )}
          </>
        ) : (
          <nav className="desktop-nav">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); navigateTo(() => window.scrollTo({ top: 0, behavior: 'smooth' })) }}
            >
              Home
            </a>

            {/* FIX: scrolls to id="about" (the mvv-section in Hero.tsx) */}
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                navigateTo(() => scrollTo('about'))
              }}
            >
              About US
            </a>

            <a 
              href="#services" 
              onClick={(e) => { 
                e.preventDefault()
                navigateTo(() => scrollTo('services'))
              }}
            >
              Services
            </a>

            <a
              href="#why"
              onClick={(e) => {
                e.preventDefault()
                navigateTo(() => scrollTo('why'))
              }}
            >
              Why G-Tech
            </a>

            <a href="#professionals" onClick={(e) => { e.preventDefault(); navigateTo(onProfessionalsClick) }}>Our Team</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo(onContactClick) }}>Contact</a>
            <a href="#contact" className="header-cta" onClick={(e) => { e.preventDefault(); navigateTo(onContactClick) }}>Get Started</a>
          </nav>
        )}

      </div>
    </header>
  )
}
