'use client'

import Image from 'next/image'
import SectionHeader from './SectionHeader'

interface Sector {
  title: string
  description: string
  imageUrl: string
}

const sectors: Sector[] = [
  {
    title: 'Homes & Apartments',
    description: 'Construction, interiors, digital listings and housewarming events handled by one team, so moving in feels joyful instead of stressful.',
    imageUrl: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=600&q=80',
  },
  {
    title: 'Businesses & Offices',
    description: 'Planning, approvals, branding, office setup and launch events that help your business feel ready from day one.',
    imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80',
  },
  {
    title: 'Functions & Celebrations',
    description: 'Weddings, family functions and community gatherings with décor, entertainment and catering that feel heartfelt and well-organised.',
    imageUrl: 'https://images.unsplash.com/photo-1519744346363-dc63c0c14fd5?w=600&q=80',
  },
]

export default function Sectors() {
  return (
    <section id="sectors" className="py-20 md:py-28 lg:py-32 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="SECTORS"
          title="Where our services fit best"
          description="Most real-life plans cross over many areas at once. A home needs interiors and sometimes a housewarming. A new restaurant needs branding and a launch event. Here's how Abhi Synergies fits into different moments."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group bg-surface rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56">
                <Image
                  src={sector.imageUrl}
                  alt={sector.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-ink mb-3">
                  {sector.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
