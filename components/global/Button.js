'use client'

import Image from 'next/image'
import Link from 'next/link'
const stylePrimary = 'text-white bg-primary-70'

const styleDefault = 'box-border border border-solid border-primary-70 text-primary-70'

export default function Button({ href, className, type = 'button', primary, content }) {
    return (
        <>
            {href ? (
                <Link
                    className={`${className} ${
                        primary ? stylePrimary : styleDefault
                    } relative rounded-[0.5vw] uppercase py-[0.75vw] px-[1.5vw] text-[0.8125vw] font-bold leading-[1.54] `}
                    href={href || '/'}
                >
                    {primary && (
                        <Image
                            className='absolute z-0 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            src='/images/btn.svg'
                            width={130}
                            height={40}
                        />
                    )}
                    <span className='relative z-[1]'>{content}</span>
                </Link>
            ) : (
                <button
                    type={type}
                    className={`${className} ${
                        primary ? stylePrimary : styleDefault
                    } relative rounded-[0.5vw] uppercase py-[0.75vw] px-[1.5vw] text-[0.8125vw] font-bold leading-[1.54] `}
                >
                    {primary && (
                        <Image
                            className='absolute z-0 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            src='/images/btn.svg'
                            width={130}
                            height={40}
                        />
                    )}
                    <span className='relative z-[1]'>{content}</span>
                </button>
            )}
        </>
    )
}
