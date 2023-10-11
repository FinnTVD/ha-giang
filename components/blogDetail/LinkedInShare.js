'use client'

import React from 'react'
import linkdin from '../../public/images/linkedinBlog.svg'
import Image from 'next/image'

function LinkedInShare({ url, title }) {
  const handleClick = () => {
    const linkedInUrl = 'https://www.linkedin.com/sharing/share-offsite/?'
    const params = new URLSearchParams({
      url: url,
      text: title,
    })
    window.open(linkedInUrl + params.toString(), '_blank')
  }

  return (
    <button onClick={handleClick}>
      <Image
        src={linkdin}
        alt='linkdin'
        width={50}
        height={50}
        className='w-[6.4rem] h-[6.4rem] object-contain md:w-[1.5rem] md:h-[1.5rem] md:w-[3rem] md:h-[3rem]'
      />
    </button>
  )
}

export default LinkedInShare
