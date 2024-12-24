import React from 'react'
import Carousel from '../components/image-carousel/swiper.jsx'
import Card from "../components/lab_card/card.jsx"
const images = [{"img":"https://swiperjs.com/demos/images/nature-1.jpg","tag":"Software Systems Labortary"},{"img":"https://swiperjs.com/demos/images/nature-2.jpg","tag":"Goofy Systems Laboratory"},{"img":"https://swiperjs.com/demos/images/nature-3.jpg","tag":"Skibidi Laboratory"}]
const page = () => {
  return (
    <>
    <div className='h-[40vh]'>white space</div>
    <div className='w-[100%] flex justify-center items-center border-2 border-black h-[420px] sm:h-[460px] md:h-[460px]'>
        <Carousel flag={1} images={images} width={"w-[300px] sm:w-[700px] md:w-[800px]"}/>
    </div>
    <Card />
    <Card />
    <Card />
    </>
  )
}

export default page