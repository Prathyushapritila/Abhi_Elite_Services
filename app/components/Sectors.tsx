'use client'

import Image from 'next/image'

interface Sector {
  title: string
  description: string
  services: string[]
  imageUrl: string
}

const sectors: Sector[] = [
  {
    title: 'Homes & apartments',
    description: 'When building or renovating a home, you often need construction, interior design, digital branding (for renting or selling), and sometimes event planning for housewarming. We handle all of it.',
    services: ['Construction + Interiors + Digital branding'],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  },
  {
    title: 'Businesses & offices',
    description: 'Setting up a new office or expanding? We combine consultancy for planning and approvals, digital services for your online presence, and event management for launches or team gatherings.',
    services: ['Consultancy + Digital + Events'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    title: 'Functions & celebrations',
    description: 'Weddings, corporate launches, anniversaries – these need event coordination, entertainment, and food service working together seamlessly. One team, one point of contact.',
    services: ['Events + Entertainment + F&B'],
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
  },
]

export default function Sectors() {
  return (
    <section id="sectors" className="section-padding bg-backgroundWarm">
      <div className="container-editorial">
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-textMain mb-6">
            Where our services fit best
          </h2>
          <p className="text-lg text-brandGray leading-relaxed">
            Real projects usually need more than one service. Here's how we combine our offerings for common scenarios.
          </p>
        </div>

        <div className="space-y-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center bg-surface rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className={`relative h-64 md:h-full ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={sector.imageUrl}
                  alt={sector.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-textMain mb-4">
                  {sector.title}
                </h3>
                <p className="text-brandGray leading-relaxed mb-6">
                  {sector.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sector.services.map((service, i) => (
                    <span
                      key={i}
                      className="inline-block px-4 py-2 bg-brandOrange/10 text-brandOrange text-sm font-medium rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

