import Link from 'next/link'
import SubTitle from '../global/SubTitle'
import IconPhone from '../icons/IconPhone'
import IconMail from '../icons/IconMail'
import IconHome from '../icons/IconHome'
import IconGlobal from '../icons/IconGlobal'
// import Image from 'next/image'

export default function MapContact({ data, footer }) {
    if (!data) return
    const { section1 } = data

    return (
        <section className='flex px-[6.25vw] h-fit gap-x-[1.5vw] mb-[6.25vw] max-md:flex-col-reverse max-md:px-[4.27vw] max-md:gap-y-[8vw] max-md:mt-[13vw]'>
            {/* <div className='relative w-fit h-fit'> */}
            <div
                id='boxMap'
                className='!w-[50.4275] max-lg:!w-[56vw] max-md:!w-full h-full max-md:h-[146.4vw] rounded-[0.75vw] max-md:rounded-[4.267vw] overflow-hidden'
                dangerouslySetInnerHTML={{ __html: `${section1?.map}` }}
            />
            {/* <div className='absolute top-0 left-0 z-20 w-[7.0625vw] h-[2.25vw] rounded-[0.25vw] flex justify-center items-center bg-white'>
                    <Image
                        className='w-full h-full'
                        src='/images/gg-map.png'
                        alt='gg map'
                        width={100}
                        height={25}
                    />
                </div>
            </div> */}
            <div className='flex-1'>
                <SubTitle
                    boxClass={'flex flex-col-reverse text-center gap-y-[1vw] max-md:gap-y-[4.27vw]'}
                    title={section1?.title}
                    subTitle={section1?.subtitle}
                />
                <div className='mt-[4.44vw]'>
                    <div className='flex gap-x-[0.5vw] max-md:flex-col max-md:items-center max-md:gap-y-[2.13vw]'>
                        <IconPhone className={'w-[1vw] h-[1vw] max-md:w-[4.267vw] max-md:h-[4.267vw] mt-[0.4vw]'} />
                        <ul className='flex flex-col gap-y-[0.25vw] max-md:gap-y-[1.07vw]'>
                            {footer?.contactUs?.peopleContact?.map((e, index) => (
                                <li key={index}>
                                    <Link
                                        className='font-normal text-[0.875vw] max-lg:text-[1.875vw] leading-[1.57] tracking-[0.00219vw] text-gray-scale-50 max-md:text-[3.733vw] max-md:tracking-[0.00933vw]'
                                        href={`tel:${e?.numberPhone}`}
                                    >
                                        {e?.numberPhone + ' (' + e?.name + ')'}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full border-t border-solid border-[#d9d9d966] my-[2vw] max-md:my-[5.33vw]'></div>
                    <div className='flex items-center gap-x-[0.5vw] max-md:flex-col max-md:items-center max-md:gap-y-[2.13vw]'>
                        <IconMail className='w-[1vw] h-[1vw] max-md:w-[4.267vw] max-md:h-[4.267vw]' />
                        <Link
                            className='font-normal text-[0.875vw] max-lg:text-[1.875vw] leading-[1.57] tracking-[0.00219vw] text-gray-scale-50 max-md:text-[3.733vw] max-md:tracking-[0.00933vw]'
                            href={`mailto:${footer?.contactUs?.email}`}
                        >
                            {footer?.contactUs?.email}
                        </Link>
                    </div>
                    <div className='w-full border-t border-solid border-[#d9d9d966] my-[2vw] max-md:my-[5.33vw]'></div>
                    <div className='flex items-center gap-x-[0.5vw] max-md:flex-col max-md:items-center max-md:gap-y-[2.13vw]'>
                        <IconHome className='w-[1vw] h-[1vw] max-md:w-[4.267vw] max-md:h-[4.267vw]' />
                        <span className='font-normal text-[0.875vw] max-lg:text-[1.875vw] leading-[1.57] tracking-[0.00219vw] text-gray-scale-50 max-md:text-[3.733vw] max-md:tracking-[0.00933vw]'>
                            {footer?.contactUs?.address}
                        </span>
                    </div>
                    <div className='w-full border-t border-solid border-[#d9d9d966] my-[2vw] max-md:my-[5.33vw]'></div>
                    <div className='flex items-center gap-x-[0.5vw] max-md:flex-col max-md:items-center max-md:gap-y-[2.13vw]'>
                        <IconGlobal className='w-[1vw] h-[1vw] max-md:w-[4.267vw] max-md:h-[4.267vw]' />
                        <span className='font-normal text-[0.875vw] max-lg:text-[1.875vw] leading-[1.57] tracking-[0.00219vw] text-gray-scale-50 max-md:text-[3.733vw] max-md:tracking-[0.00933vw]'>
                            {footer?.contactUs?.global}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
