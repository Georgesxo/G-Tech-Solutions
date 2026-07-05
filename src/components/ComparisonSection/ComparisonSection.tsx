import { motion } from 'motion/react'
import {  CheckCircle2, CircleOff } from 'lucide-react'
import './ComparisonSection.css'

interface ComparisonSectionProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  ours?: string[]
  others?: string[]
}

export function ComparisonSection({
  eyebrow = 'Strategic Advantage',
  title = 'Why G-Tech Freelancers delivers more value',
  subtitle = 'We combine disciplined execution, specialist expertise, and collaborative delivery to help your business move forward with greater confidence.',
  ours = [
    'We tailor delivery to align with your budget while protecting quality, scope, and momentum.',
    'Our team comprises certified professionals with specialized expertise across critical disciplines.',
    'We operate as a unified team, enabling faster execution, stronger coordination, and better outcomes.',
    'We focus on measurable results, clear communication, and practical delivery from the outset.',
    'We remain accountable throughout the project and continue to support your success beyond launch.'
  ],
  others = [
    'Many providers offer rigid models that do not adapt well to real budgets or business priorities.',
    'Expertise is often fragmented, creating inconsistency and unnecessary delays.',
    'Work can become siloed, leading to rework and slower decision-making.',
    'Some vendors prioritize speed over strategy, which can weaken long-term results.',
    'Support often becomes inconsistent once the initial engagement is complete.'
  ]
}: ComparisonSectionProps) {
  return (
    <section className="comparison-section" id="comparison">
      <div className="comparison-container">
        <motion.div
          className="comparison-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <span className="section-badge section-badge--accent">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </motion.div>

        <motion.div
          className="comparison-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } }
          }}
        >
          <div className="comparison-card comparison-card--ours">
            <div className="comparison-card__header">
              <div className="comparison-icon comparison-icon--ours">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="comparison-card__eyebrow">Our approach</p>
                <h3>What sets us apart</h3>
              </div>
            </div>

            <ul className="comparison-list">
              {ours.map((item, index) => (
                <li key={index}>
                  <span className="comparison-list__icon comparison-list__icon--ours">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="comparison-card comparison-card--others">
            <div className="comparison-card__header">
              <div className="comparison-icon comparison-icon--others">
                <CircleOff size={20} />
              </div>
              <div>
                <p className="comparison-card__eyebrow">Typical alternatives</p>
                <h3>What clients often experience elsewhere</h3>
              </div>
            </div>

            <ul className="comparison-list">
              {others.map((item, index) => (
                <li key={index}>
                  <span className="comparison-list__icon comparison-list__icon--others">
                    <CircleOff size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        
      </div>
    </section>
  )
}

export default ComparisonSection
