'use client'

import React from 'react'
import facebook from '../../public/images/facebookBlog.svg'
import Image from 'next/image'
function FaceBookShare({ url, title }) {
  const handleClick = () => {
    const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?'
    const params = new URLSearchParams({
      url: url,
      text: title,
    })
    window.open(facebookUrl + params.toString(), '_blank')
  }

  return (
    <button onClick={handleClick}>
      <Image
        src={facebook}
        alt='fb'
        width={50}
        height={50}
        className='w-[6.4rem] h-[6.4rem] object-contain md:w-[1.5rem] md:h-[1.5rem] md:w-[3rem] md:h-[3rem]'
      />
    </button>
  )
}

export default FaceBookShare
