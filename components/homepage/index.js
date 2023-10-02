// import { Suspense } from 'react'
import Image from 'next/image'
import CheersTour from './CheersTour'
import TheGallery from './TheGallery'
import Travelers from './Travelers'
import Weather from './Weather'
import TheTrip from './TheTrip'
import GreatTrips from './GreatTrips'
import Family from './Family'
import Header from '../global/Header'
import Banner from './Banner'

export default function IndexHomePage({ data, allTourHG }) {
    const { header, section1, section2, section3, section4, section5, section6, section7, section8 } = data
    return (
        <>
            <Header
                header={header}
                allTourHG={allTourHG}
            />

            <main className='relative w-full overflow-x-hidden'>
                {/* <Suspense fallback={<div>Loading ...</div>}>
                </Suspense> */}
                <Banner section1={section1} />
                <Image
                    className='!h-[210vh] object-cover w-full top-0 left-0 z-0 max-lg:hidden'
                    src={'/images/mask.png'}
                    fill
                    sizes='100vw'
                />
                <CheersTour
                    section2={section2}
                    allTourHG={allTourHG}
                />
                <GreatTrips
                    section3={section3}
                    allTourHG={allTourHG}
                />
                <TheGallery
                    section4={section4}
                    allTourHG={allTourHG}
                />
                <Travelers section5={section5} />
                <Family section6={section6} />
                <Weather section7={section7} />
                <TheTrip
                    section8={section8}
                    allTourHG={allTourHG}
                />
            </main>
        </>
    )
}
