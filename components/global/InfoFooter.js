import Image from 'next/image'
import Link from 'next/link'

function InfoFooter({ icon, text, href, className, text1 }) {
  return (
    <div className='lg:text-[0.875rem] text-[3.46667rem] md:leading-[1.375rem] leading-[4.8rem] tracking-[0.00219rem] text-[#727272] md:text-[1.8rem]'>
      {href ? (
        <Link
          className='flex md:gap-[0.5rem] gap-[2.13rem] lg:w-[16.6875rem] items-center md:mb-[0.25rem] md:w-auto'
          href={href || '/'}
          target='_blank'
        >
          <Image
            src={icon}
            alt='icon'
            className='lg:w-[1rem] lg:h-[1rem] w-[3.73333rem] h-[3.73333rem] md:w-[1.8rem] md:h-[1.8rem] flex-shrink-0'
          />
          <p className={className}>{text}</p>
        </Link>
      ) : (
        <>
          <div className='flex md:gap-[0.5rem] gap-[2.13rem] lg:w-[16.6875rem] items-center md:mb-[0.25rem] md:w-auto'>
            <Image
              src={icon}
              alt='icon'
              className='lg:w-[1rem] lg:h-[1rem] w-[3.73333rem] h-[3.73333rem] md:w-[1.8rem] md:h-[1.8rem] flex-shrink-0'
            />
            <p className={className}>{text}</p>
          </div>
          {text1 && (
            <div className='flex md:gap-[0.5rem] gap-[2.13rem] lg:w-[16.6875rem] items-center md:mb-[0.25rem] md:w-auto max-md:mt-[2.13rem]'>
              <Image
                src={icon}
                alt='icon'
                className='lg:w-[1rem] lg:h-[1rem] w-[3.73333rem] h-[3.73333rem] md:w-[1.8rem] md:h-[1.8rem] flex-shrink-0'
              />
              <p className={className}>{text1}</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default InfoFooter
