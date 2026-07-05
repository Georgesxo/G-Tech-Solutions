import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import './FAQSection.css'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What services does G-Tech Freelancers provide?',
    answer: 'We support businesses with tailored digital solutions, including website & software development, product & project strategy, technical implementation, Creative designing & directing, Data analysis & Business intelligence, Virtual assistance and ongoing support to help teams launch and grow with confidence.'
  },
  {
    question: 'Can you work within my budget?',
    answer: 'Yes. We tailor our approach to fit your budget and priorities while maintaining quality, clarity, and reliable delivery throughout the project.'
  },
  {
    question: 'Do you work with clients remotely?',
    answer: 'Absolutely. We work with clients across locations and use clear communication, structured delivery, and collaborative processes to keep projects moving smoothly.'
  },
  {
    question: 'How do you ensure quality and consistency?',
    answer: 'Our team combines specialized expertise with shared support and accountability, which helps us deliver consistent results and reduce avoidable delays.'
  },
  {
    question: 'What type of clients do you typically work with?',
    answer: 'We work with founders, growing businesses, and teams that need dependable support for digital projects, product execution, and operational improvements.'
  },
  {
    question: 'How do I get started?',
    answer: 'You can get in touch through our contact form or by reaching out directly. We will review your goals, discuss the scope, and recommend the best next step.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <motion.div
          className="faq-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <span className="section-badge section-badge--accent">Frequently Asked Questions</span>
          <h2>
            Questions we hear often<span className="gradient-text"></span>
          </h2>
          <p>
            Here are some of the most common questions clients ask before starting a project with us.
          </p>
        </motion.div>

        <motion.div
          className="faq-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } }
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setOpenIndex(isOpen ? null : index)
                  }
                }}
              >
                <div className="faq-item__header">
                  <h3>{faq.question}</h3>
                  <span className={`faq-icon ${isOpen ? 'faq-icon--open' : ''}`}>
                    <ChevronDown size={18} />
                  </span>
                </div>
                <div className={`faq-item__answer ${isOpen ? 'faq-item__answer--open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
