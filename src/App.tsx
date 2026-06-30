import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { ProfessionalSection } from './components/ProfessionalSection/ProfessionalSection'
import { ProfileDetail } from './components/ProfileDetail/ProfileDetail'
import { SocialProof } from './components/SocialProof/SocialProof'
import { Services } from './components/ServicesSection/Services'
import { Testimonials } from './components/TestimonialsSection/Testimonials'
import { ComparisonSection } from './components/ComparisonSection/ComparisonSection'
import { ContactSection } from './components/ContactSection/ContactSection'
import { Footer } from './components/Footer/Footer'
import { PrivacyPolicyPage } from './components/Legal/PrivacyPolicyPage'
import { TermsOfServicePage } from './components/Legal/TermsOfServicePage'
import { SitemapPage } from './components/Legal/SitemapPage'
import type { Professional } from './types'
import './App.css'

function App() {
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'sitemap'>('home')

  // Handle hash changes and initial page load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove the '#'
      if (hash === 'privacy') setCurrentPage('privacy')
      else if (hash === 'terms') setCurrentPage('terms')
      else if (hash === 'sitemap') setCurrentPage('sitemap')
      else setCurrentPage('home')
    }

    // Handle initial load
    handleHashChange()
    
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleProfessionalsClick = () => {
    const element = document.getElementById('professionals')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleGetStartedClick = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNavigateToPage = (page: 'privacy' | 'terms' | 'sitemap') => {
    setCurrentPage(page)
    window.location.hash = page
  }

  const handleNavigateHome = () => {
    setCurrentPage('home')
    window.location.hash = ''
  }

  // Render legal pages
  if (currentPage === 'privacy') {
    return (
      <PrivacyPolicyPage
        onNavigateHome={handleNavigateHome}
        onProfessionalsClick={handleProfessionalsClick}
        onContactClick={handleContactClick}
        onNavigateTo={handleNavigateToPage}
      />
    )
  }

  if (currentPage === 'terms') {
    return (
      <TermsOfServicePage
        onNavigateHome={handleNavigateHome}
        onProfessionalsClick={handleProfessionalsClick}
        onContactClick={handleContactClick}
        onNavigateTo={handleNavigateToPage}
      />
    )
  }

  if (currentPage === 'sitemap') {
    return (
      <SitemapPage
        onNavigateHome={handleNavigateHome}
        onProfessionalsClick={handleProfessionalsClick}
        onContactClick={handleContactClick}
        onNavigateTo={handleNavigateToPage}
      />
    )
  }

  // Render home page
  return (
    <div className="app">
      <Header
        onProfessionalsClick={handleProfessionalsClick}
        onContactClick={handleContactClick}
        onNavigateHome={handleNavigateHome}
      />

      <main className="main-content">
        <Hero onGetStartedClick={handleGetStartedClick} />
        <ProfessionalSection onProfessionalClick={setSelectedProfessional} />
        <SocialProof />
        <Services />
        <Testimonials />
        <ComparisonSection />
        <ContactSection />
      </main>

      <Footer onNavigateTo={handleNavigateToPage} onNavigateHome={handleNavigateHome} />

      <ProfileDetail
        professional={selectedProfessional}
        onClose={() => setSelectedProfessional(null)}
        onScheduleClick={handleContactClick}
      />
    </div>
  )
}

export default App