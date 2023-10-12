'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const style1 = { width: '35.625rem', transform: 'translateX(0)' }
const style2 = { width: 'calc((50.5rem - 35.625rem - 24px) / 1)', transform: 'translateX(24px)' }
const style3 = {
  width: 'calc((50.5rem - 35.625rem - 24px) / 1)',
  transform: 'translateX(calc((10.375rem + 24px)',
}
export default function SlideFamily({ section6, setTourLeader }) {
  const swiperRef = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)

  const handleSlideChange = (swiper) => {
    setTourLeader(section6?.listCategory[0]?.listAddress[swiper.realIndex])
    setIndexSlider(swiper.realIndex)
  }

  const handleNextSlide = () => {
    swiperRef.current.slideNext()
  }

  const handlePrevSlide = () => {
    swiperRef.current.slidePrev()
  }

  useEffect(() => {
    const slideImg = document.querySelectorAll('.slideCheers img')
    const slide = document.querySelectorAll('.slideCheers')
    slideImg.forEach((item, index) => {
      if (indexSlider === Number(slide[index].dataset.swiperSlideIndex)) {
        item.style.width = style1.width
        item.style.transform = style1.transform
        item.style.opacity = '1'
      } else {
        item.style.opacity = '0.6'
        if (
          (indexSlider === slide.length - 1 && Number(slide[index].dataset.swiperSlideIndex) === 0) ||
          Math.abs(indexSlider - Number(slide[index].dataset.swiperSlideIndex)) === 1
        ) {
          item.style.width = style3.width
          item.style.transform = style3.transform
        } else {
          item.style.width = style2.width
          item.style.transform = style2.transform
        }
      }
    })
  }, [indexSlider])

  return (
    <div
      id='box-slide-family'
      className='relative w-fit h-fit max-lg:hidden'
    >
      <Swiper
        loop={true}
        spaceBetween={0}
        slidesPerView={2}
        grabCursor={true}
        speed={1000}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className='h-[25.825rem] w-[50.5rem]'
      >
        {[...section6?.listCategory[0]?.listAddress, ...section6?.listCategory[0]?.listAddress]?.map((e, index) => (
          <SwiperSlide
            onClick={() => swiperRef.current.slideNext()}
            className='!h-full rounded-[1rem] transition-all duration-1000 relative slideCheers'
            key={index}
          >
            <Image
              className='max-w-[35.625rem] object-cover h-full rounded-[1rem] absolute top-0 left-0 transition-all duration-1000'
              src={e?.image?.sourceUrl || '/images/item-tour.jpg'}
              alt={e?.image?.altText || e?.image?.title}
              width={800}
              height={600}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {section6?.listCategory[0]?.listAddress?.length > 1 && (
        <>
          <button
            onClick={handlePrevSlide}
            className='p-[1.5rem] absolute left-[-0.5rem] top-1/2 -translate-y-1/2 z-[5] brightness-0 invert'
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
            className='p-[1.5rem] absolute right-[-0.5rem] top-1/2 -translate-y-1/2 z-[5] brightness-0 invert'
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
