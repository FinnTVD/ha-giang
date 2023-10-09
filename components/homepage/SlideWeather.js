'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

const arrMonth = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
export default function SlideWeather({ section7, month, setMonth }) {
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
      modules={[FreeMode]}
      className='w-[70.5rem] mt-[1.5rem] relative z-[5] max-md:mt-[5.33rem] max-md:w-auto max-md:!px-[4.27rem]'
    >
      {section7?.twelveMonthsOfTheYear?.map((e, index) => (
        <SwiperSlide
          onClick={() => setMonth(index)}
          className='max-md:!w-[16rem] max-md:!h-[16rem]'
          key={index}
        >
          <div
            className={`${
              index === month ? 'bg-primary-70 text-white' : 'bg-[#f9f9f9] text-gray-scale-50'
            } w-[4.625rem] h-[4.625rem] rounded-full flex justify-center items-center text-[0.875rem] font-medium leading-[1.57] tracking-[0.00219rem] cursor-pointer max-md:text-[3.467rem] max-md:leading-[1.38] max-md:w-full max-md:h-full uppercase hover:bg-primary-70 hover:text-white transition-all duration-300`}
          >
            {arrMonth[index]}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
