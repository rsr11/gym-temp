import React from 'react'

const Header = () => {
  return (
    <section className='flex justify-between overflow-hidden items-center absolute text-white px-20 mt-5  md:pt-10 w-full' >
      <h1 className='text-2xl sm:text-3xl lg:text-5xl overflow-hidden font-semibold' >Gym<span className='text-[#f36100]' >B</span>ro</h1>
      <ul className='hidden md:flex gap-5 cursor-pointer' >
        <li className='hover:text-[#f36100] '> <a href="#home">HOME</a></li>
        <li className='hover:text-[#f36100] ' ><a href="#feature">FEATURE</a></li>
        <li className='hover:text-[#f36100] ' ><a href="#plan">PLANS</a></li>
        <li className='hover:text-[#f36100] ' >OUR TEAM</li>
        <li className='hover:text-[#f36100] ' ><a href="#contact">CONTACT US</a></li>
      </ul>
      {/* <img src="https://preview.colorlib.com/theme/gymlife/img/hero/hero-2.jpg" alt="" /> */}
    </section>
  )
}

export default Header





















