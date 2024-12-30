import React from 'react'
import Link from 'next/link'

const Herosupport = () => {
  return (
    <div className='w-[100%]'>
        <div className='w-full bg-accent h-[1vh] bg-opacity-35 relative z-10 bottom-[12vh]'/>
        <div className='w-full bg-accent h-[1vh] bg-opacity-45 relative z-10 bottom-[12vh]'/>
        <div className='w-full bg-accent h-[1vh] bg-opacity-55 relative z-10 bottom-[12vh]'/>
        <div className='w-full bg-accent h-[1vh] bg-opacity-65 relative z-10 bottom-[12vh]'/>
        <div className='w-full bg-accent h-[1vh] bg-opacity-75 relative z-10 bottom-[12vh]'/>
        <div className='w-full bg-accent h-[1vh] bg-opacity-85 relative z-10 bottom-[12vh]'/>
        <div className='w-full bg-accent h-[1vh] bg-opacity-90 relative z-10 bottom-[12vh]'/>
        <div className='w-full bg-accent h-[70vh] md:h-[50vh] flex flex-col md:flex-row relative z-10 bottom-[12vh] mb-[-12vh]'>
            <div className='flex flex-col w-[100%] md:w-[66%] items-center justify-center lg:mt-10 relative bottom-4 lg:bottom-8 h-[100%] '>
                <div className='text-white text-3xl text-bold font-Teko mb-6'>Our Programmes</div>
                <div className='h-[30%] md:h-[22%] p-10 mt-[10px] flex flex-col lg:flex-row justify-center items-center gap-4'>
                    <div className='font-Teko bg-accent text-white font-medium px-8 py-8 lg:py-12 h-[30%] flex items-center justify-center text-[1.5rem] sm:text-[2.5rem] md:text-[2.1rem] w-[100%] text-center mx-4 border-[#e18ce1] border-[3.5px]'>
                        <span className='w-[100%]'>UG BROCHURE</span>
                        <span className='w-14'><img src="/images/download-icon.svg" /></span>
                    </div>
                    <div className='font-Teko bg-accent text-white font-medium px-8 py-8 lg:py-12 h-[30%] flex items-center justify-around text-[1.5rem] sm:text-[2.5rem] md:text-[2.1rem]  w-[100%] text-center mx-4 border-[#e18ce1] border-[3.5px] '>
                        <span className='w-[100%]'>PG BROCHURE</span>
                        <span className='w-14'><img src="/images/download-icon.svg" /></span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col relative bottom-14 md:bottom-0 md:top-2 2xl:mx-10 lg:left-24 font-teko h-[100%] items-center justify-center text-center'>
                <div className='text-white text-3xl text-bold font-Teko m-2 mb-4'>LINKS</div>
                <div className='flex flex-row md:flex-col'>
                    <div className='text-white text-2xl   px-5 py-2'>Placeholder1</div>
                    <div className='text-white text-2xl px-5 py-2'>Placeholder1</div>
                   
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Herosupport

/*
<div className='flex flex-col mt-10 relative bottom-8 left-10 font-teko h-[100%] items-center justify-center'>
                <div className='text-white text-3xl m-2'>Placeholder1</div>
                <div className='text-white text-3xl m-2'>Placeholder1</div>
                <div className='text-white text-3xl m-2'>Placeholder3</div>
</div>
*/