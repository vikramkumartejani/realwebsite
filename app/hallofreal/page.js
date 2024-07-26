import Image from 'next/image'
import React from 'react'

const HallOfReal = () => {
  return (
    <div className='h-svh bg-custom-gradient text-center'>
        <div className='pt-[50px] pb-[84px] px-1 sm:px-2.5'>
            <h2 className='text-white text-[50px] xsm:text-[64px] leading-[86px] font-normal mb-[15px]'>HALL OF REAL</h2>
            <div className='flex items-center xl:flex-row flex-col justify-center gap-5'>
                <div className='flex items-end flex-col gap-2 sm:gap-5'>
                    <div className='flex flex-row items-end gap-1 sm:gap-5'>
                        <Image src='/assets/hall-of-real1.svg' alt='hall-of-real' width={210} height={373} className='md:w-[210px] w-[150px] sm:block hidden' />
                        <Image src='/assets/hall-of-real2.svg' alt='hall-of-real' width={233} height={414} className='md:w-[233px]  w-[150px]' />
                        <Image src='/assets/hall-of-real3.svg' alt='hall-of-real' width={237} height={416} className='md:w-[237px]  w-[160px]' />
                    </div>
                    <div className='flex  items-end justify-center w-full gap-1 sm:gap-5'>
                        <Image src='/assets/hall-of-real1.svg' alt='hall-of-real' width={210} height={373} className='md:w-[210px] w-[150px] block sm:hidden' />
                        <Image src='/assets/hall-of-real4.svg' alt='hall-of-real' width={281} height={408} className='md:w-[281px] w-[180px]'/>
                        <Image src='/assets/hall-of-real5.svg' alt='hall-of-real' width={467} height={409} className='md:w-[467px] w-[350px] sm:block hidden' />
                    </div>
                </div>
                <div>
                    <Image src='/assets/hall-of-real5.svg' alt='hall-of-real' width={467} height={409} className='md:w-[467px]  w-[400px] block sm:hidden' />
                </div>
                <div>
                    <Image src='/assets/hall-of-real6.svg' alt='hall-of-real1' width={413} height={733} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HallOfReal