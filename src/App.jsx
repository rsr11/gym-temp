import { useState, lazy , Suspense } from 'react'
import './App.css'

const Activity = lazy(()=>import('./components/Activity'));  
const ContactPage = lazy(()=>import('./components/ContactPage'));  
const Feature = lazy(()=>import('./components/Feature'));  
const Footer = lazy(()=>import('./components/Footer'));  
const HeroSection = lazy(()=>import('./components/HeroSection'));  
const LocationSection = lazy(()=>import('./components/LocationSection'));  
const PhotoGallery = lazy(()=>import('./components/PhotoGallery'));  
const Plans = lazy(()=>import('./components/Plans'));  
const Poster = lazy(()=>import('./components/Poster'));  

const Header = lazy(()=>import('./components/Header'));

function App() {

  const [isMenuOpen , setMenuOpen] = useState(false);

  return (
    <Suspense fallback={<h1>Loading..</h1>} >
    <section className={`${isMenuOpen ? " h-[100vh] overflow-hidden" :" h-fit overflow-x-hidden"}`} >
     <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
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
    </Suspense>
  )
}

export default App
