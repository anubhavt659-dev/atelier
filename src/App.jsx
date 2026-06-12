import Hero from './sections/Hero'
import Studio from './sections/Studio'
import Projects from './sections/Projects'
import Philosophy from './sections/Philosophy'
import Process from './sections/Process'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Nav removed — navigation lives inside Hero columns */}
      <main>
        <Hero />
        <Studio />
        <Projects />
        <Philosophy />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
