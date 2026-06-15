import { motion } from 'motion/react'
import { ScrollReelTestimonials } from '@/components/ui'
import { TESTIMONIALS } from '../../constants'
import './Testimonials.css'

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

export function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.span
            className="section-badge section-badge--accent"
            variants={staggerItem}
            whileHover={{ scale: 1.1 }}
          >
            Client Testimonials
          </motion.span>

          <motion.h2 variants={staggerItem}>
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>

          <motion.p className="testimonials-subtitle" variants={staggerItem}>
            Real feedback from businesses we've partnered with and helped succeed
          </motion.p>
        </motion.div>

        <motion.div
          className="testimonials-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerItem}
        >
          <ScrollReelTestimonials testimonials={TESTIMONIALS} charStaggerMs={5} />
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
