'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SlidePeople({ section6, indexTab }) {
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
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                freeMode={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                modules={[FreeMode]}
                className='h-[25.875vw] max-md:h-[113.93vw] w-full'
            >
                {section6?.listCategory[indexTab]?.listPeople?.map((e, index) => (
                    <SwiperSlide
                        key={index}
                        className='relative cursor-pointer group'
                    >
                        <Image
                            className='object-cover w-full h-full rounded-[1vw] max-md:rounded-[4.27vw]'
                            src={e?.avatar?.sourceUrl || '/images/people.jpg'}
                            alt={e?.avatar?.altText || e?.avatar?.title}
                            width={400}
                            height={500}
                        />
                        <div className='absolute z-10 bottom-[1.5vw] left-1/2 -translate-x-1/2 w-[17.75vw] max-md:w-[70.75vw] max-md:h-fit max-md:rounded-[2.13vw] h-[4.9375vw] rounded-[1vw] opacity-90 bg-primary-70 pt-[0.94vw] px-[0.87vw] max-md:px-[1.87vw] max-md:pb-[2.87vw] max-md:pt-[1.94vw] pb-[0.87vw] max-md:bottom-[5.5vw] '>
                            <h2 className='text-[1vw] font-semibold leading-normal tracking-[0.005vw] text-white text-center line-clamp-1 max-md:text-[4.67vw]'>
                                {e?.name}
                            </h2>
                            <div className='text-[0.875vw] max-md:text-[3.875vw] mt-[0.25vw] leading-[1.57] font-normal tracking-[0.00219vw] text-white flex items-center justify-center line-clamp-2'>
                                {e?.job}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='5'
                                    height='4'
                                    viewBox='0 0 5 4'
                                    fill='none'
                                    className='mx-[0.59vw] w-[0.3vw] h-[0.3vw]'
                                >
                                    <circle
                                        cx='2.5'
                                        cy='2'
                                        r='2'
                                        fill='white'
                                    />
                                </svg>
                                {e?.experience}
                            </div>
                        </div>
                        <div className='absolute z-20 top-0 left-0 max-md:left-1/2 max-md:top-[5%] max-md:-translate-x-1/2 w-full h-full bg-white/95 p-[1.5vw] rounded-[1vw] opacity-0 translate-y-[110%] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 shadow-btnTravel max-md:rounded-[4.27vw] max-md:p-[4.27vw] max-md:w-[90%] max-md:h-[90%]'>
                            <h2 className='text-[1vw] font-semibold leading-normal tracking-[0.005vw] text-[#8B3A17] text-center line-clamp-1 max-md:text-[6vw]'>
                                {e?.name}
                            </h2>
                            <div className='text-[0.875vw] max-md:text-[3.875vw] mt-[0.25vw] leading-[1.57] font-normal tracking-[0.00219vw] text-gray-scale-50 flex items-center justify-center line-clamp-2'>
                                {e?.job}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='5'
                                    height='4'
                                    viewBox='0 0 5 4'
                                    fill='none'
                                    className='mx-[0.59vw] w-[0.3vw] h-[0.3vw]'
                                >
                                    <circle
                                        cx='2.5'
                                        cy='2'
                                        r='2'
                                        fill='#727272'
                                    />
                                </svg>
                                {e?.experience}
                            </div>
                            <div className='h-[1px] w-full my-[0.75vw] bg-[#D9D9D9]'></div>
                            <p className='text-[0.875vw] max-md:text-[3.875vw] font-normal leading-[1.57] tracking-[0.00219vw]'>
                                {e?.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {section6?.listCategory[indexTab]?.listPeople?.length > 4 && (
                <>
                    <button
                        onClick={handlePrevSlide}
                        className='p-[1.5vw] absolute left-0 max-md:left-[1.5vw] top-1/2 -translate-y-1/2 z-[5] lg:-translate-x-full'
                    >
                        <Image
                            className='object-contain w-[1.82vw] h-[0.82vw] max-md:w-[8.53vw] max-md:h-[5.82vw]'
                            src={'/images/btn-left.svg'}
                            alt='btn-slide'
                            width={36}
                            height={18}
                        />
                    </button>
                    <button
                        onClick={handleNextSlide}
                        className='p-[1.5vw] absolute right-0 max-md:right-[1.5vw] top-1/2 -translate-y-1/2 z-[5] lg:translate-x-full'
                    >
                        <Image
                            className='object-contain w-[1.82vw] h-[0.82vw] max-md:w-[8.53vw] max-md:h-[5.82vw] rotate-180'
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
