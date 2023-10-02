'use client'
import SubTitle from '../global/SubTitle'
import SlideGreatTrips from './SlideGreatTrips'

export default function GreatTrips({ section3, allTourHG }) {
    return (
        <section className='mt-[6.25vw] max-md:mt-[16vw] relative h-[49.4vw] max-md:h-fit'>
            <SubTitle
                title={section3?.title}
                subTitle={section3?.subtitle}
                boxClass={'text-center lg:text-white lg:pt-[3vw]'}
            />
            <SlideGreatTrips allTourHG={allTourHG} />
            <div className='absolute bottom-[10.69vw] left-0 z-[2] w-full h-[21.9375vw] bg-gradient-greatTrips max-md:hidden'></div>
            <div className='absolute top-0 left-0 z-0 w-full h-[30vw] -translate-y-[60%] bg-gradient-greatTrips max-md:hidden'></div>
        </section>
    )
}
