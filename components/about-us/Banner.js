import Image from 'next/image'

export default function Banner({ bannerData, title }) {
    return (
        <section className='relative pt-[11.25vw] pb-[4vw] max-md:px-0 max-md:pt-[49vw]'>
            <Image
                width={1600}
                height={567}
                alt='about-us-banner'
                src={bannerData?.background?.sourceUrl || '/images/t11.jpg'}
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
                className={`${
                    title?.includes('destinations') ? 'max-md:text-[11.2vw]' : 'max-md:text-[16.5vw]'
                } relative text-center font-heavitas text-[11.625vw] uppercase leading-[1]`}
                style={{
                    backgroundImage: `url(${bannerData?.textBackground?.sourceUrl || '/images/t11.jpg'})`,
                    backgroundRepeat: 'repeat',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundPosition: 'center',
                }}
            >
                {title}
            </div>
        </section>
    )
}
