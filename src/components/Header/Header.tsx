import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useIsMobile } from '../../hooks/useIsMobile'
import '../Header/Header.css'

interface HeaderProps {
  onProfessionalsClick: () => void
  onAboutClick: () => void
  onServicesClick: () => void
  onContactClick: () => void
}

export function Header({
  onProfessionalsClick,
  onAboutClick,
  onServicesClick,
  onContactClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // FIX #6 — lock body scroll while mobile overlay is open so the
  // page cannot scroll behind the nav or the header pill.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleNavClick = (callback: () => void) => {
    callback()
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header-container">

        {/* ── Logo (desktop + mobile header bar) ── */}
        <div className="logo-section">
          <a
            href="#"
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/images/logo.png" alt="G-Tech Freelancers Logo" className="logo-image" />
            <span className="company-name">G-Tech Freelancers</span>
          </a>
        </div>

        {isMobile ? (
          <>
            {/* FIX #2 — CTA sits beside the hamburger in the header bar */}
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

            {/* FIX #4 — full-viewport overlay; z-index 1001 covers the header pill */}
            {mobileMenuOpen && (
              <nav className="mobile-nav" role="dialog" aria-modal="true" aria-label="Navigation">

                {/* FIX #1 — logo image + name are on the SAME LINE */}
                <div className="mobile-nav-header">
                  <a
                    href="#"
                    className="mobile-nav-logo"
                    onClick={() =>
                      handleNavClick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
                    }
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

                {/* Nav links */}
                <div className="mobile-nav-links">
                  <a
                    href="#home"
                    onClick={() =>
                      handleNavClick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
                    }
                  >
                    Home
                  </a>
                  <a href="#about" onClick={() => handleNavClick(onAboutClick)}>About</a>
                  <a href="#services" onClick={() => handleNavClick(onServicesClick)}>Services</a>
                  <a href="#professionals" onClick={() => handleNavClick(onProfessionalsClick)}>
                    Our Team
                  </a>
                  <a href="#contact" onClick={() => handleNavClick(onContactClick)}>Contact</a>
                </div>

                {/* FIX #3 — CTA pinned at bottom with tighter padding */}
                <div className="mobile-nav-cta">
                  <a
                    href="#contact"
                    className="contact-button-mobile"
                    onClick={() => handleNavClick(onContactClick)}
                  >
                    Get Started
                  </a>
                </div>

              </nav>
            )}
          </>
        ) : (
          <nav className="desktop-nav">
            <a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Home
            </a>
            <a href="#about" onClick={onAboutClick}>About</a>
            <a href="#services" onClick={onServicesClick}>Services</a>
            <a href="#professionals" onClick={onProfessionalsClick}>Our Team</a>
            <a href="#contact" onClick={onContactClick}>Contact</a>
            <a href="#contact" className="header-cta" onClick={onContactClick}>Get Started</a>
          </nav>
        )}

      </div>
    </header>
  )
}