// import { Suspense } from 'react'
import Image from 'next/image'
import CheersTour from './CheersTour'
// import Test from './Test'
import TheGallery from './TheGallery'
import Travelers from './Travelers'
import Weather from './Weather'
import TheTrip from './TheTrip'
import GreatTrips from './GreatTrips'
import Family from './Family'
import Header from '../global/Header'
import Banner from './Banner'

export default function IndexHomePage() {
    return (
        <>
            <Header />

            <main className='relative w-full'>
                {/* <Suspense fallback={<div>Loading ...</div>}>
                </Suspense> */}
                {/* <Test /> */}
                {/* <div className='h-screen w-full relative z-[1]'>
                    <Image
                        className='object-contain w-full h-full'
                        src={'/images/banner.png'}
                        alt='banner'
                        width={1600}
                        height={800}
                        quality={100}
                    />
                </div> */}
                <Banner />
                <Image
                    className='!h-[200vh] object-cover w-full top-0 left-0 z-0'
                    src={'/images/mask.png'}
                    fill
                    sizes='100vw'
                />
                <CheersTour />
                <GreatTrips />
                <TheGallery />
                <Travelers />
                <Family />
                <Weather />
                <TheTrip />
            </main>
        </>
    )
}
