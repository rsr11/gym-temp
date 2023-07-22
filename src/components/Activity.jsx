import React from 'react'
import Class1 from "../assets/class-1.jpg.webp";
import Class2 from "../assets/class-2.jpg.webp";
import Class3 from "../assets/class-3.jpg.webp";
import Class4 from "../assets/class-4.jpg.webp";
import Class5 from "../assets/class-5.jpg.webp";


const ActivityMiniCard = ({category, type, src, cardType})=>{
    return (
        <section className={`text-white ${cardType === "mini" ? "w-[70vw] lg:w-[22vw]" : "w-[70vw] lg:w-[34vw]"} border-b-2 border-white bg-black`}>
            <img src={src} className='clipping w-full ' alt="classes" />
            {/* <p className='border-t-4 w-full -rotate-[7deg] -translate-y-12 border-[#464646]' ></p> */}
            <p className='mb-5 ml-5 text-[#f36100]'>{category}</p>
            <p className='text-2xl ml-5 mb-5' >{type}</p>
        </section>
    )
}

const Activity = () => {
  return (
    <section id='activity' className='h-full pb-20 w-[100vw] overflow-x-hidden bg-[#151515]' >
           <p className='text-center text-[#f36100] pt-20 font-semibold' >OUR ACITIVITY</p> 
     <h1 className='text-center text-white text-3xl font-bold mt-3' >WHAT WE CAN OFFER</h1>

       <section className='flex gap-10 flex-col lg:flex-row justify-center items-center mt-10 border-0' >
            <ActivityMiniCard category="STRENGTH" type="WEIGHTLIFTING" cardType="mini" src={Class1} />
            <ActivityMiniCard category="CARDIO" type="MULTI-WORKOUT" cardType="mini" src={Class2} />
            <ActivityMiniCard category="ENDURANCE" type="TREADMILL" cardType="mini" src={Class3} />
       </section>
       <section className='flex justify-center flex-col lg:flex-row items-center gap-10 mt-14' >
        <ActivityMiniCard category="TRAINING" type="BOXING" cardType="max" src={Class5} />
        <ActivityMiniCard category="STRENGTH" type="DUMBBELL" cardType="max" src={Class4} />
       </section>
    </section>
  )
}

export default Activity
