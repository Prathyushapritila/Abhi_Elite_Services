'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

interface Service {
  id: string
  title: string
  description: string
  imageUrl: string
}

const services: Service[] = [
  {
    id: 'constructions',
    title: 'Constructions & Innovations',
    description: 'From homes and apartments to offices and shops, we help shape spaces that are practical, comfortable and ready to welcome people.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80',
  },
  {
    id: 'consultancy',
    title: 'Consultancy Services',
    description: "We sit with you, listen to your ideas, and help with planning, approvals, budgeting and choosing the right partners so your project doesn't feel overwhelming.",
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
  },
  {
    id: 'digital',
    title: 'Digital Services',
    description: 'Logos, websites, social media and online presence that match the real story of your project or business — simple, clear and easy for people to find.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80',
  },
  {
    id: 'events',
    title: 'Event Management',
    description: 'From small gatherings to big functions, we take care of stage, sound, décor and flow so you and your guests can simply show up and enjoy.',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80',
  },
  {
    id: 'entertainment',
    title: 'Entertainments',
    description: 'Live performances, cultural programs and curated line-ups that add energy, emotion and fun to your event, without feeling chaotic.',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80',
  },
  {
    id: 'fnb',
    title: 'F&B Services',
    description: 'Thoughtful menus, clean setup and friendly service for everything from intimate dinners to large gatherings.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Intro Text */}
          <div>
            <SectionHeader
              label="SERVICES"
              title="Services under Abhi Synergies"
              description="One brand, many ways to help. Whether you're building a home, opening a business, planning a celebration or launching something new, Abhi Synergies connects the pieces — construction, planning, digital presence, events, entertainment and food — so everything feels like one smooth plan."
            />
          </div>

          {/* Right Column - Services Grid */}
          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex gap-4 p-5 rounded-2xl border border-slate-200 bg-surface shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                {/* Image Thumbnail */}
                <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-ink mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
