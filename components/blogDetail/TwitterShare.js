'use client'

import React from 'react'
import twitter from '../../public/images/twitter.svg'
import Image from 'next/image'
function TwitterShare({ url, title }) {
  const handleClick = () => {
    const twitterUrl = 'https://twitter.com/intent/tweet?'
    const params = new URLSearchParams({
      url: url,
      text: title,
    })
    window.open(twitterUrl + params.toString(), '_blank')
  }

  return (
    <button onClick={handleClick}>
      <Image
        src={twitter}
        alt='twitter'
        width={50}
        height={50}
        className='w-[6.4rem] h-[6.4rem] object-contain lg:w-[1.5rem] lg:h-[1.5rem] md:w-[3rem] md:h-[3rem]'
      />
    </button>
  )
}

export default TwitterShare
