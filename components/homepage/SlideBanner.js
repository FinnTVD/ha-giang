'use client'

import 'swiper/css/effect-fade'
import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'

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
        <div className='relative w-full h-full'>
            <Swiper
                grabCursor={true}
                slidesPerView={1}
                effect={'fade'}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                modules={[EffectFade]}
                className='w-full h-full'
            >
                {arr?.map((e, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            className='object-cover w-full h-full rounded-[1vw]'
                            src={index % 2 === 0 ? '/images/bannervn.jpg' : '/images/header-detail.jpg'}
                            width={900}
                            height={500}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {arr?.length > 1 && (
                <>
                    <button
                        onClick={handlePrevSlide}
                        id='btn-left'
                        className='p-[1.5vw] absolute left-[4.85vw] top-1/2 -translate-y-1/2 brightness-0 invert z-50'
                    >
                        <Image
                            className='object-contain w-[1.82vw] h-[0.82vw] max-md:w-[7.73333vw] max-md:h-[3.45707vw]'
                            src={'/images/btn-left.svg'}
                            alt='btn-slide'
                            width={36}
                            height={18}
                        />
                    </button>
                    <button
                        id='btn-right'
                        onClick={handleNextSlide}
                        className='p-[1.5vw] absolute right-[4.85vw] top-1/2 -translate-y-1/2 z-50 brightness-0 invert'
                    >
                        <Image
                            className='object-contain w-[1.82vw] h-[0.82vw] max-md:w-[7.73333vw] max-md:h-[3.45707vw] rotate-180'
                            src={'/images/btn-left.svg'}
                            alt='btn-slide'
                            width={36}
                            height={18}
                        />
                    </button>
                </>
            )}
            <div
                id='box-icon'
                className='gap-x-[2.5vw] flex w-fit h-fit absolute bottom-[3.5vw] max-md:bottom-[5.33vw] left-1/2 lg:-translate-x-1/2 z-50 lg:opacity-0 max-md:flex-col max-md:left-[4.27vw] max-md:gap-y-[3.2vw]'
            >
                <div className='flex lg:flex-col max-md:gap-x-[2.13vw] items-center lg:justify-center'>
                    <Image
                        className='object-contain w-[3vw] h-[3vw] max-md:w-[8.533vw] max-md:h-[8.533vw]'
                        src={'/images/award.svg'}
                        alt='award'
                        width={50}
                        height={50}
                    />
                    <div className='flex flex-col lg:items-center'>
                        <span className='mt-[0.5vw] text-white text-[1.25vw] max-md:text-[4.27vw] max-md:font-bold max-md:leading-normal max-md:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]'>
                            Top #1
                        </span>
                        <span className='text-[0.875vw] text-white max-md:text-[3.2vw] max-md:leading-[1.33vw] font-normal leading-[1.57] tracking-[0.00219rem]'>
                            Epic loop in Vietnam
                        </span>
                    </div>
                </div>
                <div className='flex lg:flex-col max-md:gap-x-[2.13vw] items-center lg:justify-center'>
                    <Image
                        className='object-contain w-[3vw] h-[3vw] max-md:w-[8.533vw] max-md:h-[8.533vw]'
                        src={'/images/agency.svg'}
                        alt='agency'
                        width={50}
                        height={50}
                    />
                    <div className='flex flex-col lg:items-center'>
                        <span className='mt-[0.5vw] text-white text-[1.25vw] max-md:text-[4.27vw] max-md:font-bold max-md:leading-normal max-md:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]'>
                            300 km
                        </span>
                        <span className='text-[0.875vw] text-white max-md:text-[3.2vw] max-md:leading-[1.33vw] font-normal leading-[1.57] tracking-[0.00219rem]'>
                            North of Hanoi
                        </span>
                    </div>
                </div>
                <div className='flex lg:flex-col max-md:gap-x-[2.13vw] items-center lg:justify-center'>
                    <Image
                        className='object-contain w-[3vw] h-[3vw] max-md:w-[8.533vw] max-md:h-[8.533vw]'
                        src={'/images/bus.svg'}
                        alt='bus'
                        width={50}
                        height={50}
                    />
                    <div className='flex flex-col lg:items-center'>
                        <span className='mt-[0.5vw] text-white text-[1.25vw] max-md:text-[4.27vw] max-md:font-bold max-md:leading-normal max-md:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]'>
                            8 hours
                        </span>
                        <span className='text-[0.875vw] text-white max-md:text-[3.2vw] max-md:leading-[1.33vw] font-normal leading-[1.57] tracking-[0.00219rem]'>
                            Bus drive
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
