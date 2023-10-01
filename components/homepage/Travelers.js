import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import SlideTravelers from './SlideTravelers'
import Link from 'next/link'

export default function Travelers({ section5 }) {
    return (
        <section className='w-full relative h-fit mt-[6.25vw] lg:px-[12.75vw] max-md:mt-[16vw]'>
            <Image
                className='z-0 object-cover'
                src={'/images/bg-traveller.png'}
                fill
                sizes='100vw'
            />
            <div className='w-full h-[8vw] bg-gradient-travelers absolute top-0 left-0 z-[1]'></div>
            <SubTitle
                subTitle={section5?.subtitle}
                title={section5?.title}
                titleClass={'text-center'}
                subTitleClass={'text-center'}
            />
            <SlideTravelers section5={section5} />
            <div className=' flex flex-col items-center relative z-[5] gap-y-[0.5vw] max-md:gap-y-[2.13vw] mt-[1.88vw] max-md:mt-[5.33vw]'>
                <span className=' text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219vw] max-md:text-[3.733vw] max-md:font-semibold max-md:tracking-[0.00933vw]'>
                    View us on:
                </span>
                <div className='flex gap-x-[0.75vw] max-md:gap-x-[3.2vw]'>
                    {section5?.listPartner?.map((e, index) => (
                        <Link
                            href={e?.linkPartner?.url || '/'}
                            key={index}
                            className='w-[9.25vw] shadow-btnTravel h-[3vw] rounded-[0.5vw] max-md:rounded-[2.13vw] max-md:w-[39.467vw] max-md:h-[12.8vw] bg-white flex justify-center items-center'
                        >
                            <Image
                                className='object-cover w-[7vw] h-[1.5vw] max-md:w-[29.867vw] max-md:h-[6.4vw]'
                                src={e?.button?.sourceUrl || '/images/tri.svg'}
                                alt={e?.button?.altText || e?.button?.title}
                                width={120}
                                height={40}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className='w-full h-[14vw] bg-gradient-travelers2 absolute bottom-0 left-0 z-[1]'></div>
        </section>
    )
}
