'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// const data = [
//   {
//     picture: '/images/value1.png',
//     icon: '/icons/safe.svg',
//     title: 'SAFE AND COMFORTABLE',
//     description:
//       'Nature cannot be overlooked when trekking, camping, or motorbike tours, which are tourism activities with many potential risks and challenges. What Travel Up always tries its best to do is to ensure maximum safety so that each trip can be fully experienced. That goal requires us to improve our knowledge every day, be meticulous in each program, as well as equip the tourists on the tour with not only necessary items but also a spirit of vigilance. and ready to conquer.',
//   },
//   {
//     picture: '/images/value2.png',
//     icon: '/icons/profess.svg',
//     title: 'SAFE AND COMFORTABLE',
//     description:
//       'Nature cannot be overlooked when trekking, camping, or motorbike tours, which are tourism activities with many potential risks and challenges. What Travel Up always tries its best to do is to ensure maximum safety so that each trip can be fully experienced. That goal requires us to improve our knowledge every day, be meticulous in each program, as well as equip the tourists on the tour with not only necessary items but also a spirit of vigilance. and ready to conquer.',
//   },
//   {
//     picture: '/images/value3.png',
//     icon: '/icons/cloud.svg',
//     title: 'SAFE AND COMFORTABLE',
//     description:
//       'Nature cannot be overlooked when trekking, camping, or motorbike tours, which are tourism activities with many potential risks and challenges. What Travel Up always tries its best to do is to ensure maximum safety so that each trip can be fully experienced. That goal requires us to improve our knowledge every day, be meticulous in each program, as well as equip the tourists on the tour with not only necessary items but also a spirit of vigilance. and ready to conquer.',
//   },
//   {
//     picture: '/images/value4.png',
//     icon: '/icons/connect.svg',
//     title: 'SAFE AND COMFORTABLE',
//     description:
//       'Nature cannot be overlooked when trekking, camping, or motorbike tours, which are tourism activities with many potential risks and challenges. What Travel Up always tries its best to do is to ensure maximum safety so that each trip can be fully experienced. That goal requires us to improve our knowledge every day, be meticulous in each program, as well as equip the tourists on the tour with not only necessary items but also a spirit of vigilance. and ready to conquer.',
//   },
// ]

const data = new Array(4).fill(0)
export default function ValueTowards({ valueTowards }) {
  const swiper1 = useRef()
  const swiper2 = useRef()
  const swiper3 = useRef()
  const [indexSlider, setIndexSlider] = useState(0)
  const handleSlideChange = (swiper) => {
    const index = swiper.realIndex
    setIndexSlider(swiper.realIndex)
    swiper1.current.slideToLoop(index)
    swiper2.current.slideToLoop(index)
    swiper3.current.slideToLoop(index)
  }

  const handleClick = (index) => {
    if (index === indexSlider) return
    swiper1.current.slideNext()
    swiper2.current.slideNext()
    swiper3.current.slideNext()
  }
  let dupData = []
  if (valueTowards) {
    for (let i = 0; i < 2; i++) {
      valueTowards?.content?.forEach((item, index) => {
        dupData.push(item)
      })
    }
  }
  return (
    <section className='mt-[6.25rem] px-[6.25rem] max-lg:px-0'>
      <div className='flex flex-col items-center'>
        <h3 className='text-[#B34B1E] font-heavitas text-[1rem] leading-[1] max-md:text-[3.2rem] max-lg:text-[2.08rem]'>
          {' '}
          {valueTowards?.topTitle}{' '}
        </h3>
        <h2 className='text-[#B34B1E] font-heavitas text-[3rem] mt-[0.75rem] leading-[1] max-md:text-[6.4rem] max-md:mt-[2.1rem] max-lg:text-[4.25rem]'>
          {' '}
          {valueTowards?.title}{' '}
        </h2>
      </div>
      <div className='mt-[2.5rem] flex flex-col gap-[8.375rem] max-lg:hidden'>
        {valueTowards?.content.map((item, index) => (
          <div
            className={`${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} flex gap-[4.75rem]`}
            key={index}
          >
            <Image
              alt='value-towards-picture'
              src={item?.image?.sourceUrl}
              width={688}
              height={431}
              className='w-[43rem] flex-1 h-[26.9375rem] rounded-[1rem] object-cover'
            ></Image>
            <div className='flex relative flex-1 items-start mt-[4.43rem]'>
              <div
                className='flex justify-center items-center w-[13.625rem] h-[13.625rem] rounded-[50%] flex-shrink-0'
                style={{
                  background:
                    'linear-gradient(180deg, rgba(246, 185, 0, 0.60) 7.88%, rgba(255, 255, 255, 0.00) 98.49%)',
                  backdropFilter: 'blur(1.6rem)',
                }}
              >
                <Image
                  alt='vale-towards-icon'
                  src={item?.icon?.sourceUrl}
                  width={218}
                  height={218}
                  className='h-[6.25rem] w-auto'
                ></Image>
              </div>
              <div className='pt-[5rem] ml-[-2rem] relative z-[2]'>
                <h3 className='text-[#05320C] text-[1.625rem] font-bold leading-[1.23] font-poppins'>{item?.title}</h3>
                <p className='mt-[1.25rem] text-[#727272] text-[0.875rem] leading-[1.57] tracking-[0.035] font-poppins'>
                  {item?.content}
                </p>
              </div>
              {index + 1 <= data.length - 1 && index % 2 === 0 && (
                <svg
                  className='absolute top-[13.625rem] right-[33.8rem] h-auto w-[46rem]'
                  xmlns='http://www.w3.org/2000/svg'
                  width='777'
                  height='360'
                  viewBox='0 0 777 360'
                  fill='none'
                >
                  <path
                    d='M775 0V205.466C775 209.884 771.418 213.466 767 213.466H9.99999C5.58171 213.466 2 217.048 2 221.466V286.733V360'
                    stroke='#FED35F'
                    stroke-width='3'
                    stroke-dasharray='24 24'
                  />
                </svg>
              )}
              {index + 1 <= data.length - 1 && index % 2 !== 0 && (
                <svg
                  className='absolute top-[13.625rem] left-[6.6125rem] h-auto w-[46rem]'
                  xmlns='http://www.w3.org/2000/svg'
                  width='777'
                  height='360'
                  viewBox='0 0 777 360'
                  fill='none'
                >
                  <path
                    d='M2 0V205.17C2 209.588 5.58172 213.17 10 213.17H767C771.418 213.17 775 216.751 775 221.17V286.335V359.5'
                    stroke='#FED35F'
                    stroke-width='3'
                    stroke-dasharray='24 24'
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='lg:hidden max-md:w-[91.46667rem] max-lg:w-[95rem] mx-auto'>
        {dupData?.map((item, index) => (
          <div key={index}>
            <div className='h-[57.3rem] w-full mt-[5.3rem] '>
              <Image
                src={item?.image?.sourceUrl}
                alt='cheers tour'
                width={500}
                height={400}
                className='w-full h-full object-cover rounded-[2rem]'
              />
            </div>
            <div className='!flex flex-col items-center mt-[5.3rem]'>
              <div
                className='flex justify-center items-center w-[34rem] h-[34rem] rounded-[50%]'
                style={{
                  background:
                    'linear-gradient(180deg, rgba(246, 185, 0, 0.60) 7.88%, rgba(255, 255, 255, 0.00) 98.49%)',
                  backdropFilter: 'blur(6.9rem)',
                }}
              >
                <Image
                  src={item?.icon?.sourceUrl}
                  alt='cheer tour'
                  width={200}
                  height={200}
                  className='w-auto h-[12.2rem] object-cover'
                />
              </div>
              <h3 className='text-[#05320C] text-[3.7rem] font-bold leading-[1.23] font-poppins mt-[-4rem] text-center relative z-[2] max-lg:text-[3.3rem]'>
                {item?.title}
              </h3>
            </div>
            <div className='px-[2.5rem] mt-[5.3rem]'>
              <p className='text-[#727272] text-[3.7rem] leading-[1.57] tracking-[0.035] font-poppins text-center max-lg:text-[1.8rem] max-md:text-[3.7rem]'>
                {item?.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='lg:hidden mt-[5.3rem]'>
        <Swiper
          loop
          onBeforeInit={(swiper) => {
            swiper1.current = swiper
          }}
          onSlideChange={handleSlideChange}
          className='h-[57.3rem]'
        >
          {dupData?.map((item, index) => (
            <SwiperSlide
              className='px-[2.5rem]'
              key={index}
            >
              <Image
                src={item?.image?.sourceUrl}
                alt='cheers tour'
                width={343}
                height={215}
                className='w-full h-full object-cover rounded-[2rem]'
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          loop
          onBeforeInit={(swiper) => {
            swiper2.current = swiper
          }}
          onSlideChange={handleSlideChange}
          slidesPerView={2.2}
          spaceBetween={20}
          className='!pl-[2.5rem] mt-[5.3rem]'
        >
          {dupData?.map((item, index) => (
            <SwiperSlide
              onClick={() => handleClick(index)}
              className='!flex flex-col items-center'
              key={index}
            >
              <div
                className='flex justify-center items-center w-[34rem] h-[34rem] rounded-[50%]'
                style={{
                  background:
                    index === indexSlider &&
                    'linear-gradient(180deg, rgba(246, 185, 0, 0.60) 7.88%, rgba(255, 255, 255, 0.00) 98.49%)',
                  backdropFilter: 'blur(6.9rem)',
                }}
              >
                <Image
                  src={item?.icon?.sourceUrl}
                  alt='cheer tour'
                  width={128}
                  height={128}
                  className='w-auto h-[12.2rem] object-cover'
                ></Image>
              </div>
              <h3 className='text-[#05320C] text-[3.7rem] font-bold leading-[1.23] font-poppins mt-[-4rem] text-center relative z-[2] max-lg:text-[3.3rem]'>
                {item?.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          loop
          onBeforeInit={(swiper) => {
            swiper3.current = swiper
          }}
          onSlideChange={handleSlideChange}
          className='mt-[5.3rem]'
        >
          {dupData.map((item, index) => (
            <SwiperSlide
              className='px-[2.5rem]'
              key={index}
            >
              <p className='text-[#727272] text-[3.7rem] leading-[1.57] tracking-[0.035] font-poppins text-center max-lg:text-[1.8rem] max-md:text-[3.7rem]'>
                {item?.content}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </section>
  )
}
