import React from 'react';
import Footer from '../components/Footer/Footer'
import Swiper  from '../components/image-carousel/swiper';
const images = [{"img":"https://swiperjs.com/demos/images/nature-1.jpg","tag":"Software Systems Labortary"},{"img":"https://swiperjs.com/demos/images/nature-2.jpg","tag":"Goofy Systems Laboratory"},{"img":"https://swiperjs.com/demos/images/nature-3.jpg","tag":"Skibidi Laboratory"}]
const Page = () => {
  return (
    <>
    <div className = "h-[100vh] w-[100vw]  bg-accent flex justify-end items-center">
      <div className='h-[100vh] w-[97.5%] bg-white'>
        <div className='h-[18%] border-2 border-black flex justify-center items-center gap-10'>
          <div className='font-Teko bg-accent text-white font-medium px-8 py-12 h-[30%] flex items-center justify-between text-4xl rounded-2xl w-[34%] text-center'>
            <span>DEPARTMENT BROCHURE</span>
            <span><img src="/images/download-icon.svg" /></span>
          </div>
          <div className='font-Teko bg-accent text-white font-medium px-8 py-12 h-[30%] flex items-center justify-between text-4xl rounded-2xl w-[34%] text-center'>
            <span className='w-[100%]'>PhD BROCHURE</span>
            <span><img src="/images/download-icon.svg" /></span>
          </div>
        </div>
        <div className='w-[100%] h-[88%] relative border-2 border-black'>
            <div className='h-[64%] w-[100%] top-0 absolute border-2 border-red-500 flex justify-center items-center z-10'>
              <Swiper images={images} flag={0}/>
            </div>
            <div className='h-[28%] w-[100%] flex justify-center items-start font-Teko font-semibold tracking-wide top-[45%] text-[16rem] text-accent absolute border-blue-500'>
              GALLERY
            </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Page;
