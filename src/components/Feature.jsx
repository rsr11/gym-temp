import React from 'react'



const FeatureCard = ({title, desc})=>{
    return (
        <section className=' w-[80vw] md:w-[35vw] lg:w-[20vw] h-fit flex flex-col items-center' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#f36100" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f36100" className="w-24 bg-[#151515] rounded-full p-3 h-24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>
<h3 className='text-white text-xl text-center font-bold mt-5'>{title}</h3>
<p className='w-full text-center mt-4 text-[#A9A9A9]'>{desc}</p>
        </section>
    )
}

const Feature = () => {
  return (
    <section id='feature' className='overflow-x-hidden h-full pb-20 w-[100vw] bg-[#0A0A0A]' >
     <p className='text-center text-[#f36100] mt-20 font-semibold' >WHY CHOOSE US?</p> 
     <h1 className='text-center text-white text-3xl font-bold mt-3' >PUSH YOUR LIMITS FORWARD</h1>
     <section className='flex flex-col lg:flex-row gap-14 items-center justify-center pt-10'>
      <FeatureCard
       title="Modern equipment" 
       desc="We having all the modern equipment that you need to make you fit and fine.And help you to live a healthy life that you deserve."
        />
        <FeatureCard
       title="Modern equipment" 
       desc="We having all the modern equipment that you need to make you fit and fine.And help you to live a healthy life that you deserve."
        />
        <FeatureCard
       title="Modern equipment" 
       desc="We having all the modern equipment that you need to make you fit and fine.And help you to live a healthy life that you deserve."
        />
       
     </section>
    </section>
  )
}

export default Feature
