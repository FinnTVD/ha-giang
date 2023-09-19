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
        <div className='bg-white w-[71.75vw] items-center rounded-[0.75vw] absolute bottom-[2.63vw] left-1/2 -translate-x-1/2 flex justify-between py-[1.25vw] px-[1.88vw]'>
            <div>
                <span className='text-[0.875vw] block mb-[0.5vw] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] '>
                    TOUR
                </span>
                <div className='flex items-center'>
                    <Image
                        className='object-contain w-[2vw] h-[2vw]'
                        src={'/images/marker.svg'}
                        alt='marker'
                        width={40}
                        height={40}
                    />
                    <ComboboxDemo frameworks={frameworks1} />
                </div>
            </div>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1'
                height='36'
                viewBox='0 0 1 36'
                fill='none'
                className='h-[2.125vw]'
            >
                <path
                    d='M0.5 1L0.499999 35'
                    stroke='#D9D9D9'
                    strokeLinecap='round'
                />
            </svg>
            <div>
                <span className='text-[0.875vw] block mb-[0.5vw] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] '>
                    SELF - DRIVING
                </span>
                <div className='flex items-center'>
                    <Image
                        className='object-contain w-[2vw] h-[2vw]'
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
                className='h-[2.125vw]'
            >
                <path
                    d='M0.5 1L0.499999 35'
                    stroke='#D9D9D9'
                    strokeLinecap='round'
                />
            </svg>
            <div>
                <span className='text-[0.875vw] block mb-[0.5vw] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] '>
                    PRIVATE DRIVER
                </span>
                <div className='flex items-center'>
                    <Image
                        className='object-contain w-[2vw] h-[2vw]'
                        src={'/images/people.svg'}
                        alt='marker'
                        width={40}
                        height={40}
                    />
                    <ComboboxDemo frameworks={frameworks2} />
                </div>
            </div>
            <button className='text-white flex flex-col gap-y-[0.25vw] bg-primary-70 py-[0.75vw] px-[1.5vw] rounded-[0.5vw]'>
                <span className=' text-center text-[1.625vw] font-bold leading-[1.23] block w-full'>$299</span>
                <span className=' text-center text-[0.875vw] font-bold leading-[1.43] tracking-[0.00875rem]'>
                    BOOK NOW
                </span>
            </button>
        </div>
    )
}
