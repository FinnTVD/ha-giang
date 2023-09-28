'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, FreeMode } from 'swiper/modules'

const arr = new Array(6).fill(0)
export default function SlideFamily() {
    const swiperRef = useRef()
    const [indexSlider, setIndexSlider] = useState(0)
    console.log('🚀 ~ file: SlideFamily.js:12 ~ SlideFamily ~ indexSlider:', indexSlider)
    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.activeIndex)
        swiper.translate = (37.125 * window.innerWidth) / 100
    }

    const handleNextSlide = () => {
        // swiperRef.current?.slideNext()
        if (indexSlider >= 2) {
            console.log('yes')
            //'translateX(37.125vw)'
            // swiperRef.current?.slideNext()
            const slide = document.querySelector('#box-slide-family .swiper-wrapper')
            if (slide) {
                slide.style.transform = `translateX(${'-' + (7.4375 * window.innerWidth) / 100 + 'px'})`
                setIndexSlider(indexSlider + 1)
            }
        } else {
            setIndexSlider(indexSlider + 1)
        }
    }

    const handlePrevSlide = () => {
        // swiperRef.current?.slidePrev()
        if (indexSlider === 0) return

        // if (indexSlider >= 2) {
        //     //'translateX(37.125vw)'
        //     // swiperRef.current?.slideNext()
        //     const slide = document.querySelector('#box-slide-family .swiper-wrapper')
        //     if (slide) {
        //         slide.style.transform = `translateX(${(7.4375 * window.innerWidth) / 100 + 'px'})`
        //         setIndexSlider(indexSlider - 1)
        //     }
        // } else {
        //     setIndexSlider(indexSlider - 1)
        // }
        setIndexSlider(indexSlider - 1)
    }
    return (
        <div
            id='box-slide-family'
            className='w-fit h-fit relative'
        >
            <Swiper
                spaceBetween={24}
                slidesPerView={3}
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
                className='h-[25.825vw] w-[50.5vw]'
            >
                {arr?.map((e, index) => (
                    <SwiperSlide
                        className={`${
                            indexSlider === index ? '!w-[35.625vw]' : '!w-[5.9375vw]'
                        }  !h-full rounded-[1vw] transition-all duration-1000`}
                        key={index}
                        onClick={() => setIndexSlider(index)}
                    >
                        {({ isActive }) => (
                            <Image
                                className='object-cover w-full h-full rounded-[1vw]'
                                src={index % 2 === 0 ? '/images/item-tour.jpg' : '/images/weather.jpg'}
                                width={500}
                                height={500}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {arr?.length > 3 && (
                <>
                    <button
                        onClick={handlePrevSlide}
                        className='p-[1.5vw] absolute left-[-0.5vw] top-1/2 -translate-y-1/2 z-[5] brightness-0 invert'
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
                        className='p-[1.5vw] absolute right-[-0.5vw] top-1/2 -translate-y-1/2 z-[5] brightness-0 invert'
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
