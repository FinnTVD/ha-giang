import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import SlideCheersTour from './SlideCheersTour'
import Button from '../global/Button'
import { PopupBookNow } from '../global/PopupBookNow'

export default function CheersTour({ section2, allTourHG }) {
    return (
        <section
            id='cheers-tour'
            className='mt-[6.25vw] max-md:mt-[16vw] lg:flex lg:justify-between lg:flex-row-reverse relative lg:pl-[6.25vw] h-fit w-full z-[10]'
        >
            <SubTitle
                boxClass={
                    'lg:!absolute lg:top-0 lg:left-[6.25vw] lg:!w-[26.875vw] max-md:!w-[58.4vw]  max-md:!px-[4.27vw]'
                }
                subTitle={section2?.subTitle}
                title={section2?.title}
            />
            <div className='max-md:px-[4.27vw] relative w-[35.4375vw] max-md:mt-[6vw] max-md:w-[86.4vw] max-md:h-[104.83733vw] lg:h-auto lg:mr-[5.69vw] max-md:mx-auto'>
                <Image
                    className=' max-md:object-contain lg:object-fill z-[0]'
                    src={section2?.map?.sourceUrl || '/images/mapvn.png'}
                    alt={section2?.map?.altText || section2?.map?.title}
                    fill
                    sizes='100vw'
                    quality={100}
                />
            </div>
            <div className='lg:pt-[9.17vw] lg:w-fit max-md:mt-[2.33vw] max-md:overflow-hidden '>
                <ul className='grid grid-cols-2 gap-[1.51vw] max-md:hidden'>
                    {section2?.listTitle?.map((e, index) => (
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
                            <span className='relative z-[1] text-[0.875vw] text-primary-5 font-bold leading-[1.375] tracking-[0.00219vw] line-clamp-1'>
                                {e?.title}
                            </span>
                        </li>
                    ))}
                </ul>
                <SlideCheersTour section2={section2} />
                <div
                    className='description lg:w-[43vw] mt-[2.39vw] max-md:mt-[5.33vw] max-md:text-justify max-md:px-[4.27vw] text-gray-scale-50 text-[0.875vw] 
                font-normal leading-[1.375] tracking-[0.00219vw] max-md:text-[3.733vw] max-md:leading-[1.57] max-md:tracking-[0.00933vw]'
                    dangerouslySetInnerHTML={{ __html: section2?.description }}
                />

                <div className='flex gap-x-[1vw] max-md:gap-x-[3.2vw] mt-[1.87vw] max-md:mt-[5.33vw] max-md:px-[4.27vw]'>
                    <PopupBookNow allTourHG={allTourHG}>
                        <div className='max-md:flex-1'>
                            <Button
                                primary={true}
                                content={'book now'}
                                className={'max-md:h-[12.8vw] max-md:w-full'}
                            />
                        </div>
                    </PopupBookNow>
                    <Button
                        href={'/about-us'}
                        content={'read more'}
                        className={'max-md:h-[12.8vw] max-md:flex-1'}
                    />
                </div>
            </div>
        </section>
    )
}
