'use client'
import Image from 'next/image'
import Nav from './Nav'
import FeaturesHeader from './FeaturesHeader'
import ContentHeader from '../homepage/ContentHeader'
import BookNowHeader from '../homepage/BookNowHeader'
import MenuRes from './MenuRes'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Header({ header, allTourHG }) {
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
        <header className='relative w-full h-screen max-md:h-[90vh] overflow-hidden'>
            <div className='max-md:h-[70vh] h-screen relative'>
                <Nav
                    setIsOpen={setIsOpen}
                    header={header}
                    allTourHG={allTourHG}
                />
                <Image
                    className='z-0 object-cover'
                    src={header?.background?.sourceUrl || '/images/bg-header.jpg'}
                    alt={header?.background?.altText || header?.background?.title}
                    fill
                    sizes='100vw'
                    priority
                />
                <h1 className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[-1] text-white'>
                    Ha Giang Tour
                </h1>
                {isMobile && (
                    <Image
                        className='absolute bottom-[-0.5vw] left-0 z-0 object-cover w-full'
                        src='/images/linear-res.png'
                        alt='linear res'
                        width={400}
                        height={800}
                        priority
                    />
                )}
                <ContentHeader header={header} />
                <FeaturesHeader
                    header={header}
                    allTourHG={allTourHG}
                />
                <BookNowHeader allTourHG={allTourHG} />
            </div>
            {isMobile && (
                <MenuRes
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    header={header}
                    allTourHG={allTourHG}
                />
            )}
        </header>
    )
}
