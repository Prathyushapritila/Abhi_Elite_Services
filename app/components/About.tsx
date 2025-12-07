'use client'

import Image from 'next/image'

export default function About() {
  const benefits = [
    'One person to call',
    'Clear timelines and budgets',
    'Support from planning to wrap-up',
  ]

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-editorial">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-brandGray/20 bg-backgroundWarm rounded-sm -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-textMain mb-6">
              Built to simplify real-world projects.
            </h2>
            
            <div className="space-y-6 text-brandGray leading-relaxed mb-8">
              <p className="text-lg">
                Most projects need multiple services. A new office needs construction, digital branding, and maybe a launch event. A wedding needs event planning, entertainment, and catering. Usually, that means juggling 4–5 different vendors – a builder, a decorator, an event person, a caterer, a digital guy.
              </p>
              <p>
                Abhi Elite brings these under one team. Same communication style, same quality standards, same responsibility. You get smoother coordination, fewer misunderstandings, and one person to call when something needs attention.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-brandOrange mr-3 text-xl mt-1">✓</span>
                  <span className="text-textMain font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
