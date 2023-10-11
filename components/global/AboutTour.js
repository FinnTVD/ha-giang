'use client'
import Image from 'next/image'
import { useState } from 'react'
import moon from '@/public/images/moon.svg'
import btn from '@/public/images/btnEscape.svg'
import SlideImage from './SlideImage'
import IconMarker from '../icons/IconMarker'
import IconHome from '../icons/IconHome'
import IconBus from '../icons/IconBus'
import IconMeal from '../icons/IconMeal'
import ScrollTrigger from 'react-scroll-trigger'
import useStore from '@/app/(store)/store'

// From Hanoi
// Noi Bai Airport
// Sapa
// Cat Ba Island
// Ninh Binh
// Ha Giang city
// Highlight on loop
// Meal
// Transport
// Accommondation

function AboutTour({ data }) {
  const [activeCate, setActiveCate] = useState(0)
  const [content, setContent] = useState(data?.listCheckin[0])
  const [isShow, setIsShow] = useState(false)
  const setIndexTab = useStore((state) => state.setIndexTab)

  const handleCheckIcon = (category) => {
    if (!category) return
    if (category?.includes('From Hanoi')) return <IconMarker />
    if (category?.includes('Noi Bai Airport')) return <IconBus />
    if (category?.includes('Meal')) return <IconMeal />
    return '/images/homeLocation.svg'
  }
  return (
    <section
      className={`${
        isShow ? 'h-[11rem] max-md:h-[15rem] overflow-hidden' : ''
      } flex flex-col md:gap-[1rem] md:px-[6.31rem] about-tour relative transition-all duration-500`}
    >
      <div className='flex justify-between max-md:px-[4.27rem] items-center max-md:mb-[1.87rem]'>
        <div className='flex md:gap-[0.625rem] gap-[2.34rem] items-center max-md:flex-row-reverse'>
          <Image
            src={moon}
            alt='moon'
            quality={100}
            className='md:w-[1.75rem] md:h-[1.75rem] w-[4.68384rem] h-[4.68384rem]'
          />
          <h3 className='md:text-[2.125rem] text-[4.68384rem]  font-[600] leading-[2.5rem] tracking-[0.00531rem] font-poppins text-gray-scale-80'>
            {data?.step}
          </h3>
        </div>
        <div
          className='cursor-pointer relative z-[50]'
          onClick={() => setIsShow(!isShow)}
        >
          <Image
            alt='btn'
            src={btn}
            className='md:w-[1.75rem] md:h-[1.75rem]'
          />
        </div>
      </div>

      {/* info */}
      <div className='flex gap-[4.27rem] max-lg:flex-col'>
        {/* ------------content-left------------ */}
        <div className='relative flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='6'
            height='551'
            viewBox='0 0 6 551'
            fill='none'
            className='h-full absolute top-0 left-[0.88rem] max-md:hidden'
          >
            <path
              d='M0.333333 548C0.333333 549.473 1.52724 550.667 3 550.667C4.47276 550.667 5.66667 549.473 5.66667 548C5.66667 546.527 4.47276 545.333 3 545.333C1.52724 545.333 0.333333 546.527 0.333333 548ZM2.5 0V548H3.5V0H2.5Z'
              fill='#B34B1E'
            />
          </svg>
          <div className='ml-[0.88rem] pr-[1.5rem] md:block hidden'></div>
          <div className='flex flex-col lg:w-[25.125rem] gap-[1rem] max-md:px-[4.27rem]'>
            <h4 className='text-[1rem] leading-normal tracking-[0.0125rem] font-[600] font-poppins text-gray-scale-80 max-md:text-[3.733rem] max-md:leading-[1.42] max-md:tracking-[0.03733rem] max-lg:text-[1.8rem]'>
              {data?.heading}
            </h4>
            <div
              id='content-trip-details'
              className='lg:text-[0.875rem] text-[3.27869rem] font-poppins font-[400] md:leading-[1.375rem] leading-[5.15222rem] md:tracking-[0.00219rem] tracking-[0.0082rem] text-gray-scale-50 md:text-[1.8rem]'
              dangerouslySetInnerHTML={{ __html: content?.content }}
            />
          </div>
        </div>

        {/* ------------content-right----------- */}
        <div className='flex flex-col md:gap-[1rem] gap-[4.27rem] justify-start font-poppins'>
          <ScrollTrigger onEnter={() => setIndexTab(3)}>
            <div className='flex md:gap-[0.75rem] gap-[3.2rem] max-md:overflow-x-auto max-md:px-[4.27rem] max-md:pb-[1rem] whitespace-nowrap slideCategory'>
              {data?.listCheckin?.map((item, index) => (
                <div
                  key={index}
                  className={`flex md:gap-[0.5rem] gap-[2.13rem] cursor-pointer flex-shrink-0 md:rounded-[0.5rem] rounded-[2.13rem] shadow-md items-center md:px-[0.75rem] px-[3.2rem] py-[1.6rem] md:py-[0.375rem] ${
                    index === activeCate ? 'bg-[#FFF0EA]' : 'bg-[#fff]'
                  }`}
                  onClick={() => {
                    setContent(data?.listCheckin[index])
                    setActiveCate(index)
                  }}
                >
                  <Image
                    alt='icon'
                    src={'/images/homeLocation.svg'}
                    quality={100}
                    width={30}
                    height={30}
                    className='md:w-[1rem] md:h-[1rem]'
                  />
                  <h5 className='md:text-[0.875rem] text-[3.73333rem] text-primary-70 md:font-[500] md:leading-[1.25rem] md:tracking-[0.00875rem] '>
                    {item?.category}
                  </h5>
                </div>
              ))}
            </div>
          </ScrollTrigger>

          {/* slide image */}
          <div className='md:w-[54.95rem] max-md:px-[4.27rem]'>
            <SlideImage listImageSlide={content?.gallery} />
          </div>
          {/* sub description */}
          <div className='flex md:px-[0.75rem] max-md:mb-[4.27rem] px-[3.2rem] max-md:mx-[4.27rem] md:py-[0.625rem] py-[2.66667rem] self-stretch md:rounded-[0.75rem] rounded-[3.2rem] bg-[#FFF0EA]'>
            <h5 className='md:text-[0.875rem] text-[3.73333rem] font-[500] leading-[5.86667rem] md:leading-[1.375rem] tracking-[0.00933rem] text-[#6A2C12] md:tracking-[0.00219rem] '>
              {content?.slogan}
            </h5>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsShow(false)}
        className={`${
          isShow ? 'z-10 opacity-100' : 'z-[-1] opacity-0'
        } w-full cursor-pointer h-[14rem] max-md:h-[16rem] bg-gradient-travelers2 max-md:bg-gradient-detailTourRes absolute bottom-0 left-0 transition-all duration-150`}
      ></div>
    </section>
  )
}

export default AboutTour
