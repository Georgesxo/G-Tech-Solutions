import { useEffect } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import './LegalPage.css'

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void
  onProfessionalsClick: () => void
  onContactClick: () => void
  onNavigateTo?: (page: 'privacy' | 'terms' | 'sitemap') => void
}

export function PrivacyPolicyPage({
  onNavigateHome,
  onProfessionalsClick,
  onContactClick,
  onNavigateTo,
}: PrivacyPolicyPageProps) {
  useEffect(() => {
    // Ensure the legal page always loads scrolled to the top
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
            <h1>Privacy Policy</h1>
          </div>

          <div className="legal-page-content">
            <p className="last-updated">Last updated: June 24, 2026</p>

            <section>
              <h2>Overview</h2>
              <p>
                This Privacy Policy explains how GTech Freelancers ("GTech," "we," "us," or
                "our") collects, uses, and shares information when you visit{' '}
                <a href="https://www.gtechfreelancers.com">https://www.gtechfreelancers.com</a> (the "Site")
                or contact us. By using the Site, you agree to the practices described here.
                GTech Freelancers is based in Accra, Ghana, West Africa.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>

              <h3>Information you provide</h3>
              <p>
                When you submit our contact form, email us, or request our services, we collect
                the information you choose to share, such as your name, email address, company,
                project details, and the contents of your message.
              </p>

              <h3>Information collected automatically</h3>
              <p>
                When you visit the Site, we and our service providers automatically collect
                limited technical information, which may include your IP address, browser and
                device type, pages viewed, referring pages, and general location. This is
                collected through cookies and similar technologies.
              </p>
            </section>

            <section>
              <h2>Cookies and Analytics</h2>
              <p>We use the following tools to understand how the Site performs and how visitors use it:</p>
              <ul>
                <li>
                  <strong>Vercel Web Analytics and Speed Insights</strong> measure page views
                  and real-world performance. These tools are privacy-friendly and do not use
                  cookies to track you across sites.
                </li>
                <li>
                  <strong>Google Analytics</strong> helps us understand aggregate traffic and
                  usage patterns.
                </li>
                <li>
                  <strong>Meta Pixel</strong> measures the effectiveness of advertising and may
                  be used for ad attribution.
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling cookies may
                affect some Site features.
              </p>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <ul>
                <li>To respond to your inquiries and provide the services you request.</li>
                <li>To evaluate your fit for our service offerings and vice versa.</li>
                <li>To operate, maintain, secure, and improve the Site.</li>
                <li>To analyze usage and measure the performance of our content.</li>
                <li>To comply with legal obligations and enforce our agreements.</li>
              </ul>
            </section>

            <section>
              <h2>How We Share Your Information</h2>
              <p>We do not sell your personal information. We share information only in the following circumstances:</p>
              <ul>
                <li>
                  <strong>Service providers</strong> who help us operate the Site, including
                  hosting providers, analytics services, and communication platforms.
                </li>
                <li>
                  <strong>Professional team members</strong> when you engage GTech for
                  services.
                </li>
                <li>
                  <strong>Legal compliance</strong> when required by law or to protect our
                  rights, safety, or property.
                </li>
                <li>
                  <strong>Business transfers</strong> in connection with a merger, acquisition,
                  or sale of assets.
                </li>
              </ul>
            </section>

            <section>
              <h2>Data Retention</h2>
              <p>
                We retain information for as long as needed to fulfill the purposes described in
                this policy, to comply with our legal obligations, and to resolve disputes. We
                delete or anonymize information when it is no longer required.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We use reasonable administrative, technical, and organizational measures to
                protect your information. No method of transmission or storage is completely
                secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>Your Privacy Rights</h2>
              <p>
                Depending on where you live, you may have the right to access, correct, delete,
                or restrict the use of your personal information. To exercise any of these
                rights, contact us at the address below. We will not discriminate against you
                for exercising your rights.
              </p>
            </section>

            <section>
              <h2>Third-Party Links</h2>
              <p>
                The Site may link to third-party websites. We are not responsible for the
                privacy practices of those sites, and we encourage you to review their policies.
              </p>
            </section>

            <section>
              <h2>Children's Privacy</h2>
              <p>
                The Site is not directed to children under 13, and we do not knowingly collect
                personal information from children. If you believe a child has provided us
                information, please contact us so we can remove it.
              </p>
            </section>

            <section>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise
                the "Last updated" date above. Material changes will be reflected on this page.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, contact
                us at{' '}
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
