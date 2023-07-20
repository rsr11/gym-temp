import './App.css'
import Activity from './components/Activity'
import ContactPage from './components/ContactPage'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LocationSection from './components/LocationSection'
import PhotoGallery from './components/PhotoGallery'
import Plans from './components/Plans'
import Poster from './components/Poster'

function App() {
  

  return (
    <section>
     <Header/>
     <HeroSection/>
     <Feature/>
     <Activity/>
     <Poster/>
     <Plans/>
     <PhotoGallery/>
     <ContactPage/>
     <LocationSection/>
     <Footer/>
    </section>
  )
}

export default App
