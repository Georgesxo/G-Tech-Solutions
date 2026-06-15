import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { ProfessionalSection } from './components/ProfessionalSection/ProfessionalSection'
import { ProfileDetail } from './components/ProfileDetail/ProfileDetail'
import { SocialProof } from './components/SocialProof/SocialProof'
import { Testimonials } from './components/TestimonialsSection/Testimonials'
import { ContactSection } from './components/ContactSection/ContactSection'
import { Footer } from './components/Footer/Footer'
import type { Professional } from './types'
import './App.css'

function App() {
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null)

  const handleProfessionalsClick = () => {
    const element = document.getElementById('professionals')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleAboutClick = () => {
    const element = document.getElementById('hero')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleServicesClick = () => {
    const element = document.getElementById('why')
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

  return (
    <div className="app">
      <Header
        onProfessionalsClick={handleProfessionalsClick}
        onAboutClick={handleAboutClick}
        onServicesClick={handleServicesClick}
        onContactClick={handleContactClick}
      />

      <main className="main-content">
        <Hero onGetStartedClick={handleGetStartedClick} />
        <ProfessionalSection onProfessionalClick={setSelectedProfessional} />
        <SocialProof />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />

      <ProfileDetail
        professional={selectedProfessional}
        onClose={() => setSelectedProfessional(null)}
      />
    </div>
  )
}

export default App