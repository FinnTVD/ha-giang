'use client'
import Image from 'next/image'
import Nav from './Nav'
// import FeaturesHeader from './FeaturesHeader'
import ContentHeader from '../homepage/ContentHeader'
// import BookNowHeader from '../homepage/BookNowHeader'
import MenuRes from './MenuRes'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
// import NavFixed from './NavFixed'
import MenuDown from './MenuDown'
// import src from '../../public/images/linear-res.png'
import dynamic from 'next/dynamic'

const NavFixed = dynamic(() => import('./NavFixed'), { ssr: false })
const FeaturesHeader = dynamic(() => import('./FeaturesHeader'), { ssr: false })
const BookNowHeader = dynamic(() => import('./BookNowHeader'), { ssr: false })
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
      <div
        style={{
          background:
            'linear-gradient(245deg, rgba(204, 237, 199, 0.816) 0%, rgb(112 132 109) 0%, rgb(58 68 56) 77%, rgb(62 74 60) 100%)',
        }}
        className='max-md:h-[70vh] max-lg:h-[80vh] h-screen relative'
      >
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
          sizes='100vw'
          priority
        />
        <Image
          className='z-0 object-cover md:hidden'
          src={header?.backgroundMobile?.sourceUrl || '/images/bg-header.jpg'}
          alt={'background cheer tour'}
          fill
          sizes='100vw'
          priority
        />
        {/* <Image
          className='absolute bottom-[-0.5rem] left-0 z-0 object-cover w-full lg:hidden bg-overlay'
          src={src}
          alt='linear res'
          priority
        /> */}
        <div
          style={{ background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)' }}
          className='absolute bottom-[-0.5rem] left-0 z-0 object-cover w-full h-[26vh] lg:hidden'
        ></div>
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
