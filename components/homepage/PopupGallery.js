'use client'

import Link from 'next/link'
import SlidePopupGallery from './SlidePopupGallery'
import Image from 'next/image'
import IconClose from '../icons/IconClose'
import { useMediaQuery } from 'react-responsive'

export default function PopupGallery({ indexTab, section4, isOpen, setIsOpen, setIndexTab, allTourHG }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    return (
        <>
            <div
                className={`${
                    isOpen ? 'translate-y-0' : 'translate-y-[110%]'
                } fixed bottom-0 left-0 w-full max-md:h-[80vh] h-fit bg-white z-[100] pt-[3.75vw] px-[6.25vw] pb-[4.6vw] rounded-tl-[1vw] rounded-tr-[1vw] transition-all duration-500 max-md:flex max-md:flex-col-reverse max-md:justify-end max-md:px-[4.27vw] max-md:pt-[20.8vw] max-md:mb-0`}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    onClick={() => setIsOpen(false)}
                    className='w-[6.4vw] h-[6.4vw] md:hidden absolute top-[6.4vw] right-[4.27vw]'
                >
                    <path
                        d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z'
                        fill='#D9D9D9'
                    />
                    <path
                        d='M14.6603 12.0001L18.2565 8.40385C18.3536 8.30682 18.4306 8.19162 18.4831 8.06482C18.5357 7.93803 18.5627 7.80212 18.5627 7.66487C18.5627 7.52762 18.5357 7.39171 18.4831 7.26491C18.4306 7.13812 18.3536 7.02291 18.2565 6.92588L17.0743 5.7437C16.9773 5.64662 16.8621 5.56962 16.7353 5.51708C16.6085 5.46454 16.4726 5.4375 16.3353 5.4375C16.1981 5.4375 16.0622 5.46454 15.9354 5.51708C15.8086 5.56962 15.6934 5.64662 15.5964 5.7437L12.0001 9.33995L8.40385 5.7437C8.30682 5.64662 8.19162 5.56962 8.06482 5.51708C7.93803 5.46454 7.80212 5.4375 7.66487 5.4375C7.52762 5.4375 7.39171 5.46454 7.26491 5.51708C7.13812 5.56962 7.02291 5.64662 6.92588 5.7437L5.7437 6.92588C5.64662 7.02291 5.56962 7.13812 5.51708 7.26491C5.46454 7.39171 5.4375 7.52762 5.4375 7.66487C5.4375 7.80212 5.46454 7.93803 5.51708 8.06482C5.56962 8.19162 5.64662 8.30682 5.7437 8.40385L9.33995 12.0001L5.7437 15.5964C5.64662 15.6934 5.56962 15.8086 5.51708 15.9354C5.46454 16.0622 5.4375 16.1981 5.4375 16.3353C5.4375 16.4726 5.46454 16.6085 5.51708 16.7353C5.56962 16.8621 5.64662 16.9773 5.7437 17.0743L6.92588 18.2565C7.02291 18.3536 7.13812 18.4306 7.26491 18.4831C7.39171 18.5357 7.52762 18.5627 7.66487 18.5627C7.80212 18.5627 7.93803 18.5357 8.06482 18.4831C8.19162 18.4306 8.30682 18.3536 8.40385 18.2565L12.0001 14.6603L15.5964 18.2565C15.6934 18.3536 15.8086 18.4306 15.9354 18.4831C16.0622 18.5357 16.1981 18.5627 16.3353 18.5627C16.4726 18.5627 16.6085 18.5357 16.7353 18.4831C16.8621 18.4306 16.9773 18.3536 17.0743 18.2565L18.2565 17.0743C18.3536 16.9773 18.4306 16.8621 18.4831 16.7353C18.5357 16.6085 18.5627 16.4726 18.5627 16.3353C18.5627 16.1981 18.5357 16.0622 18.4831 15.9354C18.4306 15.8086 18.3536 15.6934 18.2565 15.5964L14.6603 12.0001Z'
                        fill='white'
                    />
                </svg>
                <ul className='flex justify-center gap-x-[2.25vw] mb-[1.5vw] max-md:order-1 max-md:my-[5.33vw] max-md:justify-between'>
                    {section4?.listGallery?.map((e, index) => (
                        <li
                            key={index}
                            className={`${
                                indexTab === index
                                    ? 'border-b-[1.5px] border-solid border-primary-70 text-primary-70'
                                    : 'text-gray-scale-20'
                            } text-[0.875vw] font-semibold max-md:text-[3.733vw] max-md:uppercase max-md:tracking-[0.03733vw] leading-[1.42] tracking-[0.00875vw] pb-[0.25vw] cursor-pointer relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-b before:border-den-2 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left`}
                            onClick={() => setIndexTab(index)}
                        >
                            {e?.category}
                        </li>
                    ))}
                </ul>
                {/* {isMobile ? (
                    <div className='w-full h-full rounded-[4.267vw] overflow-y-scroll relative'>
                        <div className='w-full h-fit absolute top-0 left-0 flex flex-col z-10'>
                            {section4?.listGallery[indexTab]?.slidesImage?.map((e, index) => (
                                <div className='w-full h-[63.46vw] mb-[2.13vw] rounded-[4.267vw]'>
                                    <Image
                                        key={index}
                                        className='object-cover w-full !h-[63.46vw]'
                                        src={e?.sourceUrl || '/images/gallery.jpg'}
                                        alt={e?.altText || e?.title}
                                        fill
                                        sizes='100vw'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : ( */}
                <SlidePopupGallery
                    section4={section4}
                    indexTab={indexTab}
                />
                {/* )} */}
                <ul className=' flex justify-center mt-[1.47vw] max-md:mt-0 gap-x-[0.75vw] max-md:order-2 max-md:gap-x-[3.2vw]'>
                    {allTourHG?.nodes?.map((e, index) => (
                        <li
                            key={index}
                            className='max-md:flex-1'
                        >
                            <Link
                                href={'/' + e?.slug}
                                className='py-[0.75vw] max-md:py-[3.2vw] max-md:flex max-md:justify-center px-[1.25vw] rounded-[0.5vw] max-md:rounded-[2.13vw] bg-primary-5 shadow-btnTravel flex items-center gap-x-[0.5vw] max-md:gap-x-[2.13vw]'
                            >
                                <Image
                                    className='object-cover max-md:w-[5.33vw] max-md:h-[5.33vw]'
                                    src={'/images/motorV2.svg'}
                                    alt='motor'
                                    width={30}
                                    height={30}
                                />
                                <span className='text-primary-70 text-[0.875vw] font-semibold leading-[1.42] tracking-[0.00875vw] max-md:text-[3.733vw] max-md:leading-[1.42] max-md:tracking-[0.03733vw]'>
                                    {index === 0 ? '4 DAYS TOUR' : '3 DAYS TOUR'}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={() => setIsOpen(false)}
                    className='w-[3.5vw] h-[3.5vw] flex justify-center items-center absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-slideTrave cursor-pointer max-md:hidden'
                >
                    <IconClose className='w-[1.75vw] h-[1.75vw]' />
                </div>
            </div>
            <div
                onClick={() => setIsOpen(false)}
                className={`${isOpen ? '' : 'hidden'} fixed bg-black/20 top-0 left-0 w-full h-full z-[80]`}
            ></div>
        </>
    )
}
