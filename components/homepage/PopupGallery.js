'use client'

import Link from 'next/link'
import SlidePopupGallery from './SlidePopupGallery'
import Image from 'next/image'
import IconClose from '../icons/IconClose'
const arr = new Array(2).fill(0)

export default function PopupGallery({ indexTab, section4, isOpen, setIsOpen, setIndexTab, allTourHG }) {
    return (
        <>
            <div
                className={`${
                    isOpen ? 'translate-y-0' : 'translate-y-[110%]'
                } fixed bottom-0 left-0 w-full h-fit bg-white z-[100] pt-[3.75vw] px-[6.25vw] pb-[4.6vw] rounded-tl-[1vw] rounded-tr-[1vw] transition-all duration-500`}
            >
                <ul className='flex justify-center gap-x-[2.25vw] mb-[1.5vw]'>
                    {section4?.listGallery?.map((e, index) => (
                        <li
                            key={index}
                            className={`${
                                indexTab === index
                                    ? 'border-b-[1.5px] border-solid border-primary-70 text-primary-70'
                                    : 'text-gray-scale-20'
                            } text-[0.875vw] font-semibold leading-[1.42] tracking-[0.00875vw] pb-[0.25vw] cursor-pointer relative before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:border-b before:border-den-2 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left`}
                            onClick={() => setIndexTab(index)}
                        >
                            {e?.category}
                        </li>
                    ))}
                </ul>
                <SlidePopupGallery
                    section4={section4}
                    indexTab={indexTab}
                />
                <ul className=' flex justify-center mt-[1.47vw] gap-x-[0.75vw]'>
                    {allTourHG?.nodes?.map((e, index) => (
                        <li key={index}>
                            <Link
                                href={'/' + e?.slug}
                                className='py-[0.75vw] px-[1.25vw] rounded-[0.5vw] bg-primary-5 shadow-btnTravel flex items-center gap-x-[0.5vw]'
                            >
                                <Image
                                    className='object-cover'
                                    src={'/images/motorV2.svg'}
                                    alt='motor'
                                    width={30}
                                    height={30}
                                />
                                <span className='text-primary-70 text-[0.875vw] font-semibold leading-[1.42] tracking-[0.00875vw]'>
                                    {index === 0 ? '4 DAYS TOUR' : '3 DAYS TOUR'}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={() => setIsOpen(false)}
                    className='w-[3.5vw] h-[3.5vw] flex justify-center items-center absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-slideTrave cursor-pointer'
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
