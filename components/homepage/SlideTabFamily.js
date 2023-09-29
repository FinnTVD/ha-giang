'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const arr = [
    {
        id: 1,
        title: 'TOUR LEADER',
    },
    {
        id: 2,
        title: 'RIDER TEAM',
    },
    {
        id: 3,
        title: 'SPECIALIST',
    },
    {
        id: 4,
        title: 'LOCAL HOST',
    },
]

export default function SlideTabFamily({ indexTab, setIndexTab }) {
    const swiperRef = useRef()
    const [indexSlider, setIndexSlider] = useState(0)
    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.activeIndex)
    }

    return (
        <div
            id='box-slide-family'
            className='relative w-fit h-fit'
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
                        onClick={() => {
                            setIndexSlider(index)
                            setIndexTab(e?.id)
                        }}
                    >
                        TOUR LEADER
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
