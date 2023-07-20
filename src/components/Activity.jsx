import React from 'react'


const ActivityMiniCard = ({category, type, src, cardType})=>{
    return (
        <section className={`text-white ${cardType === "mini" ? "w-[70vw] lg:w-[22vw]" : "w-[70vw] lg:w-[34vw]"} bg-black`}>
            <img src={src} className='clipping w-full' alt="" />
            <p className='border-t-4 w-full -rotate-[7deg] -translate-y-12 border-[#464646]' ></p>
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
            <ActivityMiniCard category="STRENGTH" type="WEIGHTLIFTING" cardType="mini" src="https://preview.colorlib.com/theme/gymlife/img/classes/class-1.jpg" />
            <ActivityMiniCard category="CARDIO" type="MULTI-WORKOUT" cardType="mini" src="https://preview.colorlib.com/theme/gymlife/img/classes/class-2.jpg" />
            <ActivityMiniCard category="ENDURANCE" type="TREADMILL" cardType="mini" src="https://preview.colorlib.com/theme/gymlife/img/classes/class-3.jpg" />
       </section>
       <section className='flex justify-center flex-col lg:flex-row items-center gap-10 mt-14' >
        <ActivityMiniCard category="TRAINING" type="BOXING" cardType="max" src="https://preview.colorlib.com/theme/gymlife/img/classes/class-5.jpg" />
        <ActivityMiniCard category="STRENGTH" type="DUMBBELL" cardType="max" src="https://preview.colorlib.com/theme/gymlife/img/classes/class-4.jpg" />
       </section>
    </section>
  )
}

export default Activity
