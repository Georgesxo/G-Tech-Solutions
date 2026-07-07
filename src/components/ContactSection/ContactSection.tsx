import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { COMPANY_INFO } from '../../constants'
import './ContactSection.css'

const getErrorMessage = (e: unknown) => {
  if (e instanceof Error) return e.message
  if (typeof e === 'string') return e
  return 'Something went wrong. Please try again.'
}

// Animation variants
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

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
}

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
}

const contactCardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
    }
  })
}

const toastVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactState, setContactState] = useState<{ success: boolean; message: string } | null>(null)

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setContactState(null)

    try {
      const form = event.currentTarget
      const formData = new FormData(form)

      const payload = {
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        subject: String(formData.get('subject') ?? ''),
        message: String(formData.get('message') ?? ''),
      }

      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data: unknown = await resp.json().catch(() => null)

      if (
        !resp.ok ||
        !data ||
        typeof data !== 'object' ||
        !('ok' in data) ||
        (data as { ok: boolean }).ok !== true
      ) {
        const errorValue =
          data && typeof data === 'object' && 'error' in data
            ? (data as { error?: unknown }).error
            : null

        const errorMessage =
          typeof errorValue === 'string'
            ? errorValue
            : errorValue instanceof Error
              ? errorValue.message
              : errorValue
                ? JSON.stringify(errorValue)
                : 'Failed to send message'

        throw new Error(errorMessage)
      }

      setContactState({
        success: true,
        message: 'Message sent successfully! ✅ We\'ll get back to you shortly.',
      })

      form.reset()
    } catch (e: unknown) {
      setContactState({
        success: false,
        message: getErrorMessage(e),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Column — Info */}
        <motion.div
          className="contact-info-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideInLeft}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span
              className="section-badge section-badge--accent"
              variants={staggerItem}
              whileHover={{ scale: 1.1 }}
            >
              Get in Touch
            </motion.span>

            <motion.h2 variants={staggerItem}>
              Let's Build Something{' '}
              <span className="gradient-text">Amazing</span> Together
            </motion.h2>

            <motion.p className="contact-intro" variants={staggerItem}>
              Have a project in mind? We would love to discuss how our team of professionals
              can help bring your ideas to life. Reach out and let's get started.
            </motion.p>
          </motion.div>

          <div className="contact-info-cards">
            {[
              { icon: <Mail size={20} />, title: 'Email', content: <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a> },
              { icon: <Phone size={20} />, title: 'Phone', content: <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a> },
              { icon: <MapPin size={20} />, title: 'Location', content: <span>{COMPANY_INFO.address}</span> },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="contact-info-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={contactCardVariant}
                whileHover={{
                  y: -6,
                  boxShadow: '0 16px 32px rgba(0, 212, 170, 0.15)',
                  borderColor: 'rgba(0, 212, 170, 0.4)',
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="contact-info-icon"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, delay: index * 0.4, repeat: Infinity }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h4>{item.title}</h4>
                  {item.content}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column — Form */}
        <motion.div
          className="contact-form-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideInRight}
        >
          <motion.div
            className="contact-form-card"
            whileHover={{
              boxShadow: '0 32px 64px rgba(0, 212, 170, 0.12)',
              transition: { duration: 0.4 }
            }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Send Us a Message
            </motion.h3>

            <form onSubmit={handleContactSubmit} className="contact-form">
              <motion.div
                className="form-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="form-group">
                  <label htmlFor="contact-name">Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    autoComplete="email"
                  />
                </div>
              </motion.div>

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="contact-subject">Subject *</label>
                <input
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="How can we help?"
                />
              </motion.div>

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit-btn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: '0 16px 32px rgba(0, 212, 170, 0.3)'
                }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? (
                  <>
                    <span className="submit-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            <AnimatePresence>
              {contactState && (
                <motion.div
                  className={`contact-toast ${contactState.success ? 'contact-toast--success' : 'contact-toast--error'}`}
                  variants={toastVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {contactState.success ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  {contactState.message}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
