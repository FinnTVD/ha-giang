import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import SlideCheersTour from './SlideCheersTour'
import Button from '../global/Button'

const arr = [
    {
        id: 1,
        title: 'SUPPORT LOCAL - SUSTAINABLE TRAVEL',
    },
    {
        id: 2,
        title: 'FREE 100% CANCELLATION',
    },
    {
        id: 3,
        title: 'DAILY DEPARTURES',
    },
    {
        id: 4,
        title: 'NO HAPPY - FULL REFUND',
    },
]

export default function CheersTour() {
    return (
        <section
            id='cheers-tour'
            className='mt-[6.25vw] lg:flex lg:justify-between lg:flex-row-reverse relative lg:pl-[6.25vw] h-fit w-full'
        >
            <SubTitle
                boxClass={
                    'lg:!absolute lg:top-0 lg:left-[6.25vw] lg:!w-[26.875vw] max-md:!w-[58.4vw]  max-md:!px-[4.27vw]'
                }
                subTitle={'start with'}
                title={'ha giang tour cheers tour'}
            />
            <div className='max-md:px-[4.27vw] relative w-[35.4375vw] max-md:mt-[6vw] max-md:w-[86.4vw] max-md:h-[104.83733vw] lg:h-auto lg:mr-[5.69vw] max-md:mx-auto'>
                <Image
                    className=' max-md:object-contain lg:object-fill z-[0]'
                    src='/images/mapvn.png'
                    fill
                    sizes='100vw'
                    quality={100}
                />
            </div>
            <div className='lg:pt-[9.17vw] lg:w-fit max-md:mt-[2.33vw] overflow-hidden '>
                <ul className='grid grid-cols-2 gap-[1.51vw] max-md:hidden'>
                    {Array.isArray(arr) &&
                        arr?.map((e, index) => (
                            <li
                                key={index}
                                className='h-[5.13175vw] w-[20.60419vw] relative flex justify-center items-center'
                            >
                                <Image
                                    className='z-0 object-contain'
                                    src={'/images/bg-text-cheer.png'}
                                    fill
                                    sizes='100vw'
                                />
                                <span className='relative font-poppins z-[1] text-[0.875vw] text-primary-5 font-bold leading-[1.375] tracking-[0.00219rem]'>
                                    {e?.title}
                                </span>
                            </li>
                        ))}
                </ul>
                <SlideCheersTour arr={arr} />
                <p
                    className='description lg:w-[43vw] mt-[2.39vw] max-md:mt-[5.33vw] max-md:text-justify max-md:px-[4.27vw] text-gray-scale-50 text-[0.875vw] 
                font-normal leading-[1.375] tracking-[0.00219rem] max-md:text-[3.733vw] max-md:leading-[1.57] max-md:tracking-[0.00933rem]'
                >
                    The 3 Days Epic Ha giang Loop Tour with easy rider organized by <strong>Vietnam Cheers</strong>
                    Hostel is a must in Vietnam for any traveller. It is considered a highlight of South East Asia.
                    <br />
                    <br />
                    Explore <strong>Ma Pi Leng</strong>, one of The Big Four Passes in Vietnam, through thousands of
                    conical limestone peaks as well as deep and meandering valleys. Party dinner, waterfall and local le
                    at authentic <strong>Cheers Du Gia Homestay</strong>. will be the unique experience also. This is
                    designed for adventure-seekers — those who want to experience the biggest challenge Vietnam has to
                    offer in a safe environment with our experienced easy riders.
                </p>
                <div className='flex gap-x-[1vw] mt-[1.87vw]'>
                    <Button
                        primary={true}
                        content={'book now'}
                    />
                    <Button content={'read more'} />
                </div>
            </div>
        </section>
    )
}
