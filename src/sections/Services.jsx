import React from 'react'
import { shieldTick, support, truckFast } from '../assets/icons'

const Services = () => {
  return (
    <section className='mt-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-container grid-cols-1 sm:gap-4 gap-24 '>
      
        <div className= '   rounded-2xl px-9 w-[400px] shadow-3xl hover:scale-105 duration-200 '> <div className=' mt-16 rounded-full bg- bg-coral-red p-3 w-11'><img src={truckFast} alt="truck icon" width={20} height={20}/></div>
        <p className='text-3xl font-bold font-palanquin mt-1'> Free Shipping</p>
        <p className='text-lg font-montserrat text-slate-gray mt-2 flex mb-16 leading-7
        '>Enjoy seamless shopping with our complimentary shipping service.</p>
        
        </div>
        <div className= '   rounded-2xl px-10 w-[400px] shadow-3xl hover:scale-105 duration-200 '><div className=' mt-16 rounded-full bg- bg-coral-red p-3 w-11'><img src={shieldTick}alt="truck icon" width={20} height={20}/></div>
        <p className='text-3xl font-bold font-palanquin mt-1'>Love to help you</p>
        <p className='text-lg font-montserrat text-slate-gray mt-2 flex mb-16 leading-7
        '>Experience worry-free transactions with our secure payment options.</p></div>
        <div className= '   rounded-2xl px-10 w-[400px] shadow-3xl hover:scale-105 duration-200 '><div className=' mt-16 rounded-full bg- bg-coral-red p-3 w-11'><img src={support} alt="truck icon" width={20} height={20}/></div>
        <p className='text-3xl font-bold font-palanquin mt-1'>Secure Payment
        </p>
        <p className='text-lg font-montserrat text-slate-gray mt-2 flex mb-16 leading-7
        '>Our dedicated team is here to assist you every step of the way.</p></div>
        
      
    </section>
  )
}

export default Services