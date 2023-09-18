// import { Suspense } from 'react'
import Image from 'next/image'
import CheersTour from './CheersTour'
// import Test from './Test'
import TheGallery from './TheGallery'
import Travelers from './Travelers'
import Weather from './Weather'
import TheTrip from './TheTrip'

export default function IndexHomePage() {
    return (
        <main className='relative w-full'>
            {/* <Suspense fallback={<div>Loading ...</div>}>
                <Test />
            </Suspense> */}
            {/* <Image
                className='h-[200vh] object-cover w-full top-0 left-0'
                src={'/images/mask.png'}
                fill
                sizes='100vw'
            /> */}
            <CheersTour />
            <TheGallery />
            <Travelers />
            <Weather />
            <TheTrip />
        </main>
    )
}
