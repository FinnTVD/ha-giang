'use client'
import Button from '@/components/global/Button'
import Image from 'next/image'

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <section className='relative h-screen  w-full flex justify-center items-center overflow-hidden flex-col'>
          <Image
            width={1600}
            height={567}
            alt='about-us-banner'
            src={'/images/t11.jpg'}
            className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
          ></Image>
          <div className='bg-white bg-opacity-[0.85] absolute w-full h-full left-0 top-0'></div>
          <Image
            width={1600}
            height={435}
            alt='about-us-overlay'
            src='/images/abcloud.png'
            className='absolute bottom-0 left-0 w-full'
          ></Image>
          <div
            className={`max-md:text-[32.5rem] relative text-center font-heavitas max-lg:text-[24.625rem] text-[20.625rem] uppercase leading-[1]`}
            style={{
              backgroundImage: `url('/images/t11.jpg')`,
              backgroundRepeat: 'repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundPosition: 'center',
            }}
          >
            Something went wrong!
          </div>
          <h2>{error.message}</h2>
          <Button
            onClick={() => reset()}
            content='Try again'
            classContent={'lg:text-[1.5rem] md:text-[3rem]'}
          />
        </section>
      </body>
    </html>
  )
}