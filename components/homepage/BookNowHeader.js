'use client'
import Image from 'next/image'
import { ComboboxDemo } from '../ui/combobox'

const frameworks1 = [
    {
        value: 'hagiang loop tour',
        label: 'HAGIANG LOOP TOUR',
    },
    {
        value: 'epic motorbike tour',
        label: 'EPIC MOTORBIKE TOUR',
    },
]
const frameworks2 = [
    {
        value: '1 pax',
        label: '1 pax',
    },
    {
        value: '2 pax',
        label: '2 pax',
    },
    {
        value: '3 pax',
        label: '3 pax',
    },
    {
        value: '4 pax',
        label: '4 pax',
    },
    {
        value: '5 pax',
        label: '5 pax',
    },
]

export default function BookNowHeader() {
    return (
        <div className='bg-white w-[71.75vw] max-md:w-[91.467vw] max-md:rounded-[3.2vw] items-center rounded-[0.75vw] absolute bottom-[2.63vw] left-1/2 -translate-x-1/2 lg:flex lg:justify-between py-[1.25vw] px-[1.88vw] max-md:p-[4.27vw] max-md:bottom-0 max-md:translate-y-1/2 max-md:shadow-boxTour'>
            <div className='max-md:w-full'>
                <span className='text-[0.875vw] block mb-[0.5vw] max-md:mb-[2.13vw] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] max-md:text-[3.2vw] max-md:font-medium max-md:leading-[1.33vw]'>
                    TOUR
                </span>
                <div className='flex items-center'>
                    <Image
                        className='object-contain w-[2vw] h-[2vw] max-md:w-[5.33vw] max-md:h-[5.33vw] max-md:mr-[2.06vw]'
                        src={'/images/marker.svg'}
                        alt='marker'
                        width={40}
                        height={40}
                    />
                    <ComboboxDemo frameworks={frameworks1} />
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
                <span className='text-[0.875vw] block mb-[0.5vw] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] max-md:text-[3.2vw] max-md:font-medium max-md:leading-[1.33vw] whitespace-nowrap max-md:mb-[2.13vw]'>
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
                    <ComboboxDemo frameworks={frameworks2} />
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
                <span className='text-[0.875vw] block mb-[0.5vw] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] max-md:text-[3.2vw] max-md:font-medium max-md:leading-[1.33vw] whitespace-nowrap max-md:mb-[2.13vw]'>
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
                    <ComboboxDemo frameworks={frameworks2} />
                </div>
            </div>
            <button className='text-white flex max-md:justify-between max-md:items-center lg:flex-col gap-y-[0.25vw] bg-primary-70 py-[0.75vw] px-[1.5vw] rounded-[0.5vw] max-md:w-full max-md:mt-[6.4vw] max-md:p-[3.2vw] max-md:rounded-[2.13vw]'>
                <span className='lg:text-center max-md:w-fit text-[1.625vw] font-bold leading-[1.23] block w-full max-md:text-[5.33vw] max-md:leading-[1.2] max-md:tracking-[0.008rem]'>
                    $299
                </span>
                <span className=' text-center text-[0.875vw] font-bold leading-[1.43] tracking-[0.00875rem] max-md:text-[3.467vw] max-md:font-semibold max-md:leading-[1.53] whitespace-nowrap'>
                    BOOK NOW
                </span>
            </button>
        </div>
    )
}
