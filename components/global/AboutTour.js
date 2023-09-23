'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import moon from '@/public/images/moon.svg'
import btn from '@/public/images/btnEscape.svg'
import SlideImage from './SlideImage'


function AboutTour({title,subTitle,content,categories}) {
  const [activeCate , setActiveCate] = useState(0)
  const [listImageSlide, setListImageSlide] = useState(categories[0]?.slides)
  return (
    <section className='flex flex-col md:gap-[1vw] md:px-[6.31vw] about-tour'>
        {/* title */}
        <div className='flex justify-between max-md:px-[4.27vw] items-center max-md:mb-[1.87vw]'>
            <div className='flex md:gap-[0.625vw] gap-[2.34vw] items-center max-md:flex-row-reverse'>
                <Image src={moon} alt='moon' quality={100} className='md:w-[1.75vw] md:h-[1.75vw] w-[4.68384vw] h-[4.68384vw]' />
                <h3 className='md:text-[2.125vw] text-[4.68384vw]  font-[600] leading-[2.5vw] tracking-[0.00531vw] font-poppins text-gray-scale-80'>{title}</h3>
            </div>
            <div>
                <Image alt="btn" src={btn} className='md:w-[1.75vw] md:h-[1.75vw]' />
            </div>
        </div>

        {/* info */}
        <div className='flex gap-[4.27vw] max-md:flex-col'>
          {/* ------------content-left------------ */}
          <div className='flex'>
            <div className='ml-[0.88vw] pr-[1.5vw] md:block hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="422" className='h-full' viewBox="0 0 6 422" fill="none">
                <path d="M0.333333 419C0.333333 420.473 1.52724 421.667 3 421.667C4.47276 421.667 5.66667 420.473 5.66667 419C5.66667 417.527 4.47276 416.333 3 416.333C1.52724 416.333 0.333333 417.527 0.333333 419ZM2.5 0V419H3.5V0H2.5Z" fill="#B34B1E"/>
              </svg>
            </div>
            <div className='flex flex-col md:w-[25.125vw] gap-[1vw] max-md:px-[4.27vw]'>
              <h4 className='md:text-[1vw] text-[3.27869vw] font-[600] md:leading-[1.5vw] leading-[4.68384vw] md:tracking-[0.0125vw] tracking-[0.03279vw] font-poppins text-gray-scale-80'>{subTitle}</h4>
              <p className='md:text-[0.875vw] text-[3.27869vw] font-roboto font-[400] md:leading-[1.375vw] leading-[5.15222vw] md:tracking-[0.00219vw] tracking-[0.0082vw] text-gray-scale-50' >{content}</p> 
            </div>

          </div>

          {/* ------------content-right----------- */}
          <div className='flex flex-col md:gap-[1vw] gap-[4.27vw] justify-end'>
            <div className='flex md:gap-[0.75vw] gap-[3.2vw] max-md:overflow-x-auto max-md:pl-[4.27vw] max-md:pb-[1vw] whitespace-nowrap slideCategory'>
              {categories?.map((item,index)=>(
                  <div
                    key={index} 
                    className={`flex md:gap-[0.5vw] gap-[2.13vw] cursor-pointer flex-shrink-0 md:rounded-[0.5vw] rounded-[2.13vw] shadow-md items-center md:px-[0.75vw] px-[3.2vw] py-[1.6vw] md:py-[0.375vw] ${index === activeCate ? 'bg-[#FFF0EA]' : 'bg-[#fff]'}`}
                    onClick={()=>{
                      setListImageSlide(categories[index]?.slides)
                      setActiveCate(index)
                    }}
                  >
                      <Image alt='icon' src={item?.icon} quality={100} className='md:w-[1vw] md:h-[1vw]' />
                      <h5 className='md:text-[0.875vw] text-[3.73333vw] text-primary-70 md:font-[500] md:leading-[1.25vw] md:tracking-[0.00875vw] '>{item?.category}</h5>
                  </div>
              ))}
            </div>

            {/* slide image */}
            <div className='md:w-[54.95vw] max-md:px-[4.27vw]'>
              <SlideImage listImageSlide={listImageSlide} />
            </div>
            {/* sub description */}
            <div className='flex md:px-[0.75vw] max-md:mb-[4.27vw] px-[3.2vw] max-md:mx-[4.27vw] md:py-[0.625vw] py-[2.66667vw] self-stretch md:rounded-[0.75vw] rounded-[3.2vw] bg-[#FFF0EA]'>
              <h5 className='md:text-[0.875vw] text-[3.73333vw] font-[500] leading-[5.86667vw] md:leading-[1.375vw] tracking-[0.00933vw] text-[#6A2C12] md:tracking-[0.00219vw] '>Heaven Gate - Bac Sum Pass - Tham Ma Pass - Hmong King Palace</h5>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutTour