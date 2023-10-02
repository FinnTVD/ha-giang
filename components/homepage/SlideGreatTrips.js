'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ItemCardTour from './ItemCardTour'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import IconMotor from '../icons/IconMotor'

const arr = new Array(2).fill(0)

export default function SlideGreatTrips({ allTourHG }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const swiperRef = useRef(null)
    const [indexTab, setIndexTab] = useState(0)

    const handleSlideChange = (swiper) => {
        setIndexTab(swiper.realIndex)
    }

    const handleSlideTo = (index) => {
        swiperRef.current?.slideTo(index)
    }

    return (
        <>
            {isMobile && (
                <div className='w-full flex gap-x-[3.2vw] px-[4.27vw] my-[5.33vw]'>
                    {arr?.map((e, index) => (
                        <div
                            key={index}
                            className={`${
                                indexTab === index ? 'bg-primary-5' : 'bg-white'
                            } flex flex-1 justify-center items-center h-fit gap-x-[2.13vw] rounded-[2.133vw] shadow-btnTravel`}
                            onClick={() => handleSlideTo(index)}
                        >
                            <IconMotor className={'w-[5.33vw] h-[5.33vw]'} />
                            <span
                                className={`${
                                    indexTab === index ? 'text-primary-70' : 'text-gray-scale-80'
                                } text-[3.733vw] font-semibold leading-[1.42] tracking-[0.03733vw] py-[3.2vw]`}
                            >
                                {index === 0 ? '4 DAYS TOUR' : '3 DAYS TOUR'}
                            </span>
                        </div>
                    ))}
                </div>
            )}
            <div className='flex justify-center items-end gap-x-[1.5vw] relative z-10 h-fit mt-[1.88vw]'>
                <Swiper
                    grabCursor={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                    }}
                    onSlideChange={handleSlideChange}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    className='lg:w-[81.1vw] h-fit max-md:!px-[4.27vw]'
                >
                    {allTourHG?.nodes?.map((e, index) => (
                        <SwiperSlide
                            key={index}
                            className='relative'
                        >
                            <ItemCardTour data={e} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {!isMobile && (
                <Image
                    className='object-cover absolute top-0 left-0 w-full h-[38vw] z-[1]'
                    src={'/images/mask-great-trips.png'}
                    alt='great trips'
                    width={1600}
                    height={800}
                    quality={100}
                />
            )}
        </>
    )
}
