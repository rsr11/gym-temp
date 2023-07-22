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
    <Suspense fallback={<div className='h-[100vh] w-[100vw] flex justify-center items-center animate-spin' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
  </div>} >
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
