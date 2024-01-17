import './App.css'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className='mx-auto  max-w-7xl' >

      <Navbar />
      <MainSection />
      <Projects />
      <Footer />

    </div>
  )
}
