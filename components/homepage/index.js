import Image from 'next/image'
import CheersTour from './CheersTour'
import TheGallery from './TheGallery'
import Travelers from './Travelers'
import Weather from './Weather'
import TheTrip from './TheTrip'
import GreatTrips from './GreatTrips'
import Family from './Family'
import Header from '../global/Header'

export default function IndexHomePage({ data, allTourHG, viewport }) {
  return (
    <>
      <Header
        header={data?.header}
        allTourHG={allTourHG}
        isHome={true}
        viewport={viewport}
      />
      <main className='relative w-full overflow-x-hidden'>
        <Image
          className='!h-[220vh] object-cover w-full top-0 left-0 z-0 max-lg:hidden'
          src={'/images/mask.png'}
          fill
          sizes='(max-width: 767px) 40vw, (max-width: 1023px) 60vw, 100vw'
          alt='image mask'
          priority
        />
        <CheersTour
          section2={data?.section2}
          allTourHG={allTourHG}
          viewport={viewport}
        />
        <GreatTrips
          section3={data?.section3}
          allTourHG={allTourHG}
          viewport={viewport}
        />
        <TheGallery
          section4={data?.section4}
          allTourHG={allTourHG}
          viewport={viewport}
        />
        <Travelers section5={data?.section5} />
        <Family
          section6={data?.section6}
          viewport={viewport}
        />
        <Weather
          section7={data?.section7}
          viewport={viewport}
        />
        <TheTrip
          section8={data?.section8}
          viewport={viewport}
          allTourHG={allTourHG}
        />
      </main>
    </>
  )
}
