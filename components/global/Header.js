'use client'
import Image from 'next/image'
import Nav from './Nav'
import FeaturesHeader from './FeaturesHeader'
import ContentHeader from '../homepage/ContentHeader'
import BookNowHeader from '../homepage/BookNowHeader'
import MenuRes from './MenuRes'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import NavFixed from './NavFixed'
import MenuDown from './MenuDown'

export default function Header({ header, allTourHG, isHome }) {
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
    <header className='relative w-full h-screen max-md:h-[90vh] overflow-hidden'>
      <div className='max-md:h-[70vh] max-lg:h-[80vh] h-screen relative'>
        <Nav
          setIsOpen={setIsOpen}
          header={header}
          allTourHG={allTourHG}
        />
        <NavFixed
          setIsOpen={setIsOpen}
          header={header}
          allTourHG={allTourHG}
        />
        <Image
          className='z-0 object-cover max-md:hidden'
          src={header?.background?.sourceUrl || '/images/bg-header.jpg'}
          alt={'background cheer tour'}
          fill
          sizes='100rem'
          priority
        />
        <Image
          className='z-0 object-cover md:hidden'
          src={header?.backgroundMobile?.sourceUrl || '/images/bg-header.jpg'}
          alt={'background cheer tour'}
          fill
          sizes='100rem'
          priority
        />
        <h1 className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[-1] text-white'>Ha Giang Tour</h1>
        {isMobile && (
          <Image
            className='absolute bottom-[-0.5rem] left-0 z-0 object-cover w-full'
            src='/images/linear-res.png'
            alt='linear res'
            width={400}
            height={800}
            priority
          />
        )}
        <ContentHeader header={header} />
        <FeaturesHeader
          header={header}
          allTourHG={allTourHG}
          isHome={isHome}
        />
        <BookNowHeader allTourHG={allTourHG} />
      </div>
      {isMobile && (
        <MenuRes
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          header={header}
          allTourHG={allTourHG}
        />
      )}
      {isMobile2 && (
        <MenuDown
          allTourHG={allTourHG}
          header={header}
          setIsOpen={setIsOpen}
          isHome={isHome}
        />
      )}
    </header>
  )
}
