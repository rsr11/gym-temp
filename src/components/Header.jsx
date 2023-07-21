import React from 'react'
import {AnimatePresence, motion} from "framer-motion";

const Header = ({isMenuOpen , setMenuOpen}) => {
  return  <section>
{
        isMenuOpen && (
            <motion.section animate={{width:"100vw"}} transition={{duration:0.5}} initial={{width:"0vw"}}  className='h-[100vh] text-white flex justify-center items-center overflow-hidden absolute bg-black'>
        <ul className='flex flex-col text-5xl text-center justify-center items-center gap-10 cursor-pointer text-white' >
        <li className='hover:text-[#f36100] '> <a href="#home" onClick={()=>{setMenuOpen(false)}} >HOME</a></li>
        <li className='hover:text-[#f36100] ' ><a href="#feature" onClick={()=>{setMenuOpen(false)}} >FEATURE</a></li>
        <li className='hover:text-[#f36100] ' ><a href="#plan" onClick={()=>{setMenuOpen(false)}} >PLANS</a></li>
        <li className='hover:text-[#f36100] ' ><a href="#home" onClick={()=>{setMenuOpen(false)}}>OUR TEAM</a></li>
        <li className='hover:text-[#f36100] ' ><a href="#contact" onClick={()=>{setMenuOpen(false)}} >CONTACT US</a></li>
      </ul>
        </motion.section>
        )
}
    <section className='flex justify-between overflow-hidden items-center absolute text-white px-20 mt-5  md:pt-10 w-full' >
      <h1 className='text-2xl sm:text-3xl lg:text-5xl overflow-hidden font-semibold' >Gym<span className='text-[#f36100]' >B</span>ro</h1>
      {
             isMenuOpen ? 
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>{setMenuOpen(false)}} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
           </svg>           
             :
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" onClick={()=>setMenuOpen(true)} className="sm:hidden w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
      }
      
      <ul className='hidden md:flex gap-5 cursor-pointer' >
        <li className='hover:text-[#f36100] '> <a href="#home">HOME</a></li>
        <li className='hover:text-[#f36100] ' ><a href="#feature">FEATURE</a></li>
        <li className='hover:text-[#f36100] ' ><a href="#plan">PLANS</a></li>
        <li className='hover:text-[#f36100] ' >OUR TEAM</li>
        <li className='hover:text-[#f36100] ' ><a href="#contact">CONTACT US</a></li>
      </ul>
      {/* <img src="https://preview.colorlib.com/theme/gymlife/img/hero/hero-2.jpg" alt="" /> */}
    </section>
  

</section>
}


export default Header





















