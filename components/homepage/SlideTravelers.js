'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

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
                                {star?.slice(0, Number(e?.rate))?.map((i, indexi) => (
                                    <svg
                                        key={indexi}
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        className='w-[1vw] h-[1vw] max-md:w-[4.267vw] max-md:h-[4.267vw]'
                                    >
                                        <path
                                            d='M8.94868 2.84605C8.64478 1.93435 7.35522 1.93435 7.05132 2.84605L6.22792 5.31623C6.09181 5.72457 5.70967 6 5.27924 6H2.85078C1.9055 6 1.48795 7.19036 2.22609 7.78087L4.45551 9.56441C4.78266 9.82613 4.91199 10.264 4.7795 10.6615L4.07082 12.7875C3.7557 13.7329 4.86606 14.5072 5.6442 13.8846L7.3753 12.4998C7.74052 12.2076 8.25948 12.2076 8.6247 12.4998L10.3558 13.8846C11.1339 14.5072 12.2443 13.7329 11.9292 12.7875L11.2205 10.6615C11.088 10.264 11.2173 9.82613 11.5445 9.56441L13.7739 7.78087C14.5121 7.19036 14.0945 6 13.1492 6H10.7208C10.2903 6 9.90819 5.72457 9.77208 5.31623L8.94868 2.84605Z'
                                            fill='#E56026'
                                        />
                                    </svg>
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
