import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroSection from './components/heroSection'

export default function App() {
  return (
    <div className=' max-w-7xl mx-auto' >

      <Navbar />
      <HeroSection />
      <Footer />

    </div>
  )
}
