import React, {useState } from 'react'

const HeroSection = () => {
    







  return (
    <section className='w-[100vw] overflow-x-hidden h-full' id='home'>

          
           <section className='bg1 h-[120vh] flex-col text-white flex justify-center items-center' >
            <div className='pl-10 lg:pl-80' >
            <p className='italic font-bold text-2xl' >SHAPE YOUR BODY</p>
            <h1 className='text-white text-7xl font-bold italic' >BE <span className='text-[#f36100]' >STRONG</span></h1>
            <h1 className='text-white text-7xl font-bold italic ' >TRAIN HARD</h1>
            <button className='py-4 px-8 border-2 font-bold hover:bg-[#f36100] hover:border-[#f36100] transition-all border-white mt-5' >SCROLL FOR MORE INFO.</button>
            </div>


           </section>
    
    </section>
  )
}

export default HeroSection
