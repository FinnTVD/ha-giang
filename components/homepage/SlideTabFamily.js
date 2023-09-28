'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const arr = new Array(4).fill(0)
export default function SlideTabFamily() {
    const swiperRef = useRef()
    const [indexSlider, setIndexSlider] = useState(0)
    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.activeIndex)
    }

    return (
        <div
            id='box-slide-family'
            className='w-fit h-fit relative'
        >
            <Swiper
                spaceBetween={36}
                slidesPerView='auto'
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                className='h-[1.5vw] w-fit mr-[-2.25vw]'
            >
                {arr?.map((e, index) => (
                    <SwiperSlide
                        className={`${
                            indexSlider === index
                                ? 'text-primary-70 before:absolute before:left-0 before:w-full before:border before:border-solid before:border-primary-70 before:bottom-[-0.25vw]'
                                : 'text-gray-scale-20'
                        } !w-fit !h-[1.25vw] text-[0.875vw] font-semibold leading-[1.42] tracking-[0.00875vw] cursor-pointer relative`}
                        key={index}
                        onClick={() => setIndexSlider(index)}
                    >
                        TOUR LEADER
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
