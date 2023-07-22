import React from 'react'

const ContactPage = () => (
    <section className='pt-40 w-[100vw] bg-black pb-10' id='contact' >
        <h1 className='text-5xl text-center text-white font-bold mb-16'>
            <span className=' after:content-[""] relative after:w-16 after:h-2 after:-bottom-5 after:left-12 after:rounded-md after:absolute after:bg-[#f36100] '>Contact</span>
        </h1>

        <p className='text-center text-xl lg:mx-24 text-[#A9A9A9]'>Feel free to Contact me by submitting the form below and I will get back to you as soon as i get the message🙂</p>
        <form className='flex flex-col mt-20 lg:w-[50vw] mx-auto   text-white  p-10 rounded-md shadow-lg'>
            {/* <label htmlFor="name" className='mb-3 font-bold text-xl'>Name</label> */}
            <input type="text" className='p-4 mb-5  text-white bg-[#151515]  placeholder:text-[#A9A9A9] placeholder:font-semibold border-b-4  ' placeholder='Enter Your Name' id='name'  />
            {/* <label htmlFor="email" className='mb-3 font-semibold'>Email</label> */}
            <input type="email" name="" id="email" placeholder='Enter Your Email' className=' text-white bg-[#151515] border-b-4  placeholder:text-[#A9A9A9] placeholder:font-semibold p-4 mb-5' />
            {/* <label htmlFor="message" className='mb-3 font-semibold'>Message</label> */}
            <textarea name="" id="message" cols="30" rows="10" className=' text-white bg-[#151515]  placeholder:text-[#A9A9A9] border-b-4 placeholder:font-semibold  p-4 mb-5' placeholder='Enter Your Message' ></textarea>
            <button className='py-4 w-40 px-10 text-lg font-semibold bg-black transition-all  hover:bg-[#f36100] hover:text-white hover:border-[#f36100] rounded-lg mt-8 text-white border-2 border-white' >SUBMIT</button>
        </form>


    </section>
)

export default ContactPage
