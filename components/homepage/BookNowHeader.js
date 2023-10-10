'use client'
import IconMarker from '../icons/IconMarker'
import { useState } from 'react'
import { ComboboxV2 } from '../ui/ComboboxV2'
import { PopupBookNow } from '../global/PopupBookNow'
import IconPeople from '../icons/IconPeople'

export default function BookNowHeader({ allTourHG }) {
  const [countSelf, setCountSelf] = useState(1)
  const [countDriver, setCountDriver] = useState(1)
  const [tour, setTour] = useState(allTourHG?.nodes[0])
  return (
    <div className='bg-white w-[71.75rem] max-md:w-[91.467rem] max-md:rounded-[3.2rem] items-center rounded-[0.75rem] absolute bottom-[2.63rem] left-1/2 -translate-x-1/2 lg:flex lg:justify-between py-[1.25rem] px-[1.88rem] max-md:p-[4.27rem] max-md:bottom-0 max-md:translate-y-1/2 max-md:shadow-boxTour font-poppins'>
      <div className='max-md:w-full'>
        <span className='text-[0.875rem] block mb-[0.5rem] max-md:mb-[2.13rem] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] max-md:text-[3.2rem] max-md:font-medium max-md:leading-[1.33rem]'>
          TOUR
        </span>
        <div className='flex items-center'>
          <IconMarker className='w-[2rem] h-[2rem] max-md:w-[5.33rem] max-md:h-[5.33rem] max-md:mr-[2.06rem]' />

          <ComboboxV2
            setTour={setTour}
            allTourHG={allTourHG}
          />
        </div>
      </div>
      <div className='max-md:mt-[4.27rem] lg:hidden max-md:w-full border-t-[0.5px] border-solid border-[#b9b9b9] max-md:mb-[6.4rem]'></div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1'
        height='36'
        viewBox='0 0 1 36'
        fill='none'
        className='h-[2.125rem] max-md:hidden'
      >
        <path
          d='M0.5 1L0.499999 35'
          stroke='#D9D9D9'
          strokeLinecap='round'
        />
      </svg>
      <div className='max-md:w-1/2 max-md:pr-[3.2rem] max-md:inline-flex max-md:flex-col'>
        <span className='text-[0.875rem] block mb-[0.5rem] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] max-md:text-[3.2rem] max-md:font-medium max-md:leading-[1.33rem] whitespace-nowrap max-md:mb-[2.13rem]'>
          SELF - DRIVING
        </span>
        <div className='flex items-center'>
          <IconPeople className='w-[2rem] h-[2rem] max-md:w-[5.33rem] max-md:h-[5.33rem] max-md:mr-[2.13rem]' />
          <div className='flex items-center ml-[0.5rem] justify-end max-md:w-full'>
            <span className='text-gray-scale-80 text-[1rem] font-bold leading-normal tracking-[0.005rem] max-md:text-[3.733rem] max-md:font-semibold max-md:leading-[1.57rem]'>
              {countSelf} pax
            </span>
            <div className=' flex gap-x-[0.75rem] ml-[1rem] max-md:ml-auto max-md:gap-x-[3.13rem]'>
              <button
                onClick={() => setCountSelf(countSelf + 1)}
                className='w-[2.25rem] h-[2.25rem] max-md:w-[8.25rem] max-md:h-[8.25rem] max-md:text-[4.5rem] rounded-full select-none text-[1.5rem] active:scale-90 shadow-btn bg-white flex items-center justify-center'
              >
                +
              </button>
              <button
                onClick={() => {
                  if (countSelf === 0) return
                  setCountSelf(countSelf - 1)
                }}
                className='w-[2.25rem] h-[2.25rem] max-md:w-[8.25rem] max-md:h-[8.25rem] max-md:text-[4.5rem] rounded-full select-none text-[1.5rem] active:scale-90 shadow-btn bg-white flex items-center justify-center'
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
        className='h-[2.125rem] max-md:hidden'
      >
        <path
          d='M0.5 1L0.499999 35'
          stroke='#D9D9D9'
          strokeLinecap='round'
        />
      </svg>
      <div className='max-md:w-1/2 max-md:pl-[3.2rem] max-md:inline-flex max-md:flex-col'>
        <span className='text-[0.875rem] block mb-[0.5rem] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] max-md:text-[3.2rem] max-md:font-medium max-md:leading-[1.33rem] whitespace-nowrap max-md:mb-[2.13rem]'>
          PRIVATE DRIVER
        </span>
        <div className='flex items-center'>
          <IconPeople className='w-[2rem] h-[2rem] max-md:w-[5.33rem] max-md:h-[5.33rem] max-md:mr-[2.13rem]' />
          {/* <ComboboxDemo frameworks={frameworks2} /> */}
          <div className='flex items-center ml-[0.5rem] justify-end max-md:w-full'>
            <span className='text-gray-scale-80 text-[1rem] font-bold leading-normal tracking-[0.005rem] max-md:text-[3.733rem] max-md:font-semibold max-md:leading-[1.57rem]'>
              {countDriver} pax
            </span>
            <div className=' flex gap-x-[0.75rem] ml-[1rem] max-md:ml-auto max-md:gap-x-[3.13rem]'>
              <button
                onClick={() => setCountDriver(countDriver + 1)}
                className='w-[2.25rem] h-[2.25rem] max-md:w-[8.25rem] max-md:h-[8.25rem] max-md:text-[4.5rem] rounded-full select-none text-[1.5rem] active:scale-90 shadow-btn bg-white flex items-center justify-center'
              >
                +
              </button>
              <button
                onClick={() => {
                  if (countDriver === 0) return
                  setCountDriver(countDriver - 1)
                }}
                className='w-[2.25rem] h-[2.25rem] max-md:w-[8.25rem] max-md:h-[8.25rem] max-md:text-[4.5rem] rounded-full select-none text-[1.5rem] active:scale-90 shadow-btn bg-white flex items-center justify-center'
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <PopupBookNow
        tour={{
          tour,
          countDriver,
          countSelf,
        }}
        allTourHG={allTourHG}
      >
        <button
          className={`${
            countDriver * tour?.tourHaGiangDetail?.price?.localDriver +
              countSelf * tour?.tourHaGiangDetail?.price?.selfDriving ===
            0
              ? 'bg-gray-scale-5 pointer-events-none'
              : 'bg-primary-70'
          } text-white flex max-md:justify-between max-md:items-center lg:flex-col gap-y-[0.25rem] py-[0.75rem] px-[1.5rem] rounded-[0.5rem] max-md:w-full max-md:mt-[6.4rem] max-md:p-[3.2rem] max-md:rounded-[2.13rem]`}
        >
          <span className='lg:text-center max-md:w-fit text-[1.625rem] font-bold leading-[1.23] block w-full max-md:text-[5.33rem] max-md:leading-[1.2] max-md:tracking-[0.008rem]'>
            $
            {countDriver * tour?.tourHaGiangDetail?.price?.localDriver +
              countSelf * tour?.tourHaGiangDetail?.price?.selfDriving}
          </span>
          <span className=' text-center text-[0.875rem] font-bold leading-[1.43] tracking-[0.00875rem] max-md:text-[3.467rem] max-md:font-semibold max-md:leading-[1.53] whitespace-nowrap'>
            BOOK NOW
          </span>
        </button>
      </PopupBookNow>
    </div>
  )
}
