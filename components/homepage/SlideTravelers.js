'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import IconStar from '../icons/IconStar'

const star = new Array(5).fill(0)
export default function SlideTravelers({ section5 }) {
    const swiperRef = useRef()

    const handleNextSlide = () => {
        swiperRef.current?.slideNext()
    }

    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev()
    }
    return (
        <div className='relative z-[5]'>
            <Swiper
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                }}
                freeMode={true}
                grabCursor={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                modules={[FreeMode]}
                className='h-[14vw] mt-[2.5vw] max-md:mt-[5.33vw] max-md:h-[67.733vw]'
            >
                {section5?.listFeedback?.map((e, index) => (
                    <SwiperSlide
                        className='rounded-[1vw] max-md:!w-[76.267vw] max-md:rounded-[3.2vw]'
                        key={index}
                    >
                        <div className='w-full max-md:rounded-[3.2vw] shadow-slideTrave h-full relative rounded-[1vw] overflow-hidden p-[1.56vw] max-md:p-[5.33vw] bg-white flex flex-col items-center justify-center'>
                            <p className='text-[0.875vw] font-normal max-md:line-clamp-[7] line-clamp-5 leading-[1.57] text-gray-scale-50 tracking-[0.00219vw] text-center max-md:text-[3.733vw] max-md:tracking-[0.00933vw]'>
                                {e?.description}
                            </p>
                            <div className='flex items-center gap-x-[0.25vw] mt-[1vw] max-md:mt-[4.27vw]'>
                                {star?.slice(0, Number(e?.rate))?.map((i, ind) => (
                                    <IconStar
                                        key={ind}
                                        className='w-[1vw] h-[1vw] max-md:w-[4.267vw] max-md:h-[4.267vw]'
                                    />
                                ))}
                            </div>
                            <span className='text-[1vw] leading-normal font-semibold tracking-[0.0125vw] text-primary-70 mt-[0.5vw] max-md:mt-[2.13vw] max-md:text-[3.733vw] max-md:leading-[1.42] max-md:tracking-[0.03733vw]'>
                                {e?.name}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {section5?.listFeedback?.length > 3 && (
                <>
                    <button
                        onClick={handlePrevSlide}
                        className='p-[1.5vw] absolute left-[-6vw] top-1/2 -translate-y-1/2 z-[5] max-md:hidden'
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
                        className='p-[1.5vw] absolute right-[-6vw] top-1/2 -translate-y-1/2 z-[5] max-md:hidden'
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
