'use client'

import useClickOutSide from '@/hooks/useClickOutSide'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function PopupHPNY() {
  const [isClose, setIsClose] = useState(true)
  const [sideRef, isOutSide] = useClickOutSide()
  useEffect(() => {
    console.log("sessionStorage.getItem('disablePopupHPNY')", JSON.parse(sessionStorage.getItem('disablePopupHPNY')))
    if (JSON.parse(sessionStorage.getItem('disablePopupHPNY'))) {
      setIsClose(true)
    } else {
      setIsClose(false)
    }
    if (isOutSide) {
      setIsClose(true)
      sessionStorage.setItem('disablePopupHPNY', true)
    }
  }, [isOutSide])
  return (
    <>
      {isClose ? (
        <></>
      ) : (
        <div className='fixed w-full h-screen top-0 left-0 bg-gray-900/50 flex justify-center items-center z-[9999999]'>
          <Image
            ref={sideRef}
            src='/images/hpny.png'
            alt='Happy NewYear'
            className='w-[75%] h-auto relative z-50 object-contain max-lg:hidden'
            width={1200}
            height={800}
          />
          <Image
            ref={sideRef}
            src='/images/hpny_mb.png'
            alt='Happy NewYear'
            className='relative z-50 object-contain max-lg:w-[90%] max-lg:h-[58vh] max-md:w-[96%] lg:hidden'
            width={600}
            height={400}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='white'
            className='w-[5rem] h-[5rem] absolute top-[2rem] right-[3rem] max-lg:top-[4rem] max-lg:right-[5rem] cursor-pointer max-lg:w-[10rem] max-lg:h-[10rem] max-md:w-[15rem] max-md:h-[15rem] max-md:top-[4rem] max-md:right-[3rem]'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6 18 18 6M6 6l12 12'
            />
          </svg>
        </div>
      )}
    </>
  )
}
