import Image from 'next/image'
import CheersTour from './CheersTour'
import TheGallery from './TheGallery'
import Travelers from './Travelers'
import Weather from './Weather'
import TheTrip from './TheTrip'
import GreatTrips from './GreatTrips'
import Family from './Family'
import Header from '../global/Header'
// import Banner from './Banner'

export default function IndexHomePage({ data, allTourHG, viewport }) {
  const header = data?.header
  const section1 = data?.section1
  const section2 = data?.section2
  const section3 = data?.section3
  const section4 = data?.section4
  const section5 = data?.section5
  const section6 = data?.section6
  const section7 = data?.section7
  const section8 = data?.section8

  return (
    <>
      <Header
        header={header}
        allTourHG={allTourHG}
        isHome={true}
        viewport={viewport}
      />
      <main className='relative w-full overflow-x-hidden'>
        {/* <Banner
          section1={section1}
          viewport={viewport}
        /> */}
        <Image
          className='!h-[220vh] object-cover w-full top-0 left-0 z-0 max-lg:hidden'
          src={'/images/mask.png'}
          fill
          sizes='100vw'
          alt='image mask'
          priority
        />
        <CheersTour
          section2={section2}
          allTourHG={allTourHG}
          viewport={viewport}
        />
        <GreatTrips
          section3={section3}
          allTourHG={allTourHG}
          viewport={viewport}
        />
        <TheGallery
          section4={section4}
          allTourHG={allTourHG}
          viewport={viewport}
        />
        <Travelers section5={section5} />
        <Family
          section6={section6}
          viewport={viewport}
        />
        <Weather
          section7={section7}
          viewport={viewport}
        />
        <TheTrip
          section8={section8}
          viewport={viewport}
          allTourHG={allTourHG}
        />
      </main>
    </>
  )
}
