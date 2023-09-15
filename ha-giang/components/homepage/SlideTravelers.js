'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

const arr = new Array(6).fill(0)
const star = new Array(5).fill(0)
export default function SlideTravelers() {
    return (
        <Swiper
            spaceBetween={24}
            slidesPerView={3}
            className='h-[14vw] mt-[2.5vw]'
        >
            {arr?.map((e, index) => (
                <SwiperSlide key={index}>
                    <div className='w-full h-full relative rounded-[1vw] overflow-hidden p-[1.56vw] bg-white flex flex-col items-center justify-center'>
                        <p className='text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem]'>
                            Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded
                            my expectations and was all hassle free. Our guide was absolutely amazing too. Have
                            re-booked and cannot wait for next year! Camilla
                        </p>
                        <div className='flex items-center gap-x-[0.25vw] mt-[1vw]'>
                            {star?.map((e, index) => (
                                <svg
                                    key={index}
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 16 16'
                                    fill='none'
                                >
                                    <path
                                        d='M8.94868 2.84605C8.64478 1.93435 7.35522 1.93435 7.05132 2.84605L6.22792 5.31623C6.09181 5.72457 5.70967 6 5.27924 6H2.85078C1.9055 6 1.48795 7.19036 2.22609 7.78087L4.45551 9.56441C4.78266 9.82613 4.91199 10.264 4.7795 10.6615L4.07082 12.7875C3.7557 13.7329 4.86606 14.5072 5.6442 13.8846L7.3753 12.4998C7.74052 12.2076 8.25948 12.2076 8.6247 12.4998L10.3558 13.8846C11.1339 14.5072 12.2443 13.7329 11.9292 12.7875L11.2205 10.6615C11.088 10.264 11.2173 9.82613 11.5445 9.56441L13.7739 7.78087C14.5121 7.19036 14.0945 6 13.1492 6H10.7208C10.2903 6 9.90819 5.72457 9.77208 5.31623L8.94868 2.84605Z'
                                        fill='#E56026'
                                    />
                                </svg>
                            ))}
                        </div>
                        <span>Camilla</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
