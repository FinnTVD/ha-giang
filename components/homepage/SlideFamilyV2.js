'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const arr = new Array(6).fill(0)
export default function SlideFamilyV2() {
    const swiperRef = useRef()
    const [indexSlider, setIndexSlider] = useState(0)
    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.activeIndex)
    }

    const handleNextSlide = () => {
        swiperRef.current?.slideNext()
    }

    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev()
    }
    return (
        <div
            id='box-slide-family'
            className='w-fit h-fit relative'
        >
            <Swiper
                spaceBetween={24}
                slidesPerView='auto'
                // centerInsufficientSlides={true}
                // centeredSlidesBounds={true}
                // freeMode={true}
                grabCursor={true}
                speed={1000}
                // virtualTranslate={true}
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                className='h-[25.825vw] mt-[2.5vw] w-[50.5vw]'
            >
                {arr?.map((e, index) => (
                    <SwiperSlide
                        className={`${
                            indexSlider === index ? '!w-[35.625vw]' : '!w-[5.9375vw]'
                        }  !h-full rounded-[1vw] transition-all duration-1000`}
                        key={index}
                        onClick={() => setIndexSlider(index)}
                    >
                        <Image
                            className='object-cover w-full h-full rounded-[1vw]'
                            src={index % 2 === 0 ? '/images/item-tour.jpg' : '/images/weather.jpg'}
                            width={500}
                            height={500}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {arr?.length > 3 && (
                <>
                    <button
                        onClick={handlePrevSlide}
                        className='p-[1.5vw] absolute left-[-6vw] top-1/2 -translate-y-1/2 z-[5]'
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
                        className='p-[1.5vw] absolute right-[-6vw] top-1/2 -translate-y-1/2 z-[5]'
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
