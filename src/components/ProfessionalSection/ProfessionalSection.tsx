import { motion } from 'motion/react'
import { PROFESSIONALS } from '../../constants'
import type { Professional } from '../../types'
import { useIsMobile } from '../../hooks/useIsMobile'
import '../ProfessionalSection/ProfessionalSection.css'

interface ProfessionalSectionProps {
  onProfessionalClick: (professional: Professional) => void
}

// Enhanced stagger animations for Professional section
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

// Card entrance animation
const cardEnter = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7, 
      delay: index * 0.15
    }
  })
}

const getProfileLinkLabel = (id: number) => {
  return [1, 2, 4].includes(id) ? 'View LinkedIn Profile' : 'View Portfolio Profile'
}

export function ProfessionalSection({ onProfessionalClick }: ProfessionalSectionProps) {
  const isMobile = useIsMobile()

  return (
    <section className="professionals-section" id="professionals">
      <div className="professionals-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          style={{ textAlign: 'center' }}
        >
          <motion.span 
            className="section-badge section-badge--accent" 
            variants={staggerItem}
            whileHover={{ scale: 1.1 }}
          >
            Our Team
          </motion.span>
          <motion.h2 
            className="professionals-title" 
            variants={staggerItem}
          >
            Our Expert <span className="gradient-text">Team</span>
          </motion.h2>
          <motion.p 
            className="professionals-subtitle" 
            variants={staggerItem}
          >
            Meet the talented professionals who bring your projects to life
          </motion.p>
        </motion.div>

        <div className={`professionals-grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {PROFESSIONALS.map((professional, index) => (
            <motion.div 
              key={professional.id}
              className="professional-card"
              onClick={() => onProfessionalClick(professional)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onProfessionalClick(professional)
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={index}
              variants={cardEnter}
              whileHover={{ 
                y: -16, 
                boxShadow: '0 28px 56px rgba(0, 212, 170, 0.25)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="professional-image-wrapper">
                <img 
                  src={professional.image} 
                  alt={professional.name}
                  className="professional-image"
                />
                <motion.div 
                  className="professional-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="view-profile-text">View Profile</span>
                </motion.div>
              </div>

              <div className="professional-info">
                <motion.h3 
                  className="professional-name"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {professional.name}
                </motion.h3>
                <motion.p 
                  className="professional-title"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {professional.title}
                </motion.p>
                <p className="professional-specialization">{professional.specialization}</p>
                <p className="professional-description">{professional.description}</p>
                <div
                  className="professional-card-cta"
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation()
                    onProfessionalClick(professional)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      e.stopPropagation()
                      onProfessionalClick(professional)
                    }
                  }}
                >
                  <span>Read more</span>
                  <span className="read-more-arrow" aria-hidden="true">→</span>
                </div>
                <p className="professional-LinkedIn">
                  <a
                    href={professional.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {getProfileLinkLabel(professional.id)}
                  </a>
                </p>
                <div className="professional-experience">
                  <span className="experience-badge">{professional.experience} Experience</span>
                </div>

                <div className="professional-skills">
                  {professional.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
