import React from 'react'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
const Specialoffer = () => {
  return (
    <section className='flex flex-1 max-container justify-between items-center gap-10'>
       <div className='flex-1 hover:scale-105 duration-200 '>
          <img src={offer} alt=""  width={653} height={687} />
       </div>
       <div className='flex flex-1 flex-col '>
        <h1 className='text-4xl font-palanquin font-bold'> <span className='text-coral-red '>Special</span> offer</h1>
        <p className=' mt-3 text-lg text-slate-gray font-montserrat leading-8'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className=' mt-4 text-lg text-slate-gray font-montserrat leading-8'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='  flex-wrap inline-flex gap-6 mt-5'>
<div>

        <Button label="Shop Now!" color=" text-white w-52 bg-coral-red" iconUrl={arrowRight} /> 
</div>
        <Button color="bg-transparent text-slate-gray border w-52 border-2 border-slate-gray" label="Learn More"></Button>
        </div>
       </div>
    </section>
  )
}

export default Specialoffer