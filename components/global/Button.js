'use client'

import Link from 'next/link'
import IconMaskButton from '../icons/IconMaskButton'
const stylePrimary = 'text-white bg-primary-70'

const styleDefault = 'box-border border border-solid border-primary-70 text-primary-70'

export default function Button({ href, className, type = 'button', primary, content }) {
    return (
        <>
            {href ? (
                <Link
                    className={`${className} ${
                        primary ? stylePrimary : styleDefault
                    } relative rounded-[0.5vw] uppercase py-[0.75vw] max-md:py-[3.2vw] max-md:px-[6.4vw] px-[1.5vw] text-[0.8125vw] font-bold leading-[1.54] max-md:rounded-[2.13vw] max-md:text-[3.467vw] max-md:font-bold max-md:leading-[1.53] text-center inline-block`}
                    href={href || '/'}
                >
                    {primary && (
                        <IconMaskButton className='absolute z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-md:w-[33.62187vw] max-md:h-[8.07093vw] w-[8.31831vw] h-[1.99675vw]' />
                    )}
                    <span className='relative z-[1]'>{content}</span>
                </Link>
            ) : (
                <button
                    type={type}
                    className={`${className} ${
                        primary ? stylePrimary : styleDefault
                    } relative rounded-[0.5vw] uppercase py-[0.75vw] max-md:py-[3.2vw] max-md:px-[6.4vw] px-[1.5vw] text-[0.8125vw] font-bold leading-[1.54] max-md:rounded-[2.13vw] max-md:text-[3.467vw] max-md:font-bold max-md:leading-[1.53] text-center inline-block`}
                >
                    {primary && (
                        <IconMaskButton className='absolute z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-md:w-[33.62187vw] max-md:h-[8.07093vw] w-[8.31831vw] h-[1.99675vw]' />
                    )}
                    <span className='relative z-[1]'>{content}</span>
                </button>
            )}
        </>
    )
}
