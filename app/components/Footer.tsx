import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-textMain text-white py-12">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-16 h-16">
              <Image
                src="/abhi-logo.png"
                alt="Abhi Elite Services"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Services Line */}
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70 mb-2">
              Abhi Elite Services — Construction · Consultancy · Digital · Events · Entertainments · F&B
            </p>
            <p className="text-xs text-white/50">
              © Abhi Elite Services. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white/70 hover:text-brandOrange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brandOrange focus:ring-offset-2 focus:ring-offset-textMain rounded px-2 py-1 text-sm"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-brandOrange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brandOrange focus:ring-offset-2 focus:ring-offset-textMain rounded px-2 py-1 text-sm"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
