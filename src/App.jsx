import './App.css'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className=' max-w-7xl mx-auto' >

      <Navbar />
      <MainSection />
      <Footer />

    </div>
  )
}
