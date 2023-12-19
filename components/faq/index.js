'use client'
import { useEffect, useState } from 'react'
import Nav from '../global/Nav'
import MenuRes from '../global/MenuRes'
import TheTrip from '../homepage/TheTrip'
import Family from '../homepage/Family'
import Banner from '../about-us/Banner'
import FeaturesHeader from '../global/FeaturesHeader'
import NavFixed from '../global/NavFixed'
import MenuDown from '../global/MenuDown'

export default function IndexFaq({ data, dataAboutUs, allTourHG, viewport }) {
  const header = data?.header
  const section6 = data?.section6
  const section8 = data?.section8
  const banner = dataAboutUs?.banner
  const isMobile = viewport?.includes('tablet')
  const isMobile2 = viewport?.includes('mobile')

  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])

  return (
    <>
      <header className='relative'>
        <div className='absolute top-0 left-0 w-full'>
          <Nav
            setIsOpen={setIsOpen}
            header={header}
            allTourHG={allTourHG}
          />
        </div>
        <NavFixed
          setIsOpen={setIsOpen}
          header={header}
          allTourHG={allTourHG}
        />
        <FeaturesHeader
          header={header}
          allTourHG={allTourHG}
          viewport={viewport}
        />
        <Banner
          bannerData={banner}
          title={'FAQ'}
        />
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
            viewport={viewport}
          />
        )}
      </header>
      <main>
        <TheTrip
          section8={section8}
          allTourHG={data?.data?.allTourHG}
          isOther={true}
          viewport={viewport}
        />
        <Family
          section6={section6}
          viewport={viewport}
        />
      </main>
    </>
  )
}
