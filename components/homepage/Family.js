'use client'
import { useEffect, useRef, useState } from 'react'
import SubTitle from '../global/SubTitle'
import SlideFamily from './SlideFamily'
import Button from '../global/Button'
import SlideTabFamily from './SlideTabFamily'
import SlidePeople from './SlidePeople'
import { useMediaQuery } from 'react-responsive'
import SlideFamilyMb from './SlideFamilyMb'
import IconPeople from '../icons/IconPeople'
import IconMotor from '../icons/IconMotor'
import IconCheck from '../icons/IconCheck'

export default function Family({ section6 }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const contentRef = useRef(null)
    const [indexTab, setIndexTab] = useState(0)
    const [tourLeader, setTourLeader] = useState(section6?.listCategory[0]?.listAddress[0])

    useEffect(() => {
        if (typeof window === 'undefined' || !contentRef.current) return
        if (window.innerWidth < 768) return
        if (contentRef.current.offsetHeight > (11 * window.innerWidth) / 100) {
            contentRef.current.style.height = '11vw'
            contentRef.current.style.overflowY = 'scroll'
        }
    }, [])

    return (
        <section className='px-[6.25vw] mt-[6.25vw] max-md:px-[4.27vw] max-md:mt-[16vw]'>
            <div className='flex justify-between items-end mb-[1.87vw] max-md:mb-[5.33vw] max-md:flex-col max-md:gap-y-[5.33vw]'>
                <SubTitle
                    title={section6?.title}
                    subTitle={section6?.subTitle}
                />
                <div className='w-[50.5vw] max-md:w-full'>
                    <SlideTabFamily
                        setIndexTab={setIndexTab}
                        indexTab={indexTab}
                        section6={section6}
                    />
                </div>
            </div>
            {indexTab === 0 ? (
                <div className='flex gap-x-[1.44vw] max-md:flex-col-reverse max-md:gap-y-[5.33vw]'>
                    <div className='flex-1 relative'>
                        <h2 className='mb-[0.5vw] max-md:mb-[1.07vw] text-[1.625vw] font-semibold leading-[1.23] text-gray-scale-50 uppercase max-md:text-[5.33vw] max-md:leading-[1.2] max-md:tracking-[0.0008vw]'>
                            {tourLeader?.title}
                        </h2>
                        <p
                            ref={contentRef}
                            id='content-family'
                            className='lg:w-[28.0945vw] text-gray-scale-50 mb-[1.25vw] max-md:mb-[3.2vw] text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219vw] max-md:text-[3.733vw] max-md:tracking-[0.00933vw]'
                        >
                            {tourLeader?.description}
                        </p>
                        <div className='h-fit lg:absolute lg:bottom-0 lg:left-0 lg:z-10'>
                            <div className='flex items-center'>
                                <IconPeople className='w-[1vw] h-[1vw] max-md:w-[4.5vw] max-md:h-[4.5vw]' />
                                <span className='inline-block mr-[0.25vw] max-md:mr-[1.07vw] max-md:ml-[1.6vw] ml-[0.37vw] text-[0.875vw] text-primary-70 font-semibold leading-[1.57] tracking-[0.00219vw] max-md:text-[3.73vw] max-md:tracking-[0.00933vw]'>
                                    Group size:
                                </span>
                                <span className='text-[0.875vw] leading-[1.57] tracking-[0.00219vw] font-normal text-gray-scale-50 max-md:tracking-[0.00933vw] max-md:text-[3.733vw] max-md:font-medium'>
                                    {tourLeader?.groupSize}
                                </span>
                            </div>
                            <div className='flex items-center my-[0.5vw] max-md:my-[2.13vw]'>
                                <IconMotor className='w-[1vw] h-[1vw] max-md:w-[4.5vw] max-md:h-[4.5vw]' />
                                <span className='inline-block mr-[0.25vw] max-md:mr-[1.07vw] max-md:ml-[1.6vw] ml-[0.37vw] text-[0.875vw] text-primary-70 font-semibold leading-[1.57] tracking-[0.00219vw] max-md:text-[3.73vw] max-md:tracking-[0.00933vw]'>
                                    Transport:
                                </span>
                                <span className='text-[0.875vw] leading-[1.57] tracking-[0.00219vw] font-normal text-gray-scale-50 max-md:tracking-[0.00933vw] max-md:text-[3.733vw] max-md:font-medium'>
                                    {tourLeader?.transport}
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <IconCheck className='w-[1vw] h-[1vw] max-md:w-[4.5vw] max-md:h-[4.5vw]' />
                                <span className='inline-block mr-[0.25vw] max-md:mr-[1.07vw] max-md:ml-[1.6vw] ml-[0.37vw] text-[0.875vw] text-primary-70 font-semibold leading-[1.57] tracking-[0.00219vw] max-md:text-[3.73vw] max-md:tracking-[0.00933vw]'>
                                    Trip completed:
                                </span>
                                <span className='text-[0.875vw] leading-[1.57] tracking-[0.00219vw] font-normal text-gray-scale-50 max-md:tracking-[0.00933vw] max-md:text-[3.733vw] max-md:font-medium'>
                                    {tourLeader?.tripCompleted}
                                </span>
                            </div>
                            <div className='flex gap-x-[1vw] mt-[1.88vw] max-md:mt-[5.33vw] max-md:gap-x-[3.2vw]'>
                                <Button
                                    content={'JOIN WITH US'}
                                    primary={true}
                                    href={tourLeader?.joinWithUs?.url || '/'}
                                    className='max-md:w-full'
                                />
                                <Button
                                    href={'tel:' + tourLeader?.callUs}
                                    content={'CALL US'}
                                    className='max-md:w-full'
                                />
                            </div>
                        </div>
                    </div>
                    {isMobile ? (
                        <SlideFamilyMb
                            setTourLeader={setTourLeader}
                            section6={section6}
                        />
                    ) : (
                        <SlideFamily
                            setTourLeader={setTourLeader}
                            section6={section6}
                        />
                    )}
                </div>
            ) : (
                <SlidePeople
                    section6={section6}
                    indexTab={indexTab}
                />
            )}
        </section>
    )
}
