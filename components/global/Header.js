'use client'
import Image from 'next/image'
import Nav from './Nav'
import FeaturesHeader from './FeaturesHeader'
import ContentHeader from '../homepage/ContentHeader'
import BookNowHeader from '../homepage/BookNowHeader'
import MenuRes from './MenuRes'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='relative w-full h-screen max-md:h-[90vh] overflow-hidden'>
            <div className='max-md:h-[70vh] h-screen relative'>
                <Nav setIsOpen={setIsOpen} />
                <Image
                    className='z-0 object-cover'
                    src='/images/bg-header.jpg'
                    fill
                    sizes='100vw'
                    priority
                />
                {isMobile && (
                    <Image
                        className='absolute bottom-[-0.5vw] left-0 z-0 object-cover'
                        src='/images/linear-res.png'
                        width={400}
                        height={800}
                    />
                )}
                <ContentHeader />
                <FeaturesHeader />
                <BookNowHeader />
            </div>
            {isMobile && (
                <MenuRes
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                />
            )}
        </header>
    )
}
