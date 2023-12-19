'use client'

import { useEffect, useState } from 'react'
//
import Banner from '../about-us/Banner'
import FeaturesHeader from '../global/FeaturesHeader'
import MenuDown from '../global/MenuDown'
import MenuRes from '../global/MenuRes'
import Nav from '../global/Nav'
import NavFixed from '../global/NavFixed'

export default function HeaderBlog({ dataHome, allTourHG, viewport }) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = viewport?.includes('tablet')
  const isMobile2 = viewport?.includes('mobile')

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!isOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])

  return (
    <header className='relative font-poppins'>
      <div className='absolute top-0 left-0 w-full'>
        <Nav
          setIsOpen={setIsOpen}
          header={dataHome?.header}
          allTourHG={allTourHG}
        />
      </div>
      <NavFixed
        setIsOpen={setIsOpen}
        header={dataHome?.header}
        allTourHG={allTourHG}
      />
      <FeaturesHeader
        header={dataHome?.header}
        allTourHG={allTourHG}
        viewport={viewport}
      />
      <Banner
        // bannerData={banner}
        title={'Our blog'}
      />
      {isMobile && (
        <MenuRes
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          header={dataHome?.header}
          allTourHG={allTourHG}
        />
      )}
      {isMobile2 && (
        <MenuDown
          allTourHG={allTourHG}
          header={dataHome?.header}
          setIsOpen={setIsOpen}
          viewport={viewport}
        />
      )}
    </header>
  )
}
