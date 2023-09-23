import Image from 'next/image'
import React from 'react'

function InfoFooter({icon,text,subText}) {
  return (
   <div  className='md:text-[0.875vw] text-[3.46667vw] md:leading-[1.375vw] leading-[4.8vw] tracking-[0.00219vw] text-[#727272]'>
        <div className='flex md:gap-[0.5vw] gap-[2.13vw] md:w-[16.6875vw] items-center max-md:justify-center md:mb-[0.25vw] mb-[2.67vw]'>
            <div>
                <Image src={icon} alt="icon" className='md:w-[1vw] md:h-[1vw] w-[3.73333vw] h-[3.73333vw]' />
            </div>
            <p>{text}</p>
        </div>
        <p className='ml-[1.5vw]'>{subText}</p>
   </div>
  )
}

export default InfoFooter