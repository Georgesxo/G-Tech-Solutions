import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Zap, ChevronRight, Globe, ExternalLink } from 'lucide-react'
import { COMPANY_INFO, SOCIAL_LINKS } from '../../constants'
import '../Footer/Footer.css'

interface FooterProps {
  onNavigateTo?: (page: 'privacy' | 'terms' | 'sitemap') => void
  onNavigateHome?: () => void
}

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}
const columnVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
     ease: [0.25, 0.1, 0.25, 1] as const
    }
  })
}

export function Footer({ onNavigateTo, onNavigateHome }: FooterProps) {
  const currentYear = 2024

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navigateTo = (callback: () => void) => {
    if (onNavigateHome) {
      onNavigateHome()
      // Small delay to ensure page switch before scrolling
      setTimeout(callback, 100)
    } else {
      callback()
    }
  }

  const columns = [
    {
      title: 'About Us',
      content: (
        <>
          <div className="company-logo">
            <img src="/images/logo.png" alt="G-Tech Solutions" className="footer-logo" />
            <span>{COMPANY_INFO.name}</span>
          </div>
          <p className="company-description">
            {COMPANY_INFO.tagline}
          </p>
          <p className="mission-statement">
            Connecting businesses with top-tier professionals to execute projects with excellence.
          </p>
        </>
      )
    },
    {
      title: 'Quick Links',
      content: (
        <ul className="footer-links">
          <li><a href="#hero" onClick={(e) => { e.preventDefault(); navigateTo(() => window.scrollTo({ top: 0, behavior: 'smooth' })) }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateTo(() => scrollTo('about')) }}>About US</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateTo(() => scrollTo('services')) }}>Services</a></li>
          <li><a href="#why" onClick={(e) => { e.preventDefault(); navigateTo(() => scrollTo('why')) }}>Why G-Tech</a></li>
          <li><a href="#professionals" onClick={(e) => { e.preventDefault(); navigateTo(() => scrollTo('professionals')) }}>Our Team</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo(() => scrollTo('contact')) }}>Contact</a></li>
        </ul>
      )
    },
    {
      title: 'Services',
      content: (
        <ul className="footer-links">
          <li><a href="#services">Software & Web Development</a></li>
          <li><a href="#services">Data Analytics</a></li>
          <li><a href="#services">Project Management</a></li>
          <li><a href="#services">Virtual Assistance</a></li>
        </ul>
      )
    },
    {
      title: 'Contact Us',
      content: (
        <div className="contact-info">
          <div className="contact-item">
            <Mail size={18} />
            <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>{COMPANY_INFO.address}</span>
          </div>
        </div>
      )
    }
  ]

  const socialLinks = [
    { href: SOCIAL_LINKS.linkedin, icon: <Globe size={24} />, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.twitter, icon: <ExternalLink size={24} />, label: 'Twitter' },
    { href: SOCIAL_LINKS.facebook, icon: <Zap size={24} />, label: 'Facebook' },
    { href: SOCIAL_LINKS.instagram, icon: <ChevronRight size={24} />, label: 'Instagram' },
  ]

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <motion.div
          className="footer-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              className="footer-column"
              custom={i}
              variants={columnVariant}
            >
              <h3>{col.title}</h3>
              {col.content}
            </motion.div>
          ))}

          {/* Social Media Column */}
          <motion.div className="footer-column" custom={4} variants={columnVariant}>
            <h3>Follow Us</h3>
            <div className="social-links">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  whileHover={{
                    scale: 1.25,
                    y: -4,
                    color: 'rgba(0, 212, 170, 1)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
            variants={fadeUp}     
             >
        
        <div className="footer-bottom-container">
          <p className="copyright">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onNavigateTo?.('privacy') }}>Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); onNavigateTo?.('terms') }}>Terms of Service</a>
            <span className="divider"></span>
           <a href="#sitemap" onClick={(e) => { e.preventDefault(); onNavigateTo?.('sitemap') }}></a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
