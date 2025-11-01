import React from 'react';
import ProductCard from './ProductCard';

function Products() {
  return (
    <div className='bg-(--white-light) py-[150px]'>
      <div className="mx-auto max-w-[1110px]">
        <div className=" flex justify-between mb-[150px]">
          <ProductCard
            imageSrc="/assets/home/desktop/image-headphones.svg"
            title="Headphones"
            link="/headphones"
          />
          <ProductCard
            imageSrc="/assets/home/desktop/image-speaker-zx9.svg"
            title="Speakers"
            link="/speakers"
          />
          <ProductCard
            imageSrc="/assets/home/desktop/image-earphones.svg"
            title="Earphones"
            link="/earphones"
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="h-[560px] bg-(--orange-dark) flex relative overflow-hidden rounded-lg">
            <img src="/assets/home/desktop/pattern-circles.svg" alt="Pattern Circles" className="absolute top-0 -left-1/8" />
            <div className="flex-start w-1/2">
              <img src="/assets/home/desktop/image-speaker-zx9.svg" alt="zx9 speaker" className="absolute bottom-0 left-1/10" />
            </div>
            <div className="text absolute top-1/2 -right-1/10 -translate-y-1/2 flex flex-col gap-6 justify-end  w-1/2 text-white text-left">
              <h1 className='text-6xl font-semibold uppercase'>zx9 <br /> speaker</h1>
              <p className='text-base w-2/3 tracking-wide text-(--white-light)'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <p className='p-3 px-6 uppercase bg-black hover:bg-[#4c4c4c] cursor-pointer w-fit text-sm'>See product</p>
            </div>
          </div>

          <div className="speaker h-80 bg-no-repeat bg-cover bg-center rounded-lg flex items-center" style={{ backgroundImage: `url(/assets/home/desktop/image-speaker-zx7.jpg)` }}>
            <div className="text flex flex-col gap-6 items-start px-30">
              <p className='text-2xl font-semibold uppercase tracking-[2px]'>zx7 speaker</p>
               <p className='p-3 px-6 uppercase border border-black hover:bg-black hover:text-white cursor-pointer w-fit text-sm'>See product</p>
            </div>
          </div>

          <div className="h-80 flex gap-8">
            <img src="/assets/home/desktop/image-earphones-yx1.jpg" alt="earphones" className='rounded-lg w-1/2'/>
            <div className="w-1/2 px-30 rounded-lg bg-(--white-dark) flex flex-col gap-6 items-start justify-center">
               <p className='text-2xl font-semibold uppercase tracking-[2px]'>yx1 earphones</p>
               <p className='p-3 px-6 uppercase border border-black hover:bg-black hover:text-white cursor-pointer w-fit text-sm'>See product</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Products;