'use client'
import { useEffect, useRef, useState } from 'react'
import SubTitle from '../global/SubTitle'
import SlideFamily from './SlideFamily'
import Image from 'next/image'
import Button from '../global/Button'
import SlideTabFamily from './SlideTabFamily'
import SlidePeople from './SlidePeople'
// import SlideFamilyV2 from './SlideFamilyV2'

export default function Family() {
    const contentRef = useRef(null)
    const [indexTab, setIndexTab] = useState(1)
    useEffect(() => {
        if (typeof window === 'undefined' || !contentRef.current) return
        if (contentRef.current.offsetHeight > (11 * window.innerWidth) / 100) {
            contentRef.current.style.height = '11vw'
            contentRef.current.style.overflowY = 'scroll'
        }
    })
    return (
        <section className='px-[6.25vw] mt-[6.25vw]'>
            <div className='flex justify-between items-end mb-[1.87vw]'>
                <SubTitle
                    title={'FAMILY'}
                    subTitle={'CHEERS'}
                />
                <div className='w-[50.5vw]'>
                    <SlideTabFamily
                        setIndexTab={setIndexTab}
                        indexTab={indexTab}
                    />
                </div>
            </div>
            {indexTab === 1 ? (
                <div className='flex gap-x-[1.44vw] '>
                    <div className='flex-1'>
                        <h2 className='mb-[0.5vw] text-[1.625vw] font-semibold leading-[1.23] text-gray-scale-50 uppercase'>
                            H’MONG TEAM
                        </h2>
                        <p
                            ref={contentRef}
                            id='content-family'
                            className='w-[28.0945vw] text-gray-scale-50 mb-[1.25vw] text-[0.875vw] font-normal leading-[1.57vw] tracking-[0.00219rem]'
                        >
                            Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded
                            my expectations and was all hassle free. Our guide was absolutely amazing too. Have
                            re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected
                            it to be that good — it totally exceeded my expectations and was all hassle free. Our guide
                            was absolutely amazing too. Have re-booked and cannot wait for .Our guide was absolutely
                            amazing too.
                        </p>
                        <div className='flex items-center'>
                            <Image
                                className='w-[1vw] h-[1vw] object-contain'
                                src='/images/people.svg'
                                height={24}
                                width={24}
                            />
                            <span className='inline-block mr-[0.25vw] ml-[0.37vw] text-[0.875vw] text-primary-70 font-semibold leading-[1.57] tracking-[0.00219rem]'>
                                Group size:
                            </span>
                            <span className='text-[0.875vw] leading-[1.57] tracking-[0.00219rem] font-normal text-gray-scale-50'>
                                15 members
                            </span>
                        </div>
                        <div className='flex items-center my-[0.5vw]'>
                            <Image
                                className='w-[1vw] h-[1vw] object-contain'
                                src='/images/motorv2.svg'
                                height={24}
                                width={24}
                            />
                            <span className='inline-block mr-[0.25vw] ml-[0.37vw] text-[0.875vw] text-primary-70 font-semibold leading-[1.57] tracking-[0.00219rem]'>
                                Transport:
                            </span>
                            <span className='text-[0.875vw] leading-[1.57] tracking-[0.00219rem] font-normal text-gray-scale-50'>
                                Motorbike
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <Image
                                className='w-[1vw] h-[1vw] object-contain'
                                src='/images/checkf.svg'
                                height={24}
                                width={24}
                            />
                            <span className='inline-block mr-[0.25vw] ml-[0.37vw] text-[0.875vw] text-primary-70 font-semibold leading-[1.57] tracking-[0.00219rem]'>
                                Trip completed:
                            </span>
                            <span className='text-[0.875vw] leading-[1.57] tracking-[0.00219rem] font-normal text-gray-scale-50'>
                                154 trips
                            </span>
                        </div>
                        <div className='flex gap-x-[1vw] mt-[1.88vw]'>
                            <Button
                                content={'JOIN WITH US'}
                                primary={true}
                            />
                            <Button content={'CALL US'} />
                        </div>
                    </div>
                    <SlideFamily />
                    {/* <SlideFamilyV2 /> */}
                </div>
            ) : (
                <SlidePeople />
            )}
        </section>
    )
}
