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
import { EffectCoverflow, Navigation, Autoplay} from 'swiper/modules';

export default function App({images,flag,view,width}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  } 
  
  return (
    <>
    <div className='w-[100%]'>
      <Swiper
        modules={[EffectCoverflow, Navigation, Autoplay]}
        onSlideChange={(swiper) => handleChange(swiper)}
        navigation = {true}
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={view} 
        spaceBetween={20} 
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        breakpoints={
          {
            640 : {
              slidesPerView : 3,
              spaceBetween : -120,
              loop : false,
              autoplay: false
            }
          }
        }
        autoplay={{ 
          delay: 2000, // 2 seconds per slide
          disableOnInteraction: true
        }}
        loop = {false}
        speed={1500}
        className={"mySwiper "+width}
        style={{ transitionTimingFunction: 'ease-in-out' }}
      >
        {images && images.map((image, index) => (
        <SwiperSlide key={index}>
        <img 
          src={image["img"]} 
          alt={`Slide ${index + 1}`} 
          loading='lazy' 
          className="w-full h-[300px] object-contain"
        />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>

    </>
  );
}
