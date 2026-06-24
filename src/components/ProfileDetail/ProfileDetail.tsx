import { motion, AnimatePresence } from 'motion/react'
import { X, Mail, Award } from 'lucide-react'
import type { Professional } from '../../types'
import '../ProfileDetail/ProfileDetail.css'

interface ProfileDetailProps {
  professional: Professional | null
  onClose: () => void
  onScheduleClick: () => void
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } }
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 60 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 40,
    transition: { duration: 0.3 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function ProfileDetail({ professional, onClose, onScheduleClick }: ProfileDetailProps) {
  const handleSchedule = () => {
    onClose()
    onScheduleClick()
  }

  return (
    <AnimatePresence>
      {professional && (
        <motion.div
          className="profile-detail-overlay"
          onClick={onClose}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="profile-detail-modal"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              className="close-button"
              onClick={onClose}
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              className="profile-detail-content"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="profile-header" variants={staggerItem}>
                <motion.img
                  src={professional.image}
                  alt={professional.name}
                  className="profile-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  whileHover={{ scale: 1.05 }}
                />
                <div className="profile-header-info">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    {professional.name}
                  </motion.h2>
                  <motion.p
                    className="profile-title"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                  >
                    {professional.title}
                  </motion.p>
                  <motion.p
                    className="profile-specialization"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                  >
                    {professional.specialization}
                  </motion.p>
                </div>
              </motion.div>

              <motion.div className="profile-details" variants={staggerItem}>
                <motion.div className="profile-section" variants={staggerItem}>
                  <h3>About</h3>
                  <p>{professional.bio}</p>
                </motion.div>

                <motion.div className="profile-section" variants={staggerItem}>
                  <div className="section-header">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Award size={20} />
                    </motion.div>
                    <h3>Experience</h3>
                  </div>
                  <p className="experience-text">{professional.experience} in {professional.specialization}</p>
                </motion.div>

                <motion.div className="profile-section" variants={staggerItem}>
                  <h3>Skills & Expertise</h3>
                  <div className="skills-grid">
                    {professional.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="skill-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                        whileHover={{
                          scale: 1.08,
                          backgroundColor: 'rgba(0, 212, 170, 0.15)',
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.span
                          className="skill-checkmark"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.08, type: 'spring' }}
                        >
                          ✓
                        </motion.span>
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div className="profile-section" variants={staggerItem}>
                  <h3>Get In Touch</h3>
                  <motion.button
                    type="button"
                    className="contact-button"
                    onClick={handleSchedule}
                    whileHover={{
                      scale: 1.06,
                      y: -3,
                      boxShadow: '0 16px 32px rgba(0, 212, 170, 0.3)'
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Mail size={18} />
                    Schedule a Consultation
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
