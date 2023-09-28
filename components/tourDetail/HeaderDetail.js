import Image from 'next/image'
import Nav from '../global/Nav'
import FeaturesHeader from '../global/FeaturesHeader'
import ContentHeaderDetail from './ContentHeaderDetail'

export default function HeaderDetail() {
    return (
        <header className='relative w-full h-screen'>
            <Nav />
            <Image
                className='z-0 object-cover'
                src='/images/header-detail.jpg'
                fill
                sizes='100vw'
                priority
            />
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-gradient-header-detail'></div>
            {/* <div className='absolute bottom-0 left-0 !w-[67.5vw] !h-[65.5vw] z-[10]'>
                <Image
                    className='relative z-10 object-cover w-full h-full'
                    src={'/images/mask-circle-detail.png'}
                    alt='circle'
                    width={800}
                    height={800}
                />
            </div> */}
            <ContentHeaderDetail />
            <FeaturesHeader />
        </header>
    )
}
