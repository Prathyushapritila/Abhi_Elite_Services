'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

export default function About() {
  const benefits = [
    'One person to call',
    'Clear timelines and budgets',
    'Support from planning to wrap-up',
  ]

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <SectionHeader
              label="ABOUT"
              title="The idea behind Abhi Synergies"
            />
            
            <div className="space-y-6 text-muted leading-relaxed mb-8">
              <p>
                Many projects don't fail because of bad ideas — they become stressful because too many people are involved and no one sees the whole picture. A new office may need construction, approvals, branding, events and catering. A family celebration might need decoration, food, music and stage support.
              </p>
              <p>
                Abhi Synergies exists to bring these threads together. We work as one team, with one style of communication and one sense of responsibility. Our goal is simple: make your plans feel lighter, kinder and more organised, so you can focus on the people and moments that matter.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-brand mr-3 text-xl mt-1">✓</span>
                  <span className="text-ink font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-background border-l-4 border-brand rounded-lg p-6">
              <p className="text-muted italic leading-relaxed mb-3">
                "Abhi Synergies coordinated our apartment launch, event and catering as a single team. It felt calm, organised and personal from start to finish."
              </p>
              <p className="text-sm text-muted">— Recent client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
