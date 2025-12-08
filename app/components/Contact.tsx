'use client'

import { useState, FormEvent } from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

interface FormData {
  name: string
  email: string
  phone: string
  services: string[]
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  services?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    services: [],
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    'Constructions & Innovations',
    'Consultancy Services',
    'Digital Services',
    'Event Management',
    'Entertainments',
    'F&B Services',
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        services: [],
        message: '',
      })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }))
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="CONTACT"
          title="Share your plan, we'll shape the rest."
        />

        <div className="mb-12 max-w-2xl">
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Tell us what you're dreaming of — a home, a function, a launch, a new space. Even if it's still just a rough idea, we're happy to listen and suggest a path that feels possible and relaxed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Founder & Contact Card */}
          <div className="space-y-6">
            {/* Founder Card */}
            <div className="bg-background border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/abhi-logo.png"
                    alt="Abhi Synergies"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wide text-muted mb-1">Founder</div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2">Srikant Pritila</h3>
                  <div className="space-y-1.5 text-sm text-muted">
                    <a 
                      href="tel:+919666155296" 
                      className="block hover:text-brand transition-colors"
                    >
                      +91 96661 55296
                    </a>
                    <a 
                      href="mailto:abhignainnovations@gmail.com" 
                      className="block hover:text-brand transition-colors"
                    >
                      abhignainnovations@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-background border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-ink mb-4">Address</h4>
              <div className="text-sm text-muted leading-relaxed space-y-1">
                <p>Block: AG8</p>
                <p>Mathrus Apartment</p>
                <p>Opp: Zudio showroom Hyderguda-Basheerbagh Road</p>
                <p>Hyderguda</p>
                <p>Hyderabad, Telangana 500029</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-brand/10 border border-brand/30 rounded-2xl p-6 text-center">
                <p className="text-brand font-semibold text-lg mb-2">✓ Thank you.</p>
                <p className="text-muted">We'll review your message and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
                    Name <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand transition-all ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
                    Email <span className="text-brand">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand transition-all ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-2">
                    Phone Number <span className="text-brand">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand transition-all ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-3">
                    Service(s) needed <span className="text-brand">*</span>
                  </label>
                  <div className="space-y-2">
                    {serviceOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-background transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(option)}
                          onChange={() => handleServiceToggle(option)}
                          className="w-4 h-4 text-brand border-slate-300 rounded focus:ring-brand"
                        />
                        <span className="text-muted">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
                    Message <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand transition-all ${
                      errors.message ? 'border-red-500' : 'border-slate-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brand text-white font-semibold rounded-lg shadow-md hover:bg-brand/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-brand focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
