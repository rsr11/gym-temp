import React from 'react'

const Poster = () => {
  return (
    <section className='w-[100vw] overflow-x-hidden h-[75vh] hidden md:block poster-bg'>
       <h1 className='text-center text-5xl font-bold text-white pt-[12%]' >REGISTRATION NOW TO GET MORE DEALS</h1>
       <p className='text-center text-[#C4C4C4] text-xl mt-5' >WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>
       <p  className='text-center mt-5'>
       <button className='text-white border-2 border-[#f36100] py-4 px-6 hover:bg-[#f36100] transition-all ease-in' >APPOINTMENT</button>
       </p>
    </section>
  )
}

export default Poster
