'use client'

import { useEffect, useState } from 'react'
import Nav from '../global/Nav'
import Image from 'next/image'
import FeaturesHeader from '../global/FeaturesHeader'
import { useMediaQuery } from 'react-responsive'
import MenuRes from '../global/MenuRes'

export default function HeaderContact({ dataHome, data }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }, [isOpen])
    return (
        <header className='relative'>
            <div className='absolute top-0 left-0 w-full'>
                <Nav
                    setIsOpen={setIsOpen}
                    header={dataHome?.data?.page?.homeHG?.header}
                    allTourHG={dataHome?.data?.allTourHG}
                />
            </div>
            <FeaturesHeader
                header={dataHome?.data?.page?.homeHG?.header}
                allTourHG={dataHome?.data?.allTourHG}
            />
            <div className='relative px-[6vw] pt-[11.25vw] pb-[4vw] max-md:px-0 max-md:pt-[49vw]'>
                <Image
                    width={1600}
                    height={567}
                    alt={data?.backgroundPc?.altText || data?.backgroundPc?.title}
                    src={data?.backgroundPc?.sourceUrl}
                    className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                />
                <div className='bg-white bg-opacity-[0.85] absolute w-full h-full left-0 top-0'></div>
                <Image
                    width={1600}
                    height={435}
                    alt='about-us-overlay'
                    src='/images/abcloud.png'
                    className='absolute bottom-0 left-0 w-full'
                />
                <div
                    className='relative text-center font-heavitas text-[11.625vw] uppercase leading-[1] max-md:text-[16.5vw]'
                    style={{
                        backgroundImage: `url(${data?.backgroundPc?.sourceUrl})`,
                        backgroundRepeat: 'repeat',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundPosition: 'center',
                    }}
                >
                    {data?.title}
                </div>
            </div>
            {isMobile && (
                <MenuRes
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    header={dataHome?.data?.page?.homeHG?.header}
                    allTourHG={dataHome?.data?.allTourHG}
                />
            )}
        </header>
    )
}
