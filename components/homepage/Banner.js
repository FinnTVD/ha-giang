'use client'

import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import SlideBanner from './SlideBanner'

export default function Banner() {
    return (
        <section className='h-fit pt-[6.25vw] relative z-[5]'>
            <SubTitle
                subTitle={'WELCOME TO'}
                title={'HA GIANG LOOP'}
                boxClass={'text-center'}
            />
            <div className='relative w-full h-fit'>
                <h2 className='font-tomatoes text-[16.0195vw] font-normal leading-normal tracking-[0.16019rem] text-[#ffd772] text-center mt-[2.19vw]'>
                    Vietnam
                </h2>
                <div className='w-fit h-fit absolute bottom-[4vw] translate-y-full left-1/2 -translate-x-1/2'>
                    <SlideBanner />
                </div>
            </div>
            <Image
                className='absolute opacity-40 rounded-[1vw] top-[6.25vw] left-[-5.56vw] object-cover w-[15.5625vw] h-[15.5625vw]'
                src={'/images/left-up.jpg'}
                alt='alt'
                width={300}
                height={300}
            />
            <Image
                className='object-cover absolute opacity-40 rounded-[1vw] bottom-0 left-0 w-[23.25vw] h-[23.25vw]'
                src={'/images/left-down.jpg'}
                alt='alt'
                width={400}
                height={400}
            />
            <Image
                className='object-cover absolute opacity-40 rounded-[1vw] top-[6.25vw] right-[-4vw] w-[23.25vw] h-[23.25vw]'
                src={'/images/right-up.jpg'}
                alt='alt'
                width={400}
                height={400}
            />
            <Image
                className='object-cover absolute opacity-40 rounded-[1vw] bottom-0 right-[-4vw] w-[15.5625vw] h-[15.5625vw]'
                src={'/images/right-down.jpg'}
                alt='alt'
                width={300}
                height={300}
            />
        </section>
    )
}
