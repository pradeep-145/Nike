import React from 'react'
import Button from '../components/Button'
const Subscribe = () => {
  return (
    <section id='contact-us' className='max-container flex gap-10 justify-center items-center '>
      <div className='flex flex-1 justify-start items-start '><h1 className='text-4xl text-center font-palanquin font-bold'> Sign Up for  <span className='text-coral-red '>Updates </span><br />& Newsletter</h1></div>
      <div class="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"><input type="text" placeholder="subscribe@nike.com" class="input" /><div class="flex max-sm:justify-end items-center max-sm:w-full" ><button class="flex justify-center items-center hover:scale-105 duration-200  gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      bg-coral-red text-white border-coral-red rounded-full w-full">Sign Up</button></div></div>    </section>
  )
}

export default Subscribe