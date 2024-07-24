import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react'
const hero = () => {
  const [bigShoeImg,setBigShoeImg]=useState(bigShoe1)
  return (
    <section id='home'
    className='w-full 
    flex  
    xl:flex-row 
    flex-col gap-10
    md:pl-9
     max-container justify-center min-h-screen'
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className='text-xl text-coral-red font-montserrat'>Our summer collection</p>
      <h1 className='mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px]  font-bold'>
        
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 '>
          The New Arrival
          </span><br />
          <span className='text-coral-red inline-block mt-3'>Nike </span>
          <span className='shoe'> Shoes</span>
      </h1>
      <p className='mt-6 font-montserrat text-lg mb-14 text-slate-gray sm:max-w-sm' >
      Discover stylish Nike arrivals, quality comfort, and innovation for
      your active life.
      </p>
      <Button label="Shop Now!" color=" text-white w-52 bg-coral-red" iconUrl={arrowRight}></Button>
      <div className="flex flex-wrap justify-starts items-start w-full mt-20 gap-16 ">
        {statistics.map((stat)=>(
          <div  key={stat.label}>
            <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
            <p className='font-montserrat leading-7  text-slate-gray'>{stat.label}</p>
          </div>
        ))

        }
      </div>
      </div>
        <div className='relative flex-1 flex  justify-center items-center xl:min-h-screen max-xl:py-40 rounded-xl  bg-primary bg-hero bg-cover bg-center'>
          <img src={bigShoeImg} alt="big shoe image"  width={610} height={500} className='object-contain relative z-10 hover:scale-105 duration-300'
          />
          <div className='flex sm:gap-6 gap-4  absolute -bottom-[8%] sm:left-[10%]  rounded-xl '>
            {shoes.map((image)=>(
              <div key={image} className='hover:scale-105 duration-200 '>
                  <ShoeCard 
                  imgUrl={image}
                  changeBigShoeImage={(shoe)=>{setBigShoeImg(shoe)}}
                  bigShoeImage={bigShoeImg}
                  />
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default hero