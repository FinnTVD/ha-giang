import { ComboboxDemo } from '../ui/combobox'

export default function BookNowHeader() {
    return (
        <div className='bg-white w-[71.75vw] items-center rounded-[0.75vw] absolute bottom-[2.63vw] left-1/2 -translate-x-1/2 flex justify-between py-[1.25vw] px-[1.88vw]'>
            <div>
                <span className='text-[0.875vw] block mb-[0.5vw] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] '>
                    TOUR
                </span>
                <ComboboxDemo />
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
                {/* <ComboboxDemo /> */}
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
                {/* <ComboboxDemo /> */}
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
