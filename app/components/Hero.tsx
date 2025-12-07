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
    <section id="home" className="relative section-padding bg-gradient-to-br from-backgroundWarm via-white to-backgroundWarm overflow-hidden">
      {/* Subtle frame line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brandGray/20 to-transparent"></div>
      
      <div className="container-editorial">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-xs uppercase tracking-wider text-brandGray font-medium">
              ABHI ELITE SERVICES
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-textMain leading-tight tracking-tight">
              Construction, events, digital and F&B under one trusted team.
            </h1>
            
            <div className="space-y-4 text-lg text-brandGray leading-relaxed max-w-xl">
              <p>
                We plan and execute real-world projects – from buildings and business setups to events, branding and food services – so clients work with one team instead of five vendors.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-brandOrange text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-brandOrange focus:ring-offset-2"
              >
                View all services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-brandGray text-brandGray font-semibold rounded-lg hover:border-brandOrange hover:text-brandOrange transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brandOrange focus:ring-offset-2"
              >
                Talk to our team
              </button>
            </div>
          </div>

          {/* Right Side - Image Cards */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Construction project"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Overlapping project card */}
            <div className="absolute -bottom-6 -left-6 bg-surface border-2 border-brandGray/20 rounded-lg p-6 shadow-lg max-w-[280px]">
              <div className="text-xs uppercase tracking-wide text-brandGray mb-2">Recent project</div>
              <div className="font-serif text-lg font-semibold text-textMain mb-2">
                Residential project + Launch event + F&B catering
              </div>
              <div className="text-sm text-brandGray">
                All managed by Abhi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
