import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy | Abhi Synergies',
  description: 'Privacy Policy for Abhi Synergies - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">Privacy Policy</h1>
            <p className="text-muted text-lg">Last updated: December 25, 2024</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-muted leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">1. Introduction</h2>
              <p>
                Abhi Synergies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">2. Information We Collect</h2>
              
              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">2.1 Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Fill out our contact form or request a quote</li>
                <li>Communicate with us via email, phone, or WhatsApp</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Engage with our services (construction, events, digital services, etc.)</li>
              </ul>
              <p className="mt-4">
                This information may include your name, email address, phone number, postal address, project details, and any other information you choose to provide.
              </p>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you visit and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Date and time of your visit</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and manage service requests and projects</li>
                <li>Send you information about our services, promotions, and updates (with your consent)</li>
                <li>Improve our website, services, and user experience</li>
                <li>Analyze website usage and trends</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our clients, provided they agree to keep this information confidential.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With Your Consent:</strong> We may share your information with your explicit consent for specific purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent at any time (where processing is based on consent)</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">11. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-6 bg-[#FFF8F0] rounded-lg border border-slate-200">
                <p className="font-semibold text-[#EA6A1F] mb-2">Abhi Synergies</p>
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

