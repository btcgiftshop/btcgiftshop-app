"use client"
import React from 'react'
import { BTCGiftBox2 } from '@/public/images/index'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div id='home' className='flex justify-center flex-col items-center text-center lg:text-start pt-8'>
      <div>
        <Image src={BTCGiftBox2} alt='BTCGiftBox' className='w-[180px] h-[180px] md:w-[220px] md:h-[220px]' />
      </div>
      <div className='my-auto'>
        <div className='justify-center flex text-center'>
          <p className='text-[2rem] md:text-[3rem] font-semibold md:w-[500px] w-[300px] leading-tight'><span className='text-orange-600'>Bitcoin</span> Gift Shop</p>
        </div>
        <div className='justify-center flex text-center'>
          <p className='text-[1rem] md:text-[1.5rem] w-[96%] max-w-[700px] font-normal text-text-color mt-5'>
            Send Bitcoin gifts to your family, friends, and the people you love and care about.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <Link href='/sign-in' className='rounded-[20px] w-fit h-auto bg-first-color px-20 py-5 text-[0.9rem] md:text-[1.2rem] font-medium text-white mt-10 cursor-pointer'>
            💝 Create New Gift
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection