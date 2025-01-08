import React from "react";
import Carousel from "../components/image-carousel/swiper.jsx";
import Card from "../components/lab_card/card.jsx";
import ImgCard from "../components/imagehero/Imagehero.jsx";
const images = [
  {
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
    tag: "Software Systems Labortary",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-2.jpg",
    tag: "Operating Systems Laboratory",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-3.jpg",
    tag: "ML Laboratory",
  },
];
const lab = [
  {
    title: "SSL",
    faculty: "Dr. Hiran V Nath",
    staff: "placeholder",
    location: "placeholder",
  },
  {
    title: "SSL",
    faculty: "Dr. Hiran V Nath",
    staff: "placeholder",
    location: "placeholder",
  },
  {
    title: "SSL",
    faculty: "Dr. Hiran V Nath",
    staff: "placeholder",
    location: "placeholder",
  },
];
const page = () => {
  return (
    <>
      <ImgCard
        title={"Laboratories"}
        font={"70px"}
        mobileFont={"50px"}
        contentdiv={".content-div"}
      />
      <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
        <div className="sm:w-[65%] w-[85%] mx-auto">
          <div className=" w-[100%] flex justify-center items-cente h-[420px]  sm:h-[460px] md:h-[460px]">
            <Carousel
              flag={1}
              images={images}
              width={"w-[300px] sm:w-[700px] md:w-[800px]"}
            />
          </div>
          {lab.map((e) => (
            <Card
              title={e.title}
              faculty={e.faculty}
              staff={e.staff}
              location={e.location}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
