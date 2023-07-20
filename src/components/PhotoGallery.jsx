import React from 'react'

const PhotoGallery = () => {
  return (
    <section className='photoGaller pt-20 h-full grid overflow-x-hidden w-[100vw] grid-cols-1 sm:grid-cols-2 sm:grid-rows-4 grid-rows-6 lg:grid-cols-4 gap-5 bg-[#151515] lg:grid-rows-2' >
      <img src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-1.jpg" alt="" className='sm:col-span-2 w-full h-full row-span-1'  id='img1' />
      <img src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-2.jpg" alt="" className='col-span-1 w-full h-full row-span-1'  id='img2' />
      <img src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-3.jpg" alt="" className='col-span-1 w-full h-full row-span-1'  id='img3' />
      <img src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-4.jpg" alt="" className='col-span-1 w-full h-full row-span-1'  id='img4' />
      <img src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-5.jpg" alt="" className='col-span-1 w-full h-full row-span-1 '  id='img5' />
      <img src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-6.jpg" alt="" className='sm:col-span-2 w-full h-full row-span-1'  id='img6' />
    </section>
  )
}

export default PhotoGallery
