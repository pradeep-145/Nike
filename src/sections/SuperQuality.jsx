import React from 'react'
import Button from '../components/Button'
import { shoe4, shoe5, shoe6, shoe7, shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-between items-center max-lg:flex-col  gap-10 w-full max-container'>
      <div className=' flex-col flex flex-1'>
      <h2 className='mt-10 text-4xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px]  font-bold'>
        
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-8 '>
        We Provide You
          </span>
          <span className='text-coral-red inline-block mt-3'> Super Quality </span>
          <span> Shoes</span>
      </h2>
      <p className='mt-6 font-montserrat text-lg mb-14 text-slate-gray text- sm:max-w-sm' >
      Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
      </p>
      <p className='mt-3 font-montserrat text-lg mb-14 text-slate-gray sm:max-w-sm' >
      Our dedication to detail and excellence ensures your satisfaction      </p>
      <Button label="View details" color=" text-white w-52 bg-coral-red" ></Button>
      </div>
      <div className='flex flex-1 justify-center items-center hover:scale-105 duration-200 '>
        <img src={shoe8} alt=""  className='object-contain w-full h-full '  />
      </div>
      

    </section>
  )
}

export default SuperQuality