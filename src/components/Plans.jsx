import React from 'react'




const PlanCard = ()=>{
    return (
        <section className='h-[70vh]  w-[70vw] lg:w-[24vw] planCard flex justify-center hover:shadow-lg hover:shadow-white cursor-pointer hover:border-white transition-all ease-out -skew-y-6 border-2 border-gray-500' >
        <section className='h-[70vh] flex flex-col  lg:items-center     lg:w-[18vw]  skew-y-6 absolute top-4' >
        <p className='text-2xl font-bold mt-3 lg:text-center text-white target'>Class drop-in</p>
        <h1 className='text-6xl font-bold mt-2 text-center text-[#f36100]  '>Rs.300</h1>
        <p className='text-lg font-semibold target text-center' >SINGLE CLASS</p>
        <ul className='text-center mt-10 flex flex-col target gap-2 mb-12' >
            <li>Free riding</li>
            <li>Unlimited equipments</li>
            <li>Personal trainer</li>
            <li>Weight losing classes</li>
            <li>Month to mouth</li>
            <li>No time restriction</li>
        </ul>
        <button className='bg-[#333333] hover:bg-[#f36100] text-white font-bold flex w-full justify-center py-4' >ENROLL NOW</button>
        </section>
    </section>
    )
}
const Plans = () => {
  return (
    <section id='plan' className='w-[100vw] overflow-x-hidden h-full pb-20 bg-[#151515]' >
        <p className='text-center text-[#f36100] pt-20 font-semibold' >OUR PLANS</p> 
     <h1 className='text-center text-white text-3xl font-bold mt-3' >CHOOSE YOUR PRICING PLAN</h1>
      <section className='flex justify-center items-center lg:flex-row flex-col gap-10 mt-14' >
       <PlanCard/>
       <PlanCard/>
       <PlanCard/>
        </section>      
    </section>
  )
}

export default Plans
