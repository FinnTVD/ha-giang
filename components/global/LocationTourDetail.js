import Image from 'next/image'
import React from 'react'

function LocationTourDetail({icon,text}) {
  return (
    <div className='flex gap-[0.5vw] rounded-[0.5vw] bg-[#FFF0EA]  items-center px-[0.75vw] py-[0.375vw]'>
        <Image alt='icon' src={icon} quality={100} className='md:w-[1vw] md:h-[1vw]' />
        <h5>{text}</h5>
    </div>
  )
}

export default LocationTourDetail