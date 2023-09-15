'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

const arr = new Array(4).fill(0)

export default function SlideGallery() {
    return (
        <Swiper
            spaceBetween={24}
            slidesPerView={4}
            className='h-[28.75vw] mt-[1.88vw]'
            >
            {
                arr?.map((e,index)=><SwiperSlide key={index}>
                    <div className='w-full h-full relative rounded-[1vw] overflow-hidden'>
                        <Image className='object-cover z-0' src='/images/gallery.jpg' fill sizes='50vw'/>
                            <svg className='w-[11vw] h-[11vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' xmlns="http://www.w3.org/2000/svg" width="176" height="176" viewBox="0 0 176 176" fill="none">
                                <circle cx="88" cy="88" r="87" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeDasharray="10 10"/>
                            </svg>
                            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-poppins text-[1.25vw] font-semibold leading-[1.2] tracking-[0.00188rem]'>
                                Experience
                            </span>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    )
}
