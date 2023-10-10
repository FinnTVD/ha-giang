'use client'
import { useEffect, useState } from 'react'
import Nav from '../global/Nav'
import MenuRes from '../global/MenuRes'
import { useMediaQuery } from 'react-responsive'
import TheTrip from '../homepage/TheTrip'
import Family from '../homepage/Family'
import Banner from '../about-us/Banner'
import FeaturesHeader from '../global/FeaturesHeader'
import NavFixed from '../global/NavFixed'

export default function IndexFaq({ data, dataAboutUs, allTourHG }) {
  const { header, section6, section8 } = data
  const { banner } = dataAboutUs
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
    <div className='relative'>
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
      />
      <Banner
        bannerData={banner}
        title={'FAQ'}
      ></Banner>
      <TheTrip
        section8={section8}
        allTourHG={data?.data?.allTourHG}
        isOther={true}
      />
      <Family section6={section6} />
      {isMobile && (
        <MenuRes
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          header={header}
          allTourHG={allTourHG}
        />
      )}
    </div>
  )
}
