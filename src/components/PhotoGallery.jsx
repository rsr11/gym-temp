import React from 'react'
// import { lazy } from 'react'
// const GalleryImg1 = lazy(()=>import("../assets/gallery-1.jpg.webp"));
import GallImg1 from "../assets/gallery-1.jpg.webp";
import GallImg2 from "../assets/gallery-2.jpg.webp";
import GallImg3 from "../assets/gallery-3.jpg.webp";
import GallImg4 from "../assets/gallery-4.jpg.webp";
import GallImg5 from "../assets/gallery-5.jpg.webp";
import GallImg6 from "../assets/gallery-6.jpg.webp";


const PhotoGallery = () => {
  return (
    <section className='photoGaller pt-20 h-full grid overflow-x-hidden w-[100vw] grid-cols-1 sm:grid-cols-2 sm:grid-rows-4 grid-rows-6 lg:grid-cols-4 gap-5 bg-[#151515] lg:grid-rows-2' >
      
      <img src={GallImg1} alt="" className='sm:col-span-2 w-full h-full row-span-1'  id='img1' />
      <img src={GallImg2} alt="" className='col-span-1 w-full h-full row-span-1'  id='img2' />
      <img src={GallImg3} alt="" className='col-span-1 w-full h-full row-span-1'  id='img3' />
      <img src={GallImg4} alt="" className='col-span-1 w-full h-full row-span-1'  id='img4' />
      <img src={GallImg5} alt="" className='col-span-1 w-full h-full row-span-1 '  id='img5' />
      <img src={GallImg6} alt="" className='sm:col-span-2 w-full h-full row-span-1'  id='img6' />
    </section>
  )
}

export default PhotoGallery
