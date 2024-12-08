"use client";
// Import Swiper React components
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import './styles.css';

// import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';

export default function App({images,flag}) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <div className='w-[60%] h-[75%] flex flex-col justify-between border-2 border-black'>
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        navigation = {true}
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={3} 
        spaceBetween={-200} 
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        loop = {false}
        speed={1500}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper w-[100%] h-[85%]"
        style={{ transitionTimingFunction: 'ease-in-out' }}
      >
        {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image["img"]} alt={`Slide ${index + 1}`} loading='lazy' />
        </SwiperSlide>
      ))}
      </Swiper>
      <div className={ (!flag?"hidden ":'') + 'w-full flex justify-center items-center'}>
          <button className='border-4 text-accent font-Teko font-bold tracking-wide text-4xl p-3 rounded-2xl border-accent'>{images[activeIndex]["tag"] + "🔗"}</button>
      </div>

    </div>
    </>
  );
}
