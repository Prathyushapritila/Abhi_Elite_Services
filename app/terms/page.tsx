import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Terms of Service | Abhi Synergies',
  description: 'Terms of Service for Abhi Synergies - Read our terms and conditions for using our services.',
}

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section className="py-14 md:py-20 bg-white/85">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-[#EA6A1F] hover:text-[#EA6A1F]/80 transition-colors inline-flex items-center gap-2 mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">Terms of Service</h1>
            <p className="text-muted text-lg">Last updated: December 25, 2024</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-muted leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services of Abhi Synergies ("we," "our," or "us"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services. These Terms apply to all users of our services, including clients, visitors, and anyone who accesses or uses our website or services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">2. Services Description</h2>
              <p>
                Abhi Synergies provides integrated services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Construction and renovation services</li>
                <li>Consultancy services</li>
                <li>Digital services (web development, branding, digital marketing)</li>
                <li>Event management and planning</li>
                <li>Entertainment services</li>
                <li>Food & Beverage (F&B) services</li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">3. Service Agreements and Contracts</h2>
              <p>
                All services provided by Abhi Synergies are subject to separate written agreements or contracts that specify:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Scope of work and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Pricing and payment terms</li>
                <li>Terms and conditions specific to the project</li>
                <li>Warranty and guarantee information</li>
              </ul>
              <p className="mt-4">
                In case of conflict between these Terms and a specific service agreement, the service agreement shall prevail.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">4. Pricing and Payment</h2>
              <p>
                All prices quoted are subject to change without notice until a formal agreement is signed. Payment terms will be specified in individual service agreements. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Require advance payment or deposits as specified in the agreement</li>
                <li>Suspend services for non-payment</li>
                <li>Charge interest on overdue payments as per applicable law</li>
                <li>Recover costs incurred in collecting overdue payments</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">5. Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Providing accurate and complete information necessary for service delivery</li>
                <li>Obtaining necessary permits, approvals, and permissions required for projects</li>
                <li>Ensuring access to project sites and necessary facilities</li>
                <li>Making timely payments as per the agreed schedule</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Informing us of any changes or issues that may affect service delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">6. Intellectual Property</h2>
              <p>
                All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Abhi Synergies or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <p className="mt-4">
                For custom work created specifically for clients, intellectual property rights will be transferred to the client upon full payment, unless otherwise specified in the service agreement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">7. Warranties and Disclaimers</h2>
              <p>
                We strive to provide high-quality services. However, we make no warranties, expressed or implied, regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>The uninterrupted or error-free operation of our services</li>
                <li>The accuracy, completeness, or reliability of information provided</li>
                <li>The suitability of services for any particular purpose</li>
              </ul>
              <p className="mt-4">
                Specific warranties, if any, will be outlined in individual service agreements. Our liability is limited to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Abhi Synergies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from or related to the use of our services, even if we have been advised of the possibility of such damages.
              </p>
              <p className="mt-4">
                Our total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">9. Cancellation and Refunds</h2>
              <p>
                Cancellation policies will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Cancellations must be made in writing</li>
                <li>Refunds, if applicable, will be processed according to the terms of the service agreement</li>
                <li>Work completed and expenses incurred up to the cancellation date may be charged</li>
                <li>Deposits may be non-refundable as specified in the agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">10. Force Majeure</h2>
              <p>
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, labor disputes, government actions, pandemics, or other force majeure events.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">11. Dispute Resolution</h2>
              <p>
                In the event of any dispute arising from these Terms or our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Parties agree to first attempt to resolve disputes through good faith negotiation</li>
                <li>If negotiation fails, disputes shall be resolved through mediation</li>
                <li>If mediation is unsuccessful, disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana, India</li>
                <li>These Terms shall be governed by the laws of India</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">12. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">13. Prohibited Uses</h2>
              <p>You agree not to use our services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>For any unlawful purpose or in violation of any applicable laws</li>
                <li>To infringe upon the rights of others</li>
                <li>To transmit harmful, offensive, or inappropriate content</li>
                <li>To interfere with or disrupt our services or servers</li>
                <li>To attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">14. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms or for any other reason we deem necessary. Upon termination, your right to use our services will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">15. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">16. Contact Information</h2>
              <p>
                For questions, concerns, or requests regarding these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-6 bg-[#FFF8F0] rounded-lg border border-slate-200">
                <p className="font-semibold text-ink mb-2">Abhi Synergies</p>
                <p className="text-muted">Matrusree Apartments</p>
                <p className="text-muted">Opposite: Zudio Showroom</p>
                <p className="text-muted">Hyderguda, Basheerbagh</p>
                <p className="text-muted">Telangana 500029, India</p>
                <p className="mt-4">
                  <strong>Email:</strong> <a href="mailto:abhisynergies@gmail.com" className="text-[#EA6A1F] hover:underline">abhisynergies@gmail.com</a>
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+919666155296" className="text-[#EA6A1F] hover:underline">+91 96661 55296</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

