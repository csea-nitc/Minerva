import React from 'react';


const Hero = () => {
  return (
    <div className='w-[100vw] h-[100vh] m-0 p-0 box-border'>
        <div className='relative container-fluid w-[100%] h-[100%] flex flex-col text-center justify-center items-center bg-cover bg-center' style={{backgroundImage:"url('./Hero/hero-bg.png')"}}>
            <p className='text-white font-saira text-5xl lg:text-6xl font-extrabold w-[65%] p-auto'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</p>
            <div className='bg-[#FFFBF2] w-[60%] md:w-[45%] rounded-2xl relative top-12 md:top-36' >
                <div className='flex justify-around p-3 w-[100%] text-[#812981] font-teko text-left'>
                    <div className='flex flex-col justify-center w-[33%]'>
                        <a className='text-xl md:text-3xl font-bold'>NEWS</a>
                        <p className='text-black text-lg w-[80%]'>The quick brown fox and he likes carrots</p>
                    </div>
                    <div className='flex flex-col justify-center w-[33%] '>
                        <a className='text-xl md:text-3xl font-bold'>UPDATES</a>
                        <p className='text-black text-lg w-[80%]'>The quick brown fox and he likes carrots</p>
                    </div>
                    <div className='flex flex-col justify-center w-[33%]'>
                        <a className='text-xl md:text-3xl font-bold'>EVENTS</a>
                        <p className='text-black text-lg w-[80%]'>The quick brown fox and he likes carrots</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default Hero