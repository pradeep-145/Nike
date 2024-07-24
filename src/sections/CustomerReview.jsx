import React from 'react'
import { customer1, customer2 } from '../assets/images'
import { star } from '../assets/icons'

const CustomerReview = () => {
  return (
    <section className='max-container'>
      <div >
      <h1 className='text-[50px] text-center font-palanquin font-bold'> What Our <span className='text-coral-red '>Customers </span>say? </h1>
      <p className=' mt-3 m-auto text-lg max-w-lg info-text text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p> 
      </div><br />
      <div className='flex mt-12  max-container  w-full'>
        <div className='flex flex-1 px-16 flex-col justify-center items-center'>
          <img src={customer1} alt="customer 1" width={120} height={120} className='rounded-full' />
      <p className=' mt-5 m-auto text-[52px] max-w-sm info-text text-center'>The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p> 
      <div className="mt-2 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat  text-xl leading-normal text-slate-gray">(4.5)
            </p>
        </div>
        <p className='mt-1 text-3xl font-bold font-palanquin'>Morich Brown</p>
        </div>
        <div className='flex flex-1 px-16 flex-col justify-center items-center'>
          <img src={customer2} alt="customer 1" width={120} height={120} className='rounded-full' />
      <p className=' mt-5 m-auto text-[52px] max-w-sm info-text text-center'>The product not only met but exceeded my expectations. I'll definitely be a returning customer!</p> 
      <div className="mt-2 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat  text-xl leading-normal text-slate-gray">(4.5)
            </p>
        </div>
        <p className='mt-1 text-3xl font-bold font-palanquin'>Lota Mongeskar</p>
        </div>
        
      
      </div>
    </section>
  )
}

export default CustomerReview