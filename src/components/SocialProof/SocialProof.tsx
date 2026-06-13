import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, TrendingUp, Users, Award } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import type { CarouselApi } from '@/components/ui/carousel'
import './SocialProof.css'

interface ProofItem {
  icon: React.ReactNode
  stat: string
  label: string
  description: string
}

const proofItems: ProofItem[] = [
  {
    icon: <Star size={32} />,
    stat: '4.9/5',
    label: 'Client Rating',
    description: 'Based on 150+ reviews'
  },
  {
    icon: <Users size={32} />,
    stat: '500+',
    label: 'Clients Served',
    description: 'Across 25+ countries'
  },
  {
    icon: <TrendingUp size={32} />,
    stat: '95%',
    label: 'Project Success',
    description: 'On-time delivery rate'
  },
  {
    icon: <Award size={32} />,
    stat: '12',
    label: 'Industry Awards',
    description: 'For excellence & innovation'
  }
]

const clientLogos = [
  'TechCorp',
  'DataFlow',
  'InnovateLabs',
  'GlobalHub',
  'ProScale',
  'NextGen',
  'CloudBase',
  'NexaGroup',
  'Orbitix',
  'StackWave',
]

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

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
    }
  })
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
}

// ── Infinite scroll carousel (from 21st.dev) ──────────────────────────
function ClientCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0)
        api.scrollTo(0)
      } else {
        api.scrollNext()
        setCurrent((c) => c + 1)
      }
    }, 1800)

    return () => clearTimeout(timer)
  }, [api, current])

  return (
    <Carousel setApi={setApi} className="w-full">
      <CarouselContent>
        {clientLogos.map((name, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
          >
            <div className="client-logo-card">
              {name}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

// ── Main SocialProof section ──────────────────────────────────────────
export function SocialProof() {
  return (
    <section className="social-proof" id="social-proof">
      <div className="proof-container">

        {/* Header */}
        <motion.div
          className="proof-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.span
            className="proof-badge"
            variants={staggerItem}
            whileHover={{ scale: 1.1 }}
          >
            Why Trust Us
          </motion.span>
          <motion.h2 variants={staggerItem}>
            Proven Excellence & Results
          </motion.h2>
          <motion.p className="proof-subtitle" variants={staggerItem}>
            Trusted by leading enterprises to deliver exceptional results consistently
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <div className="proof-grid">
          {proofItems.map((item, index) => (
            <motion.div
              key={index}
              className="proof-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={index}
              variants={cardVariant}
              whileHover={{
                y: -12,
                boxShadow: '0 24px 48px rgba(0, 212, 170, 0.2)',
                borderColor: 'rgba(0, 212, 170, 0.4)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="proof-icon"
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, delay: index * 0.5, repeat: Infinity }}
              >
                {item.icon}
              </motion.div>
              <motion.div
                className="proof-stat"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {item.stat}
              </motion.div>
              <div className="proof-label">{item.label}</div>
              <p className="proof-description">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="proof-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Infinite Scroll Client Logos */}
        <motion.div
          className="clients-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <p className="clients-label">Trusted by Industry Leaders</p>
          <ClientCarousel />
        </motion.div>

      </div>
    </section>
  )
}
