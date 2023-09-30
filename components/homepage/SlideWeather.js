'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { useRef, useState } from 'react'
const arr = new Array(12).fill(0)

const getMonthNow = () => {
    let now = new Date()
    let month = now.getMonth() // Tháng được đếm từ 0, nên cần cộng thêm 1
    return Number(month)
}
export default function SlideWeather() {
    const [month, setMonth] = useState(getMonthNow())
    const swiperRef = useRef()

    const handleNextSlide = () => {
        swiperRef.current?.slideNext()
    }

    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev()
    }
    return (
        <Swiper
            breakpoints={{
                0: {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 12,
                    spaceBetween: 16,
                },
            }}
            freeMode={true}
            grabCursor={true}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper
            }}
            modules={[FreeMode]}
            className='w-[66.5vw] mt-[1.5vw] relative z-[5] max-md:mt-[5.33vw] max-md:w-auto max-md:!px-[4.27vw]'
        >
            {arr?.map((e, index) => (
                <SwiperSlide
                    onClick={() => setMonth(index)}
                    className='max-md:!w-[16vw] max-md:!h-[16vw]'
                    key={index}
                >
                    <div
                        className={`${
                            index === month ? 'bg-primary-70 text-white' : 'bg-[#f9f9f9] text-gray-scale-50'
                        } w-[4.625vw] h-[4.625vw] rounded-full flex justify-center items-center text-[0.875vw] font-medium leading-[1.57] tracking-[0.00219rem] cursor-pointer max-md:text-[3.467vw] max-md:leading-[1.38] max-md:w-full max-md:h-full`}
                    >
                        JAN
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
