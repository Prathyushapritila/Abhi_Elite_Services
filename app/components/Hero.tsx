'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative py-20 md:py-28 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Eyebrow */}
            <div className="text-xs tracking-[0.25em] text-muted uppercase mb-2">
              ABHI SYNERGIES
            </div>
            
            {/* Main heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight tracking-tight">
              One team for spaces, stories and celebrations.
            </h1>
            
            {/* Subheading */}
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl">
              Instead of calling a builder, an event planner, a designer and a caterer separately, you talk to one team that understands the whole picture. Abhi Synergies helps you plan and execute projects that feel organised, warm and memorable — from the first idea to the final celebration.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-brand text-white font-semibold rounded-lg shadow-md hover:bg-brand/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-brand focus:ring-offset-2"
              >
                Explore services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-ink text-ink font-semibold rounded-lg hover:bg-ink hover:text-white transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand focus:ring-offset-2"
              >
                Share your plan
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80"
                alt="Construction and celebration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
