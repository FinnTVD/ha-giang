'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

export default function SlideCheersTour({ arr }) {
    return (
        <Swiper
            spaceBetween={4}
            slidesPerView={'auto'}
            modules={[FreeMode]}
            className='h-[21.89547vw] md:!hidden max-md:!px-[4.27vw]'
        >
            {Array.isArray(arr) &&
                arr?.map((e, index) => (
                    <SwiperSlide
                        key={index}
                        className='!h-full !w-[86.28vw] !flex !justify-center !items-center'
                    >
                        <Image
                            className='z-0 object-contain'
                            src={'/images/bg-text-cheer.png'}
                            fill
                            sizes='100vw'
                        />
                        <span className='relative font-poppins z-[1] text-primary-5 font-bold text-[3.733vw] leading-[1.57] tracking-[0.00933rem]'>
                            {e?.title}
                        </span>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}
