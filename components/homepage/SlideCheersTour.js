'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

export default function SlideCheersTour({ arr }) {
    return (
        <Swiper
            loop={true}
            spaceBetween={0}
            slidesPerView={'auto'}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            speed={1500}
            modules={[FreeMode, Autoplay]}
            className='h-[25.6vw] md:!hidden max-md:!px-[4.27vw]'
        >
            {Array.isArray(arr) &&
                arr?.map((e, index) => (
                    <SwiperSlide
                        key={index}
                        className='!h-full !w-[91.4vw] !flex !justify-center !items-center'
                    >
                        <Image
                            className='z-0 object-contain'
                            src={'/images/bg-text-cheer.png'}
                            fill
                            sizes='100vw'
                        />
                        <span className='relative w-full line-clamp-1 text-center font-poppins z-[1] text-primary-5 font-bold text-[3.5vw] leading-[1.57] tracking-[0.00933rem]'>
                            {e?.title}
                        </span>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}
