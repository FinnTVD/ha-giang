'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import MenuRes from '../global/MenuRes'
import Nav from '../global/Nav'
import Banner from '../about-us/Banner'
import FeaturesHeader from '../global/FeaturesHeader'
import NavFixed from '../global/NavFixed'
import DestinationListItems from './ListItems'
import GreatTrips from '../homepage/GreatTrips'
function Destination({ dataHome, dataAboutUs, allTourHG, dataDestination }) {
  const header = dataHome?.header
  const banner = dataAboutUs?.banner
  const isMobile = useMediaQuery({ query: '(max-width: 1023.9px)' })
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
        title={'Destination'}
      ></Banner>
      <DestinationListItems dataDestination={dataDestination?.content}></DestinationListItems>
      <GreatTrips
        allTourHG={allTourHG}
        section3={{
          subtitle: 'our',
          title: 'great trips',
        }}
      ></GreatTrips>
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

export default Destination
