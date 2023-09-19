'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation,FreeMode } from 'swiper/modules';
import Image from 'next/image';
function SlideImage({listImageSlide}) {
  return (
    <Swiper 
        navigation={true} 
        modules={[Navigation,FreeMode]} 
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={24}
    >
        {listImageSlide.map((image,index)=>(
            <SwiperSlide key={index}>
                <Image alt="image" src={image} quality={100} className='md:w-[28.125vw] md:h-[19.5625vw] md:rounded-[1vw]' />
            </SwiperSlide>
        ))}

      </Swiper>
  )
}

export default SlideImage