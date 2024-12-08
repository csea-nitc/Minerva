import React from 'react';
import Swiper from './swiper.js';
const images = [{"img":"https://swiperjs.com/demos/images/nature-1.jpg","tag":"Software Systems Labortary"},{"img":"https://swiperjs.com/demos/images/nature-2.jpg","tag":"noo"},{"img":"https://swiperjs.com/demos/images/nature-3.jpg","tag":"IDKk"}]
const Page = () => {
  return (
    <div className='bg-white h-[100vh] w-full flex justify-center items-center'>
      <Swiper images={images} flag={1}/>
    </div>
  );
};

export default Page;
