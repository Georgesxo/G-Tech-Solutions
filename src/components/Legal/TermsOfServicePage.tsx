import { useEffect } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import './LegalPage.css'

interface TermsOfServicePageProps {
  onNavigateHome: () => void
  onProfessionalsClick: () => void
  onContactClick: () => void
  onNavigateTo?: (page: 'privacy' | 'terms' | 'sitemap') => void
}

export function TermsOfServicePage({
  onNavigateHome,
  onProfessionalsClick,
  onContactClick,
  onNavigateTo,
}: TermsOfServicePageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="app">
      <Header
        onProfessionalsClick={onProfessionalsClick}
        onContactClick={onContactClick}
        onNavigateHome={onNavigateHome}
      />

      <main className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1>Terms & Conditions</h1>
          </div>

          <div className="legal-page-content">
            <p className="last-updated">Last updated: June 24, 2026</p>

            <section>
              <h2>Acceptance of Terms</h2>
              <p>
                These Terms and Conditions ("Terms") govern your access to and use of{' '}
                <a href="https://www.gtechfreelancers.com">https://www.getchfreelancers.com</a> (the "Site"),
                operated by GTech Freelancers ("GTech," "we," "us," or "our"). By accessing
                or using the Site, you agree to be bound by these Terms. If you do not agree,
                please do not use the Site.
              </p>
            </section>

            <section>
              <h2>Eligibility</h2>
              <p>
                You must be at least 18 years old, or the age of majority in your jurisdiction,
                to use the Site and engage our services. By using the Site, you represent that
                you meet this requirement.
              </p>
            </section>

            <section>
              <h2>Use of the Site</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to
                access and use the Site for your personal or internal business purposes, subject
                to these Terms. All rights not expressly granted are reserved.
              </p>
            </section>

            <section>
              <h2>Intellectual Property</h2>
              <p>
                The Site and all content on it, including text, graphics, logos, design, and
                software, are owned by GTech Freelancers or its licensors and are protected by
                intellectual property laws. You may not copy, reproduce, distribute, or create
                derivative works from the Site without our prior written consent.
              </p>
            </section>

            <section>
              <h2>Professional Services</h2>
              <p>
                GTech Freelancers provides professional services including Software & Web
                development, Virtual assistance, Data analytics & Business intelligence,Project management & Automation and Creative designing & directing. Any
                engagement for these services is governed by a separate written agreement between
                you and GTech Freelancers. The Site is for informational purposes only and does
                not constitute an offer or commitment to provide services.
              </p>
            </section>

            <section>
              <h2>Prohibited Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Site in any way that violates applicable law or regulation.</li>
                <li>
                  Attempt to gain unauthorized access to the Site, its systems, or related
                  networks.
                </li>
                <li>
                  Interfere with or disrupt the Site, including by introducing malware or
                  conducting automated scraping without permission.
                </li>
                <li>
                  Use the Site to transmit unsolicited communications or infringe the rights of
                  others.
                </li>
                <li>
                  Use the Site to solicit or recruit our team members without authorization.
                </li>
              </ul>
            </section>

            <section>
              <h2>Third-Party Links and Content</h2>
              <p>
                The Site may contain links to third-party websites or resources. We do not
                control and are not responsible for the content, products, or practices of any
                third party. Accessing third-party sites is at your own risk.
              </p>
            </section>

            <section>
              <h2>Disclaimer of Warranties</h2>
              <p>
                The Site is provided "as is" and "as available" without warranties of any kind,
                whether express or implied, including warranties of merchantability, fitness for
                a particular purpose, and non-infringement. We do not warrant that the Site will
                be uninterrupted, error-free, or secure.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, GTech Freelancers and its founders,
                employees, and contractors will not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits, data, or
                goodwill, arising from your use of or inability to use the Site.
              </p>
            </section>

            <section>
              <h2>Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless GTech Freelancers and its founders,
                employees, and contractors from any claims, damages, liabilities, and expenses
                arising out of your use of the Site or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2>Governing Law</h2>
              <p>
                These Terms are governed by the laws of Ghana, West Africa, without regard to
                its conflict of law principles. You agree to the exclusive jurisdiction of the
                courts located in Accra, Ghana for any dispute arising from these Terms or the
                Site.
              </p>
            </section>

            <section>
              <h2>Changes to These Terms</h2>
              <p>
                We may revise these Terms at any time. When we do, we will update the "Last
                updated" date above. Your continued use of the Site after changes take effect
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2>Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining
                provisions will remain in full force and effect.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have questions about these Terms, contact us at{' '}
                <a href="mailto:gtechfreelancers@gmail.com">
                  gtechfreelancers@gmail.com
                </a>{' '}
                or write to GTech Freelancers, Accra, Ghana, West Africa.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer onNavigateTo={onNavigateTo} onNavigateHome={onNavigateHome} />
    </div>
  )
}
