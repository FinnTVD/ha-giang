'use client'

import { useEffect, useState } from 'react'
import Nav from '../global/Nav'
import Image from 'next/image'
import FeaturesHeader from '../global/FeaturesHeader'
import { useMediaQuery } from 'react-responsive'
import MenuRes from '../global/MenuRes'
import NavFixed from '../global/NavFixed'
import MenuDown from '../global/MenuDown'

export default function HeaderContact({ dataHome, data }) {
  const isMobile = useMediaQuery({ query: '(max-width: 1023.9px)' })
  const isMobile2 = useMediaQuery({ query: '(max-width: 767.9px)' })

  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])
  return (
    <header className='relative'>
      <div className='absolute top-0 left-0 w-full'>
        <Nav
          setIsOpen={setIsOpen}
          header={dataHome?.data?.page?.homeHG?.header}
          allTourHG={dataHome?.data?.allTourHG}
        />
      </div>
      <NavFixed
        setIsOpen={setIsOpen}
        header={dataHome?.data?.page?.homeHG?.header}
        allTourHG={dataHome?.data?.allTourHG}
      />
      <FeaturesHeader
        header={dataHome?.data?.page?.homeHG?.header}
        allTourHG={dataHome?.data?.allTourHG}
      />
      <div className='relative px-[6rem] pt-[11.25rem] pb-[4rem] max-md:px-0 max-md:pt-[49rem] max-lg:pt-[18rem] max-lg:pb-[12rem]'>
        <Image
          width={1600}
          height={567}
          alt={data?.backgroundPc?.altText || data?.backgroundPc?.title}
          src={data?.backgroundPc?.sourceUrl}
          className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        />
        <div className='bg-white bg-opacity-[0.85] absolute w-full h-full left-0 top-0'></div>
        <Image
          width={1600}
          height={435}
          alt='about-us-overlay'
          src='/images/abcloud.png'
          className='absolute bottom-0 left-0 w-full'
        />
        <div
          className='relative text-center font-heavitas text-[8.625rem] uppercase leading-[1] max-md:text-[16.5rem]'
          style={{
            backgroundImage: `url(${data?.backgroundPc?.sourceUrl})`,
            backgroundRepeat: 'repeat',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundPosition: 'center',
          }}
        >
          {data?.title}
        </div>
      </div>
      {isMobile && (
        <MenuRes
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          header={dataHome?.data?.page?.homeHG?.header}
          allTourHG={dataHome?.data?.allTourHG}
        />
      )}
      {isMobile2 && (
        <MenuDown
          allTourHG={dataHome?.data?.allTourHG}
          header={dataHome?.data?.page?.homeHG?.header}
          setIsOpen={setIsOpen}
        />
      )}
    </header>
  )
}
