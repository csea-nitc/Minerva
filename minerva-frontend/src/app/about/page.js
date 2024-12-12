import React from 'react';
import Swiper from './swiper.js';
import Footer from '../Footer/Footer.tsx'
const images = [{"img":"https://swiperjs.com/demos/images/nature-1.jpg","tag":"Software Systems Labortary"},{"img":"https://swiperjs.com/demos/images/nature-2.jpg","tag":"Goofy Systems Laboratory"},{"img":"https://swiperjs.com/demos/images/nature-3.jpg","tag":"Skibidi Laboratory"}]
const Page = () => {
  return (
    /* <div className='bg-white h-[100vh] w-full flex justify-center items-center'>
      <Swiper images={images} flag={1}/>
    </div> */
    <Footer />
  );
};

export default Page;
