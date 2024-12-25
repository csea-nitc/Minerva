import React from 'react';
import Footer from '../components/footer/Footer';
import Swiper  from '../components/image-carousel/swiper';
const images = [{"img":"https://swiperjs.com/demos/images/nature-1.jpg","tag":"Software Systems Labortary"},{"img":"https://swiperjs.com/demos/images/nature-2.jpg","tag":"Goofy Systems Laboratory"},{"img":"https://swiperjs.com/demos/images/nature-3.jpg","tag":"Skibidi Laboratory"}]
const Page = () => {
  return (
    <>
    <div className = " overflow-hidden w-[100%] bg-accent flex justify-end items-center">
      <div className='max-h-[90vh] min-h-[790px] w-[97.5%] bg-white'>
        <div className='h-[30%] md:h-[22%] p-10 mt-[10px] flex flex-col md:flex-row justify-center items-center gap-4'>
          <div className='font-Teko bg-accent text-white font-medium px-2 py-10 md:py-5 h-[30%] flex items-center justify-center text-[1.5rem] sm:text-[2.5rem] md:text-[2.1rem] lg:text-[2.9rem] rounded-2xl w-[100%] text-center'>
            <span className='w-[60%]'>DEPARTMENT BROCHURE</span>
            <span className='w-14'><img src="/images/download-icon.svg" /></span>
          </div>
          <div className='font-Teko bg-accent text-white font-medium px-5 py-8 md:py-5 h-[30%] flex items-center justify-around text-[1.7rem] sm:text-[2.7rem] lg:text-[2.9rem] w-[100%] rounded-2xl text-center '>
            <span className='w-[100%]'>PhD BROCHURE</span>
            <span className='w-14'><img src="/images/download-icon.svg" /></span>
          </div>
        </div>
        <div className='h-[540px] sm:h-[500px] md:h-[500px] overflow-hidden relative flex'>
            <div className='w-[100%] absolute top-2 left-0 flex justify-center items-center z-10'>
              <Swiper images={images} flag={0} width={"w-[300px] sm:w-[700px] md:w-[800px]"}/>
            </div>
            <div className='h-[22%] sm:text-[10rem] md:text-[12rem] sm:top-[250px] md:top-[280px] w-[100%] absolute flex justify-center items-start font-Teko font-semibold tracking-wide top-[265px] text-[7rem] text-accent '>
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
