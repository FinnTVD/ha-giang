import Image from 'next/image'
import Nav from './Nav'
import FeaturesHeader from './FeaturesHeader'
import ContentHeader from '../homepage/ContentHeader'
import BookNowHeader from '../homepage/BookNowHeader'

export default function Header() {
    return (
        <header className='relative w-full h-screen'>
            <Nav />
            <Image
                className='z-0 object-cover'
                src='/images/bg-header.jpg'
                fill
                sizes='100vw'
                priority
            />
            <ContentHeader />
            <FeaturesHeader />
            <BookNowHeader />
        </header>
    )
}
