import React from 'react';
import Navbar from '../Navbar';

function Hero() {
  return (
    <div style={{ backgroundImage: `url(/assets/home/desktop/image-hero.jpg)` }} className='bg-no-repeat bg-center bg-cover h-screen'>
      <Navbar />
      <div className='mx-auto max-w-[1110px] text-white flex items-center h-full'>
        <div className="text flex flex-col gap-6 justify-start w-1/2">
            <h4 className='text-sm uppercase tracking-[10px] text-(--white-light)/50'>New product</h4>
            <h1 className='text-6xl font-semibold uppercase'>xx99 mark ii headphones</h1>
            <p className='text-base w-2/3 tracking-wide text-(--white-light)/80'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <p className='p-2 px-4 uppercase bg-(--orange-dark) hover:bg-(--orange-light) cursor-pointer w-fit text-base'>See product</p>
        </div>
      </div>
    </div>
  )
}

export default Hero