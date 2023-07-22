import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black w-[100vw]' >
    <section className='bg-black  flex justify-between flex-col lg:flex-row overflow-x-hidden text-white py-10' >
      <div className='w-60 pl-20 pb-8 lg:pb-0' >
      <h1 className='text-4xl font-bold text-center'>Gym<span className='text-[#f36100]' >B</span>ro</h1>
      <p className='mt-5 text-[#A9A9A9]' >It is the best place to folks, come join up , and let up grow together in this hard world.</p>
      </div>

      <div className='pl-20 lg:pl-0 pb-8 lg:pb-0' >
        <h1 className='text-2xl mb-5 font-bold' >Useful links</h1>
        <ul className='lg:text-center cursor-pointer text-[#A9A9A9]' >
          <li className='hover:text-[#f36100]' ><a href="#home">HOME</a></li>
          <li className='hover:text-[#f36100]' ><a href="#feature">ABOUT US</a></li>
          <li className='hover:text-[#f36100]' ><a href="#plan">PLANS</a></li>
          <li className='hover:text-[#f36100]' ><a href="#contact">CONTACT US</a></li>
        </ul>
      </div>

      <div className='lg:pr-20 pl-20 lg:pl-0'>
      <h1 className='text-2xl font-bold mb-5' >Follow us on-</h1>
      <ul className='cursor-pointer lg:text-center text-[#A9A9A9]' >
        <li className='hover:text-pink-500'><a href="">Instagram</a></li>
        <li className='hover:text-blue-500'><a href="">Facebook</a></li>
        <li className='hover:text-red-500'><a href="">Youtube</a></li>
      </ul>
      </div>
    </section>
    <h1 className='text-center border-t-2 mx-20 pt-5 bg-black text-white pb-10'>Copyright ©2023 All rights reserved | This template is made with  by <span className='text-[#f36100]' >Rajeshwar Singh</span></h1>
    </section>
  )
}

export default Footer
