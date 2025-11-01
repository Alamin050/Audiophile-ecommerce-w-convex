import React from 'react';
import ProductCard from './ProductCard';

function Products() {
  return (
    <div className='bg-(--white-light) lg:py-[150px] py-[100px] lg:px-[100px] md:px-[50px] px-[25px]'>
      <div className="mx-auto max-w-[1110px]">
        <div className=" flex flex-col md:flex-row justify-between lg:mb-[150px] mb-[100px] gap-[100px] md:gap-4 items-center">
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
          <div className="lg:h-[560px] h-[600px] bg-(--orange-dark) flex flex-col relative overflow-hidden rounded-lg items-center md:gap-y-[30px]">
            <img src="/assets/home/desktop/pattern-circles.svg" alt="Pattern Circles" className="absolute top-0 -left-1/8" />
            <div className="flex-start w-full flex justify-center">
              <picture>
                <source media="(min-width: 1024px)" srcSet="/assets/home/desktop/image-speaker-zx9.svg" />
                <source media="(min-width: 768px)" srcSet="/assets/home/tablet/image-speaker-zx9.png" />
                <img src="/assets/home/mobile/image-speaker-zx9.png" alt="zx9 speaker" className="absolute w-[170px] md:w-[250px] lg:w-[400px] top-10 lg:top-auto lg:bottom-0 left-1/2 -translate-x-1/2 lg:left-[5%] xl:left-1/10 lg:translate-x-0" />
              </picture>
            </div>
            <div className="text absolute w-full text-white text-center top-auto bottom-1/10 md:bottom-1/20 lg:bottom-auto left-1/2 -translate-x-1/2 lg:translate-x-0 lg:top-1/2 lg:-right-1/10 lg:-translate-y-1/2 lg:w-1/2 lg:text-left flex flex-col gap-6 justify-end lg:pl-[50px]">
              <h1 className='text-4xl lg:text-6xl font-semibold uppercase'>zx9 <br /> speaker</h1>
              <p className='text-sm lg:text-base w-full md:w-2/3 px-[20px] md:px-0 mx-auto lg:mx-0 tracking-wide text-(--white-light)'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <p className='p-3 px-6 uppercase bg-black hover:bg-[#4c4c4c] cursor-pointer w-fit text-sm mx-auto lg:mx-0'>See product</p>
            </div>
          </div>

          <div className="speaker h-80 bg-no-repeat bg-cover bg-center rounded-lg flex items-center" style={{ backgroundImage: `url(/assets/home/desktop/image-speaker-zx7.jpg)` }}>
            <div className="text flex flex-col gap-6 items-start px-10 md:px-15 lg:px-30">
              <p className='text-2xl font-semibold uppercase tracking-[2px]'>zx7 speaker</p>
               <p className='p-3 px-6 uppercase border border-black hover:bg-black hover:text-white cursor-pointer w-fit text-sm'>See product</p>
            </div>
          </div>

          <div className="h-80 flex flex-col md:flex-row lg:gap-8 gap-4">
            <picture className="w-full md:w-1/2 h-[200px] md:h-auto">
              <source media="(min-width: 1024px)" srcSet="/assets/home/desktop/image-earphones-yx1.jpg" />
              <source media="(min-width: 768px)" srcSet="/assets/home/tablet/image-earphones-yx1.jpg" />
              <img src="/assets/home/mobile/image-earphones-yx1.jpg" alt="earphones" className="rounded-lg w-full h-full object-cover" />
            </picture>
            <div className="w-full md:w-1/2 lg:px-30 px-15 rounded-lg bg-(--white-dark) flex flex-col gap-6 items-start justify-center min-h-[200px]">
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