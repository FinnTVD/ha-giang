'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import IconStar from '../icons/IconStar'

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
    <div className='relative z-[5] w-[74.25rem] max-md:w-full mx-auto'>
      <Swiper
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            spaceBetween: 16,
            centeredSlides: true,
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
        className='h-[14rem] mt-[2.5rem] max-md:mt-[5.33rem] max-md:h-[67.733rem]'
      >
        {section5?.listFeedback?.map((e, index) => (
          <SwiperSlide
            className='rounded-[1rem] max-md:!w-[76.267rem] max-md:rounded-[3.2rem] font-poppins'
            key={index}
          >
            <div className='w-full max-md:rounded-[3.2rem] shadow-slideTrave h-full relative rounded-[1rem] overflow-hidden p-[1.56rem] max-md:p-[5.33rem] bg-white flex flex-col items-center justify-center'>
              <p className='text-[0.875rem] font-normal max-md:line-clamp-[7] line-clamp-5 leading-[1.57] text-gray-scale-50 tracking-[0.00219rem] text-center max-md:text-[3.733rem] max-md:tracking-[0.00933rem]'>
                {e?.description}
              </p>
              <div className='flex items-center gap-x-[0.25rem] mt-[1rem] max-md:mt-[4.27rem]'>
                {star?.slice(0, Number(e?.rate))?.map((i, ind) => (
                  <IconStar
                    key={ind}
                    className='w-[1rem] h-[1rem] max-md:w-[4.267rem] max-md:h-[4.267rem]'
                  />
                ))}
              </div>
              <span className='text-[1rem] leading-normal font-semibold tracking-[0.0125rem] text-primary-70 mt-[0.5rem] max-md:mt-[2.13rem] max-md:text-[3.733rem] max-md:leading-[1.42] max-md:tracking-[0.03733rem]'>
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
            className='p-[1.5rem] absolute left-[-6rem] top-1/2 -translate-y-1/2 z-[5] max-md:hidden'
          >
            <Image
              className='object-contain w-[1.82rem] h-[0.82rem]'
              src={'/images/btn-left.svg'}
              alt='btn-slide'
              width={36}
              height={18}
            />
          </button>
          <button
            onClick={handleNextSlide}
            className='p-[1.5rem] absolute right-[-6rem] top-1/2 -translate-y-1/2 z-[5] max-md:hidden'
          >
            <Image
              className='object-contain w-[1.82rem] h-[0.82rem] rotate-180'
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
