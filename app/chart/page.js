import Image from 'next/image'
import React from 'react'

const Chart = () => {
  return (
    <div className='h-svh bg-custom-gradient w-full '>
        <div className='w-full flex xl:flex-row flex-col-reverse items-center xl:items-start justify-between gap-0 sm:gap-5 px-[10px] sm:px-[20px] md:px-[50px] 2xl:px-[100px] pb-[50px] max-w-[1920px] mx-auto'>
            <div className='mt-[121px] text-white flex xl:flex-col flex-col-reverse xl:items-start items-center'>
                <div className=''>
                    <h2 className='text-[17px] sm:text-[32px] leading-[43.1px] font-normal'><span className='text-[50px] sm:text-[64px] leading-[86.21px]'>real</span>, the unspoken male experience.</h2>
                    <div className='h-[1px] w-full max-w-[650px] bg-white'></div>
                    <p className='sm:text-[32px] sm:leading-[43.1px] text-[25px] leading-[35px] font-normal mt-[15px] xl:max-w-[709px]'>     Real is a social phenomenon that dwarfs all other zoomer trends in comparison. </p>
                    <p className='sm:text-[32px] sm:leading-[43.1px] text-[25px] leading-[35px] font-normal mb-1.5 mt-1 xl:max-w-[709px]'>You've undeniably felt it before, that feeling of kinship through a mutual experience summarized in one word, real.</p>
                    <h3 className='sm:text-[64px] text-[40px] leading-[86.21px] font-normal'>REAL STATISTICS</h3>
                </div>
                <Image src='/assets/real-statistics.png' alt='real-statistics' loading='lazy' width={700} height={500} className='ml-[-72px]' />
            </div>
            <div className='mt-[58px] text-white flex flex-col items-center '>
                <Image src='/assets/marketcap.png' alt='marketcap' loading='lazy' width={700} height={500} />
                <div className='xl:max-w-[597px] mx-auto mt-3'>
                    <h2 className='text-white sm:text-[64px] text-[40px] leading-[86.21px] font-normal'>REAL GRAPH</h2>
                    <p className='text-white sm:text-[32px] sm:leading-[43.1px] text-[25px] leading-[35px] font-normal'>Given the data with over 29.7m posts on Tiktok, what marketcap do you think it deserves?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chart