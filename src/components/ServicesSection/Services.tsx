import { motion } from 'motion/react'
import { CheckCircle, Code2, Globe, BarChart3, Sparkles } from 'lucide-react'
import { SERVICES } from '../../constants'
import './Services.css'

const iconMap: Record<string, React.ReactNode> = {
  'CheckCircle': <CheckCircle size={32} strokeWidth={1.5} />,
  'Code2': <Code2 size={32} strokeWidth={1.5} />,
  'Globe': <Globe size={32} strokeWidth={1.5} />,
  'BarChart3': <BarChart3 size={32} strokeWidth={1.5} />,
  'Sparkles': <Sparkles size={32} strokeWidth={1.5} />
  
}

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

export function Services() {
  // Duplicate services for seamless infinite scroll
  const duplicatedServices = [...SERVICES, ...SERVICES]

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.span
            className="section-badge section-badge--accent"
            variants={staggerItem}
          >
            Our Services
          </motion.span>

          <motion.h2 variants={staggerItem}>
            What We <span className="gradient-text">Offer</span>
          </motion.h2>

          <motion.p className="services-subtitle" variants={staggerItem}>
            Comprehensive solutions tailored to drive your business forward
          </motion.p>
        </motion.div>

        {/* Infinite Scroll Services Carousel */}
        <motion.div
          className="services-scroll-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="services-scroll-container">
            <motion.div 
              className="services-scroll"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {duplicatedServices.map((service, index) => (
                <motion.div
                  key={`${service.id}-${index}`}
                  className="service-scroll-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="service-scroll-icon"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {iconMap[service.icon] || <Code2 size={24} strokeWidth={1.5} />}
                  </motion.div>
                  <h4>{service.title}</h4>
                  <p className="service-scroll-description">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
