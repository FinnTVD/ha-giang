'use client'
import Image from 'next/image'
import IconMarker from '../icons/IconMarker'
import { useState } from 'react'
import { ComboboxV2 } from '../ui/ComboboxV2'

export default function BookNowHeader({ allTourHG }) {
    console.log('🚀 ~ file: BookNowHeader.js:19 ~ BookNowHeader ~ allTourHG:', allTourHG)
    const [countSelf, setCountSelf] = useState(1)
    const [countDriver, setCountDriver] = useState(1)
    const [tour, setTour] = useState(allTourHG?.nodes[0])
    return (
        <div className='bg-white w-[71.75vw] max-md:w-[91.467vw] max-md:rounded-[3.2vw] items-center rounded-[0.75vw] absolute bottom-[2.63vw] left-1/2 -translate-x-1/2 lg:flex lg:justify-between py-[1.25vw] px-[1.88vw] max-md:p-[4.27vw] max-md:bottom-0 max-md:translate-y-1/2 max-md:shadow-boxTour'>
            <div className='max-md:w-full'>
                <span className='text-[0.875vw] block mb-[0.5vw] max-md:mb-[2.13vw] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875vw] max-md:text-[3.2vw] max-md:font-medium max-md:leading-[1.33vw]'>
                    TOUR
                </span>
                <div className='flex items-center'>
                    <IconMarker className='w-[2vw] h-[2vw] max-md:w-[5.33vw] max-md:h-[5.33vw] max-md:mr-[2.06vw]' />
                    <ComboboxV2
                        setTour={setTour}
                        allTourHG={allTourHG}
                    />
                </div>
            </div>
            <div className='max-md:mt-[4.27vw] lg:hidden max-md:w-full border-t-[0.5px] border-solid border-[#b9b9b9] max-md:mb-[6.4vw]'></div>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1'
                height='36'
                viewBox='0 0 1 36'
                fill='none'
                className='h-[2.125vw] max-md:hidden'
            >
                <path
                    d='M0.5 1L0.499999 35'
                    stroke='#D9D9D9'
                    strokeLinecap='round'
                />
            </svg>
            <div className='max-md:w-1/2 max-md:pr-[3.2vw] max-md:inline-flex max-md:flex-col'>
                <span className='text-[0.875vw] block mb-[0.5vw] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875vw] max-md:text-[3.2vw] max-md:font-medium max-md:leading-[1.33vw] whitespace-nowrap max-md:mb-[2.13vw]'>
                    SELF - DRIVING
                </span>
                <div className='flex items-center'>
                    <Image
                        className='object-contain w-[2vw] h-[2vw] max-md:w-[5.33vw] max-md:h-[5.33vw] max-md:mr-[2.13vw]'
                        src={'/images/people.svg'}
                        alt='marker'
                        width={40}
                        height={40}
                    />
                    <div className='flex items-center ml-[0.5vw]'>
                        <span className='text-gray-scale-80 text-[1vw] font-bold leading-normal tracking-[0.005vw]'>
                            {countSelf} pax
                        </span>
                        <div className=' flex gap-x-[0.75vw] ml-[1vw]'>
                            <button
                                onClick={() => setCountSelf(countSelf + 1)}
                                className='w-[2.25vw] h-[2.25vw] rounded-full select-none text-[1.5vw] active:scale-90 shadow-btn bg-white flex items-center justify-center'
                            >
                                +
                            </button>
                            <button
                                onClick={() => {
                                    if (countSelf === 0) return
                                    setCountSelf(countSelf - 1)
                                }}
                                className='w-[2.25vw] h-[2.25vw] rounded-full select-none text-[1.5vw] active:scale-90 shadow-btn bg-white flex items-center justify-center'
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1'
                height='36'
                viewBox='0 0 1 36'
                fill='none'
                className='h-[2.125vw] max-md:hidden'
            >
                <path
                    d='M0.5 1L0.499999 35'
                    stroke='#D9D9D9'
                    strokeLinecap='round'
                />
            </svg>
            <div className='max-md:w-1/2 max-md:pl-[3.2vw] max-md:inline-flex max-md:flex-col'>
                <span className='text-[0.875vw] block mb-[0.5vw] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875vw] max-md:text-[3.2vw] max-md:font-medium max-md:leading-[1.33vw] whitespace-nowrap max-md:mb-[2.13vw]'>
                    PRIVATE DRIVER
                </span>
                <div className='flex items-center'>
                    <Image
                        className='object-contain w-[2vw] h-[2vw] max-md:w-[5.33vw] max-md:h-[5.33vw] max-md:mr-[2.13vw]'
                        src={'/images/people.svg'}
                        alt='marker'
                        width={40}
                        height={40}
                    />
                    {/* <ComboboxDemo frameworks={frameworks2} /> */}
                    <div className='flex items-center ml-[0.5vw]'>
                        <span className='text-gray-scale-80 text-[1vw] font-bold leading-normal tracking-[0.005vw]'>
                            {countDriver} pax
                        </span>
                        <div className=' flex gap-x-[0.75vw] ml-[1vw]'>
                            <button
                                onClick={() => setCountDriver(countDriver + 1)}
                                className='w-[2.25vw] h-[2.25vw] rounded-full select-none text-[1.5vw] active:scale-90 shadow-btn bg-white flex items-center justify-center'
                            >
                                +
                            </button>
                            <button
                                onClick={() => {
                                    if (countDriver === 0) return
                                    setCountDriver(countDriver - 1)
                                }}
                                className='w-[2.25vw] h-[2.25vw] rounded-full select-none text-[1.5vw] active:scale-90 shadow-btn bg-white flex items-center justify-center'
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button className='text-white flex max-md:justify-between max-md:items-center lg:flex-col gap-y-[0.25vw] bg-primary-70 py-[0.75vw] px-[1.5vw] rounded-[0.5vw] max-md:w-full max-md:mt-[6.4vw] max-md:p-[3.2vw] max-md:rounded-[2.13vw]'>
                <span className='lg:text-center max-md:w-fit text-[1.625vw] font-bold leading-[1.23] block w-full max-md:text-[5.33vw] max-md:leading-[1.2] max-md:tracking-[0.008vw]'>
                    $
                    {countDriver * tour?.tourHaGiangDetail?.price?.localDriver +
                        countSelf * tour?.tourHaGiangDetail?.price?.selfDriving}
                </span>
                <span className=' text-center text-[0.875vw] font-bold leading-[1.43] tracking-[0.00875vw] max-md:text-[3.467vw] max-md:font-semibold max-md:leading-[1.53] whitespace-nowrap'>
                    BOOK NOW
                </span>
            </button>
        </div>
    )
}
