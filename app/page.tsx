import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Sectors from './components/Sectors'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Sectors />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}

