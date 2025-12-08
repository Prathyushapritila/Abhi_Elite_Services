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
    <section id="about" className="section-padding bg-surface relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image (slightly outside container) */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-brandGray/20 shadow-lg md:-ml-8">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            {/* Subtle decorative element */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-brandGray/10 bg-backgroundWarm rounded-sm -z-10 hidden md:block"></div>
          </div>

          {/* Right Side - Content */}
          <div>
            <SectionHeader
              label="ABOUT"
              title="Built to simplify real-world projects."
            />
            
            <div className="space-y-6 text-brandGray leading-relaxed mb-8">
              <p>
                Many projects don't fail because of bad ideas — they become stressful because too many people are involved and no one sees the whole picture. A new office may need construction, approvals, branding, events and catering. A family celebration might need decoration, food, music and stage support.
              </p>
              <p>
                Abhi Synergies exists to bring these threads together. We work as one team, with one style of communication and one sense of responsibility. Our goal is simple: make your plans feel lighter, kinder and more organised, so you can focus on the people and moments that matter.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-brandOrange mr-3 text-xl mt-1">✓</span>
                  <span className="text-textMain font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-backgroundWarm border-l-4 border-brandOrange rounded-lg p-6">
              <p className="text-brandGray italic leading-relaxed mb-3">
                "Abhi Synergies handled our construction, launch event and catering as a single team. It felt calm, organised and personal from start to finish."
              </p>
              <p className="text-sm text-brandGray">— Recent client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
