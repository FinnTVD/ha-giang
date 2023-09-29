'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const arr = new Array(6).fill(0)
export default function SlideBanner() {
    const swiperRef = useRef(null)

    const handleNextSlide = () => {
        swiperRef.current?.slideNext()
    }

    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev()
    }
    return (
        <div className='relative w-full h-fit'>
            <Swiper
                grabCursor={true}
                breakpoints={{
                    0: {
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        centeredSlides: true,
                        loop: true,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 24,
                    },
                }}
                freeMode={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                modules={[FreeMode]}
                className='h-[29.8125vw] w-[53vw]'
            >
                {arr?.map((e, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            className='object-cover w-full h-full rounded-[1vw]'
                            src={'/images/bannervn.jpg'}
                            width={900}
                            height={500}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {arr?.length > 3 && (
                <>
                    <button
                        onClick={handlePrevSlide}
                        className='p-[1.5vw] absolute left-0 top-1/2 -translate-y-1/2 z-[5] -translate-x-full'
                    >
                        <Image
                            className='object-contain w-[1.82vw] h-[0.82vw]'
                            src={'/images/btn-left.svg'}
                            alt='btn-slide'
                            width={36}
                            height={18}
                        />
                    </button>
                    <button
                        onClick={handleNextSlide}
                        className='p-[1.5vw] absolute right-0 top-1/2 -translate-y-1/2 z-[5] translate-x-full'
                    >
                        <Image
                            className='object-contain w-[1.82vw] h-[0.82vw] rotate-180'
                            src={'/images/btn-left.svg'}
                            alt='btn-slide'
                            width={36}
                            height={18}
                        />
                    </button>
                </>
            )}
        </div>
    )
}
