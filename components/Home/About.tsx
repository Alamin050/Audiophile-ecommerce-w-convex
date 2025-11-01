import React from 'react'

function About() {
  return (
    <div className="bg-(--white-light)">
        <div className="mx-auto max-w-[1110px] flex mb-[150px]">
             <div className="w-1/2  flex flex-col gap-6 items-start justify-center">
               <h2 className='text-4xl font-semibold uppercase tracking-[1px]'>
                Bringing you the <br /> <span className='text-(--orange-light)'>best</span> audio gear</h2>
              <p className='mr-25 text-black/80'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers and audio accesories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products, Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portsble audio equipment.</p>
            </div>
             <img src="/assets/man.png" alt="Man with earphones" className='rounded-lg w-1/2 h-[580px]'/>
        </div>
    </div>
  )
}

export default About