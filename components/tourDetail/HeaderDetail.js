'use client'
import Image from 'next/image'
import Nav from '../global/Nav'
import FeaturesHeader from '../global/FeaturesHeader'
import ContentHeaderDetail from './ContentHeaderDetail'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import MenuRes from '../global/MenuRes'
import NavFixed from '../global/NavFixed'

export default function HeaderDetail({ data, allTourHG, slug }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])
  return (
    <header className='relative w-full h-[85vh] max-md:h-[70vh]'>
      <Nav
        header={data?.data?.page?.homeHG?.header}
        setIsOpen={setIsOpen}
        allTourHG={allTourHG}
      />
      {!isMobile && (
        <NavFixed
          setIsOpen={setIsOpen}
          header={data?.data?.page?.homeHG?.header}
          allTourHG={allTourHG}
        />
      )}
      <Image
        className='z-0 object-cover'
        src={data?.data?.tourHG?.featuredImage?.node?.sourceUrl || '/images/header-detail.jpg'}
        alt={data?.data?.tourHG?.featuredImage?.node?.altText || data?.data?.tourHG?.featuredImage?.node?.title}
        fill
        sizes='100rem'
        priority
      />
      <div className='absolute top-0 left-0 z-0 w-full h-full bg-gradient-header-detail'></div>
      <ContentHeaderDetail
        data={data?.data?.tourHG?.tourHaGiangDetail?.header}
        slug={slug}
      />
      <FeaturesHeader
        allTourHG={allTourHG}
        header={data?.data?.page?.homeHG?.header}
      />
      <div className='flex gap-x-[1rem] absolute bottom-0 translate-y-1/2 lg:right-[6.27rem] max-md:left-[4.27rem]'>
        <div className='w-[11.88rem] h-[12.12rem] max-md:w-[30.69rem] max-md:h-[30.92rem] relative flex items-center justify-center'>
          <Image
            className='z-0 object-cover animate-spin duration-7000'
            src={'/images/circle-orange.png'}
            alt='circle currency'
            fill
            sizes='100rem'
          />
          <div className='relative z-[1] flex flex-col justify-center items-center'>
            <span className='text-[0.875rem] text-white font-semibold leading-[1.42] tracking-[0.00875rem] max-md:text-[2.67rem] max-md:leading-normal'>
              SELF - DRIVING
            </span>
            <span className='text-[3rem] font-bold leading-[1.08] text-white max-md:text-[9.067rem] max-md:leading-[1.17] max-md:tracking-[0.02267rem]'>
              ${data?.data?.tourHG?.tourHaGiangDetail?.price?.selfDriving}
            </span>
          </div>
        </div>
        <div className='w-[11.88rem] h-[12.12rem] max-md:w-[30.69rem] max-md:h-[30.92rem] relative flex items-center justify-center'>
          <Image
            className='z-0 object-cover animate-spin duration-7000'
            src={'/images/circle-orange.png'}
            alt='circle currency'
            fill
            sizes='100rem'
          />
          <div className='relative z-[1] flex flex-col justify-center items-center'>
            <span className='text-[0.875rem] text-white font-semibold leading-[1.42] tracking-[0.00875rem] max-md:text-[2.67rem] max-md:leading-normal'>
              PRIVATE DRIVER
            </span>
            <span className='text-[3rem] font-bold leading-[1.08] text-white max-md:text-[9.067rem] max-md:leading-[1.17] max-md:tracking-[0.02267rem]'>
              ${data?.data?.tourHG?.tourHaGiangDetail?.price?.localDriver}
            </span>
          </div>
        </div>
      </div>
      {isMobile && (
        <MenuRes
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          header={data?.data?.page?.homeHG?.header}
          allTourHG={allTourHG}
        />
      )}
    </header>
  )
}
