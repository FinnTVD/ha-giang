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
            <div className='flex gap-x-[1vw] absolute bottom-0 translate-y-1/2 right-[6.27vw]'>
                <div className='w-[11.88vw] h-[12.12vw] relative flex items-center justify-center'>
                    <Image
                        className='z-0 object-cover'
                        src={'/images/circle-orange.png'}
                        alt='circle currency'
                        fill
                        sizes='100vw'
                    />
                    <div className='relative z-[1] flex flex-col justify-center items-center'>
                        <span className='text-[0.875vw] text-white font-semibold leading-[1.42] tracking-[0.00875rem]'>
                            SELF - DRIVING
                        </span>
                        <span className='text-[3vw] font-bold leading-[1.08] text-white'>$169</span>
                    </div>
                </div>
                <div className='w-[11.88vw] h-[12.12vw] relative flex items-center justify-center'>
                    <Image
                        className='z-0 object-cover'
                        src={'/images/circle-orange.png'}
                        alt='circle currency'
                        fill
                        sizes='100vw'
                    />
                    <div className='relative z-[1] flex flex-col justify-center items-center'>
                        <span className='text-[0.875vw] text-white font-semibold leading-[1.42] tracking-[0.00875rem]'>
                            PRIVATE DRIVER
                        </span>
                        <span className='text-[3vw] font-bold leading-[1.08] text-white'>$199</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
