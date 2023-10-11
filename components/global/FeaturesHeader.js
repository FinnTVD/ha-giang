'use client'
import Link from 'next/link'
import { PopupBookNow } from './PopupBookNow'
import IconPhoneHeaderV2 from '../icons/IconPhoneHeaderV2'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)
export default function FeaturesHeader({ header, allTourHG, isHome }) {
  useLayoutEffect(() => {
    if (!isHome) return
    let ctx = gsap.context(() => {
      setTimeout(() => {
        gsap.matchMedia().add('(max-width: 767px)', () => {
          gsap.to(document.getElementById('feature-header'), {
            bottom: '10rem',
            scrollTrigger: {
              trigger: document.getElementsByTagName('header'),
              start: 'bottom center',
              end: 'bottom+=500 top',
              scrub: 1,
            },
          })
        })
      }, [500])
    })
    return () => {
      ctx.revert()
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo(0, 0, { behavior: 'smooth' })
  }
  return (
    <div
      id='feature-header'
      className={`${
        isHome ? 'max-md:bottom-[45%]' : ''
      } flex flex-col gap-y-[1.37rem] max-md:gap-y-[5.33rem] items-center fixed bottom-[10rem] right-[3rem] max-md:right-[4.27rem] z-[999]`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='34'
        height='49'
        viewBox='0 0 34 49'
        fill='none'
        onClick={scrollToTop}
        className='w-[2.125rem] h-[3.0625rem] max-lg:w-[4.125rem] max-lg:h-[10.0625rem] max-md:w-[8rem] max-md:h-[11.53rem] cursor-pointer'
      >
        <path
          d='M17.8438 13.645C17.5629 12.785 16.4371 12.785 16.1562 13.645L12.0518 26.2088C11.8463 26.8378 12.2782 27.4973 12.8956 27.4973L21.1044 27.4973C21.7218 27.4973 22.1537 26.8378 21.9482 26.2088L17.8438 13.645Z'
          fill='#EE6529'
        />
        <path
          d='M17.0013 36.164C18.3545 36.164 19.5808 34.9545 19.5808 33.2968C19.5808 31.6392 18.3545 30.4297 17.0013 30.4297C15.6481 30.4297 14.4219 31.6392 14.4219 33.2968C14.4219 34.9545 15.6481 36.164 17.0013 36.164Z'
          stroke='#EE6529'
          strokeWidth='2'
        />
        <rect
          x='0.5'
          y='0.5'
          width='33'
          height='48'
          rx='16.5'
          stroke='#EE6529'
        />
      </svg>
      <PopupBookNow allTourHG={allTourHG}>
        <div className='cursor-pointer w-[3.5rem] text-[0.75rem] font-black leading-[1.08] tracking-[0.03125rem] h-[3.5rem] rounded-full text-white flex text-center justify-center items-center bg-primary-50 border-[1.5px] border-solid border-white max-md:w-[10.67rem] max-lg:text-[1.75rem] max-lg:w-[7.5rem] max-lg:h-[7.5rem] max-md:h-[10.67rem] max-md:text-[2.56rem] max-md:tracking-[0.10667rem] font-roboto animate-bounce'>
          BOOK NOW
        </div>
      </PopupBookNow>
      <Link
        href={`tel:${header?.phoneNumber}`}
        className='relative block cursor-pointer'
      >
        {/* <div className='box-phone absolute bottom-0 left-0 z-0 w-[2.5rem] h-[2.5rem] rounded-full'></div> */}

        {/* <IconPhoneHeader className={'z-[1]'} /> */}
        <IconPhoneHeaderV2 className={'z-[1] translate-x-[0.5rem]'} />
      </Link>
    </div>
  )
}
