import Image from 'next/image'
import React from 'react'
import moon from '@/public/images/moon.svg'
import btn from '@/public/images/btnEscape.svg'
import homeLocation from '@/public/images/homeLocation.svg'
import LocationTourDetail from './LocationTourDetail'
import SlideImage from './SlideImage'
import imgSlide1 from '@/public/images/imgSlide1.png'
import imgSlide2 from '@/public/images/imgSlide2.png'


function AboutTour({title,subTitle,customClass}) {
  const location = [
    {
      icon:homeLocation,
      text:'From Hanoi'
    },
    {
      icon:homeLocation,
      text:'Noi Bai Airport'
    },
    {
      icon:homeLocation,
      text:'Sapa'
    },
    {
      icon:homeLocation,
      text:'Cat Ba island'
    },
    {
      icon:homeLocation,
      text:'Ninh Binh'
    },
    {
      icon:homeLocation,
      text:'Ha Giang City'
    }
  ]

  const listImageSlide = [
    imgSlide1 ,imgSlide2,imgSlide1,imgSlide2,imgSlide1
  ]
  return (
    <section className={`flex flex-col md:gap-[1vw] md:px-[6.31vw] ${customClass}`}>
        {/* title */}
        <div className='flex justify-between'>
            <div className='flex md:gap-[0.625vw] items-center'>
                <Image src={moon} alt='moon' quality={100} className='md:w-[1.75vw] md:h-[1.75vw]' />
                <h3 className=''>{title}</h3>
            </div>
            <div>
                <Image alt="btn" src={btn} className='md:w-[1.75vw] md:h-[1.75vw]' />
            </div>
        </div>

        {/* info */}
        <div className='flex gap-[4.27vw]'>
          {/* ------------content-left------------ */}
          <div className='flex'>
            <div className='ml-[0.88vw] pr-[1.5vw]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="422" className='h-full' viewBox="0 0 6 422" fill="none">
                <path d="M0.333333 419C0.333333 420.473 1.52724 421.667 3 421.667C4.47276 421.667 5.66667 420.473 5.66667 419C5.66667 417.527 4.47276 416.333 3 416.333C1.52724 416.333 0.333333 417.527 0.333333 419ZM2.5 0V419H3.5V0H2.5Z" fill="#B34B1E"/>
              </svg>
            </div>
            <div className='flex-col md:w-[25.125vw] gap-[1vw]'>
              <h3>{subTitle}</h3>

              <p>
              8:00 PM: Everyone meets at Cheers Hostel Hanoi. Keep your bags here and have Free tea, coffee here all day. (No. 05 Au Trieu Str„ Hoan Kiem, Hanoi).
              </p>

              <p>
              8:30 PM: Get on best comfort Sleeper bus to Ha Giang. Checking in our Hotel in Ha Giang City in early morning around 3 AM and offering yourself a nap and breakfast before the tour starts.
              </p>
            </div>

          </div>

          {/* ------------content-right----------- */}
          <div className='flex flex-col gap-[1vw] justify-end'>
            <div className='flex gap-[0.75vw] overflow-x-auto'>
              {location?.map((item,index)=>(
                <LocationTourDetail key={index} icon={item?.icon} text={item?.text} />
              ))}
            </div>

            {/* slide image */}
            <div className='md:w-[54.95vw]'>
            <SlideImage listImageSlide={listImageSlide} />
            </div>
            {/* sub description */}

            <div className='flex md:px-[0.75vw] md:py-[0.625vw] self-stretch md:rounded-[0.75vw] bg-[#FFF0EA]'>
              <h5 className='md:text-[0.875vw] font-[500] leading-[1.375vw] tracking-[0.00219vw]'>Heaven Gate - Bac Sum Pass - Tham Ma Pass - Hmong King Palace</h5>
            </div>
          </div>

        </div>
       

    </section>
  )
}

export default AboutTour