'use client'
import Link from 'next/link'
import { PopupBookNow } from './PopupBookNow'
import IconPhoneHeader from '../icons/IconPhoneHeader'

export default function FeaturesHeader({ header, allTourHG }) {
    console.log('🚀 ~ file: FeaturesHeader.js:6 ~ FeaturesHeader ~ allTourHG:', allTourHG)
    const scrollToTop = () => {
        if (typeof window === 'undefined') return
        window.scrollTo(0, 0, { behavior: 'smooth' })
    }
    return (
        <div
            id='feature-header'
            className='flex flex-col gap-y-[1.37vw] max-md:gap-y-[5.33vw] items-center fixed bottom-[10vw] right-[3vw] max-md:right-[4.27vw] z-[999]'
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='34'
                height='49'
                viewBox='0 0 34 49'
                fill='none'
                onClick={scrollToTop}
                className='w-[2.125vw] h-[3.0625vw] max-md:w-[8vw] max-md:h-[11.53vw] cursor-pointer'
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
                <div className='cursor-pointer w-[3.5vw] text-[0.75vw] font-black leading-[1.08] tracking-[0.03125vw] h-[3.5vw] rounded-full text-white flex text-center justify-center items-center bg-primary-50 border-[1.5px] border-solid border-white max-md:w-[10.67vw] max-md:h-[10.67vw] max-md:text-[2.56vw] max-md:tracking-[0.10667vw]'>
                    BOOK NOW
                </div>
            </PopupBookNow>
            <Link
                href={`tel:${header?.phoneNumber}`}
                className='relative block cursor-pointer'
            >
                {/* <div className='box-phone absolute bottom-0 left-0 z-0 w-[2.5vw] h-[2.5vw] rounded-full'></div> */}

                <IconPhoneHeader className={'z-[1]'} />
            </Link>
        </div>
    )
}
