'use client'
import { useEffect, useState } from 'react'
import IconMuted from '../icons/IconMuted'
import IconAudio from '../icons/IconAudio'

export default function ItemVideo({ e, index, indexSlider }) {
  const [isMute, setIsMute] = useState(true)

  useEffect(() => {
    setIsMute(true)
  }, [indexSlider])

  return (
    <>
      <video
        autoPlay
        poster='/images/bannervn.jpg'
        loop
        className='w-full h-full lg:rounded-[1rem] object-cover min-w-full min-h-full'
        id={'videoBanner' + index}
        playsInline
        muted={isMute}
      >
        <source
          type='video/mp4'
          src={e?.linkVideo?.url || '/images/video1.mp4'}
        ></source>
        Your browser does not support HTML5 video.
      </video>
      <div
        onClick={() => setIsMute(!isMute)}
        className='absolute bottom-[3.75rem] right-[6.25rem] z-[99] cursor-pointer max-md:right-[4.27rem] max-md:bottom-[5.23rem] max-lg:right-[6.25rem] max-lg:bottom-[6.75rem]'
      >
        {isMute ? (
          <IconMuted className='lg:w-[2.5rem] lg:h-[2.5rem] max-md:w-[10.67rem] max-md:h-[10.67rem] max-lg:w-[8rem] max-lg:h-[8rem]' />
        ) : (
          <IconAudio className='lg:w-[2.5rem] lg:h-[2.5rem] max-md:w-[10.67rem] max-md:h-[10.67rem] max-lg:w-[8rem] max-lg:h-[8rem]' />
        )}
      </div>
      <div
        id='overlay'
        className='absolute top-0 left-0 z-10 w-full h-0 opacity-50 bg-gradient-banner max-lg:h-full lg:rounded-[1rem]'
      ></div>
    </>
  )
}
