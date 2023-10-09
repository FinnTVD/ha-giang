import Image from 'next/image'
import React from 'react'

function LocationTourDetail({ icon, text }) {
  return (
    <div className='flex gap-[0.5rem] rounded-[0.5rem] bg-[#FFF0EA]  items-center px-[0.75rem] py-[0.375rem]'>
      <Image
        alt='icon'
        src={icon}
        quality={100}
        className='md:w-[1rem] md:h-[1rem]'
      />
      <h5>{text}</h5>
    </div>
  )
}

export default LocationTourDetail
