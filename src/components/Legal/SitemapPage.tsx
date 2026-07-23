import { useEffect } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Home, Users, Briefcase, MessageSquare, Shield } from 'lucide-react'
import './LegalPage.css'

interface SitemapPageProps {
  onNavigateHome: () => void
  onProfessionalsClick: () => void
  onContactClick: () => void
  onNavigateTo?: (page: 'privacy' | 'terms' | 'sitemap') => void
}

export function SitemapPage({
  onNavigateHome,
  onProfessionalsClick,
  onContactClick,
  onNavigateTo,
}: SitemapPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const scrollTo = (id: string) => {
    onNavigateHome()
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const sitemapLinks = [
    {
      category: 'Main Pages',
      icon: <Home size={24} />,
      links: [
        { label: 'Home', id: 'hero', onClick: () => scrollTo('hero') },
        { label: 'Who We Are', id: 'about', onClick: () => scrollTo('about') },
      ]
    },
    {
      category: 'Services',
      icon: <Briefcase size={24} />,
      links: [
        { label: 'Services', id: 'services', onClick: () => scrollTo('services') },
        { label: 'Software & Web Development', id: 'services', onClick: () => scrollTo('services') },
        { label: 'Virtual Assistance', id: 'services', onClick: () => scrollTo('services') },
        { label: 'Data Analytics', id: 'services', onClick: () => scrollTo('services') },
        { label: 'Project Management', id: 'services', onClick: () => scrollTo('services') },
      ]
    },
    {
      category: 'Professional Services',
      icon: <Users size={24} />,
      links: [
        { label: 'Our Team', id: 'professionals', onClick: () => scrollTo('professionals') },
        { label: 'Why GTech', id: 'why', onClick: () => scrollTo('why') },
      ]
    },
    {
      category: 'Engagement',
      icon: <MessageSquare size={24} />,
      links: [
        { label: 'Contact', id: 'contact', onClick: () => scrollTo('contact') },
        { label: 'Get Started', id: 'contact', onClick: () => scrollTo('contact') },
      ]
    },
    {
      category: 'Legal & Compliance',
      icon: <Shield size={24} />,
      links: [
        { label: 'Privacy Policy', onClick: () => onNavigateTo?.('privacy') },
        { label: 'Terms of Service', onClick: () => onNavigateTo?.('terms') },
      ]
    }
  ]

  return (
    <div className="app">
      <Header
        onProfessionalsClick={onProfessionalsClick}
        onContactClick={onContactClick}
        onNavigateHome={onNavigateHome}
      />

      <main className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1>Sitemap</h1>
          </div>

          <div className="legal-page-content sitemap-page-content">
            <p className="sitemap-intro">
              Welcome to the GTech Freelancers sitemap. Below is a comprehensive list of all
              major pages and sections on our website.
            </p>

            <div className="sitemap-page-grid">
              {sitemapLinks.map((section) => (
                <div key={section.category} className="sitemap-page-section">
                  <div className="sitemap-page-section-header">
                    {section.icon}
                    <h3>{section.category}</h3>
                  </div>
                  <ul className="sitemap-page-links">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a href="#" onClick={(e) => { e.preventDefault(); link.onClick() }}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="sitemap-page-additional">
              <h3>Additional Information</h3>
              <p>
                <strong>Location:</strong> Accra, Ghana, West Africa
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:gtechfreelancers@gmail.com">
                  gtechfreelancers@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+233059377837">+233 (059) 377-8377</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigateTo={onNavigateTo} onNavigateHome={onNavigateHome} />
    </div>
  )
}
