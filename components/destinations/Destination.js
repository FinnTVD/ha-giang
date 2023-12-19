'use client'
import { useEffect, useState } from 'react'
import MenuRes from '../global/MenuRes'
import Nav from '../global/Nav'
import Banner from '../about-us/Banner'
import FeaturesHeader from '../global/FeaturesHeader'
import NavFixed from '../global/NavFixed'
import DestinationListItems from './ListItems'
import GreatTrips from '../homepage/GreatTrips'
import MenuDown from '../global/MenuDown'

function Destination({ dataHome, dataAboutUs, allTourHG, dataDestination, viewport }) {
  const header = dataHome?.header
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
          title={'Destination'}
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
        <DestinationListItems dataDestination={dataDestination?.content} />
        <GreatTrips
          viewport={viewport}
          allTourHG={allTourHG}
          section3={{
            subtitle: 'our',
            title: 'great trips',
          }}
        />
      </main>
    </>
  )
}

export default Destination
