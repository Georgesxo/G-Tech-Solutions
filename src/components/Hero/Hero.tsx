import { motion } from 'motion/react'
import { ArrowRight, Zap, Target, Heart, ChevronRight, Users, Briefcase, Award, TrendingUp } from 'lucide-react'
import { COMPANY_INFO } from '../../constants'
import { useIsMobile } from '../../hooks/useIsMobile'
import '../Hero/Hero.css'

interface HeroProps {
  onGetStartedClick: () => void
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay }
  })
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay }
  })
}

export function Hero({ onGetStartedClick }: HeroProps) {
  const isMobile = useIsMobile()

  const handleLearnMore = () => {
    const element = document.getElementById('about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero-container" id="hero">
      {/* Main Hero Banner */}
      <section className="hero-banner">
        {/* Animated Background */}
        <div className="hero-bg-animated">
          <motion.div
            className="hero-orb hero-orb--1"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero-orb hero-orb--2"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="hero-orb hero-orb--3"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
          <div className="hero-grid-pattern"></div>
        </div>

        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 212, 170, 0.15)' }}
          >
            <Zap size={14} />
            <span>Professional Outsourcing Solutions</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Outsourcing <span className="gradient-text">Excellence</span>,
            <br />Delivering Results
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Connect with top-tier professionals to execute your projects
            with precision, quality, and unmatched dedication
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.button
              className="hero-cta-primary"
              onClick={onGetStartedClick}
              whileHover={{ scale: 1.08, y: -5, boxShadow: '0 20px 40px rgba(0, 212, 170, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get Started <ArrowRight size={18} />
            </motion.button>
            <motion.button
              className="hero-cta-secondary"
              onClick={handleLearnMore}
              whileHover={{ scale: 1.08, y: -3, borderColor: 'rgba(0, 212, 170, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Learn More <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="hero-stats-bar"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {[
            { icon: <Briefcase size={20} />, number: '50+', label: 'Projects Delivered' },
            { icon: <Users size={20} />, number: '45+', label: 'Happy Clients' },
            { icon: <Award size={20} />, number: '5', label: 'Specialties' },
            { icon: <TrendingUp size={20} />, number: '95%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <motion.div key={i} style={{ display: 'contents' }}>
              {i > 0 && <div className="hero-stat-divider" />}
              <motion.div
                className="hero-stat"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.12, y: -5 }}
              >
                <motion.div
                  className="hero-stat-icon"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity }}
                >
                  {stat.icon}
                </motion.div>
                <div className="hero-stat-content">
                  <motion.span
                    className="hero-stat-number"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
                  >
                    {stat.number}
                  </motion.span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Who We Are / Mission Vision Values ──
          id="about" added so the header's About link scrolls here correctly. */}
      <section className="mvv-section" id="about">
        <motion.div
          className="mvv-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.span className="section-badge section-badge--accent" variants={staggerItem}>Who We Are</motion.span>
          <motion.h2 variants={staggerItem}>Built on Strong <span className="gradient-text">Foundations</span></motion.h2>
          <motion.p className="mvv-description" variants={staggerItem}>Our mission, vision, and values drive everything we do</motion.p>
        </motion.div>

        <div className="mvv-container">
          {[
            { cls: 'mission', icon: <Target size={28} />, title: 'Our Mission', content: <p>{COMPANY_INFO.mission}</p> },
            { cls: 'vision',  icon: <Zap size={28} />,    title: 'Our Vision',  content: <p>{COMPANY_INFO.vision}</p> },
            { cls: 'values',  icon: <Heart size={28} />,  title: 'Our Values',  content: (
              <ul>{COMPANY_INFO.values.map((value, idx) => <li key={idx}>{value}</li>)}</ul>
            )},
          ].map((card, i) => (
            <motion.div
              key={card.cls}
              className={`mvv-card ${card.cls}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i * 0.2}
              variants={scaleIn}
              whileHover={{
                y: -12,
                boxShadow: '0 24px 60px rgba(0, 212, 170, 0.2)',
                borderColor: 'rgba(0, 212, 170, 0.4)'
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="mvv-icon"
                animate={{ rotate: [0, 8, -8, 0], y: [0, -4, 0] }}
                transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
              >
                {card.icon}
              </motion.div>
              <h3>{card.title}</h3>
              {card.content}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us" id="why">
        <motion.div
          className="wcu-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.span className="section-badge section-badge--accent" variants={staggerItem}>Why Us</motion.span>
          <motion.h2 variants={staggerItem}>Why Choose <span className="gradient-text">GTech Freelancers</span>?</motion.h2>
          <motion.p className="wcu-subtitle" variants={staggerItem}>We deliver exceptional results through expertise and dedication</motion.p>

          <div className={`wcu-grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {COMPANY_INFO.whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="wcu-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.1}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  borderColor: 'rgba(0, 212, 170, 0.5)',
                  boxShadow: '0 12px 32px rgba(0, 212, 170, 0.15)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="wcu-number"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
                <div className="wcu-text">
                  <h4>{reason.split(' ').slice(0, 3).join(' ')}</h4>
                  <p>{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
