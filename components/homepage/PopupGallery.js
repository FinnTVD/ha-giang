'use client'

import Link from 'next/link'
import SlidePopupGallery from './SlidePopupGallery'
import Image from 'next/image'
const arr = new Array(2).fill(0)

export default function PopupGallery({ indexTab, section4, isOpen, setIsOpen, setIndexTab }) {
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
                    {arr?.map((e, index) => (
                        <li>
                            <Link
                                href='/'
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
                                    3 DAYS TOUR
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={() => setIsOpen(false)}
                    className='w-[3.5vw] h-[3.5vw] flex justify-center items-center absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-slideTrave cursor-pointer'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='28'
                        height='28'
                        viewBox='0 0 28 28'
                        fill='none'
                        className='w-[1.75vw] h-[1.75vw]'
                    >
                        <path
                            d='M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z'
                            fill='#B34B1E'
                        />
                        <path
                            d='M17.1036 14.0001L21.2993 9.80449C21.4125 9.69129 21.5023 9.55689 21.5636 9.40896C21.6249 9.26103 21.6565 9.10247 21.6565 8.94235C21.6565 8.78222 21.6249 8.62366 21.5636 8.47573C21.5023 8.3278 21.4125 8.1934 21.2993 8.0802L19.92 6.70098C19.8068 6.58773 19.6724 6.49789 19.5245 6.43659C19.3766 6.3753 19.218 6.34375 19.0579 6.34375C18.8978 6.34375 18.7392 6.3753 18.5913 6.43659C18.4433 6.49789 18.3089 6.58773 18.1957 6.70098L14.0001 10.8966L9.80449 6.70098C9.69129 6.58773 9.55689 6.49789 9.40896 6.43659C9.26103 6.3753 9.10247 6.34375 8.94235 6.34375C8.78222 6.34375 8.62366 6.3753 8.47573 6.43659C8.3278 6.49789 8.1934 6.58773 8.0802 6.70098L6.70098 8.0802C6.58773 8.1934 6.49789 8.3278 6.43659 8.47573C6.3753 8.62366 6.34375 8.78222 6.34375 8.94235C6.34375 9.10247 6.3753 9.26103 6.43659 9.40896C6.49789 9.55689 6.58773 9.69129 6.70098 9.80449L10.8966 14.0001L6.70098 18.1957C6.58773 18.3089 6.49789 18.4433 6.43659 18.5913C6.3753 18.7392 6.34375 18.8978 6.34375 19.0579C6.34375 19.218 6.3753 19.3766 6.43659 19.5245C6.49789 19.6724 6.58773 19.8068 6.70098 19.92L8.0802 21.2993C8.1934 21.4125 8.3278 21.5023 8.47573 21.5636C8.62366 21.6249 8.78222 21.6565 8.94235 21.6565C9.10247 21.6565 9.26103 21.6249 9.40896 21.5636C9.55689 21.5023 9.69129 21.4125 9.80449 21.2993L14.0001 17.1036L18.1957 21.2993C18.3089 21.4125 18.4433 21.5023 18.5913 21.5636C18.7392 21.6249 18.8978 21.6565 19.0579 21.6565C19.218 21.6565 19.3766 21.6249 19.5245 21.5636C19.6724 21.5023 19.8068 21.4125 19.92 21.2993L21.2993 19.92C21.4125 19.8068 21.5023 19.6724 21.5636 19.5245C21.6249 19.3766 21.6565 19.218 21.6565 19.0579C21.6565 18.8978 21.6249 18.7392 21.5636 18.5913C21.5023 18.4433 21.4125 18.3089 21.2993 18.1957L17.1036 14.0001Z'
                            fill='white'
                        />
                    </svg>
                </div>
            </div>
            <div
                onClick={() => setIsOpen(false)}
                className={`${isOpen ? '' : 'hidden'} fixed bg-black/20 top-0 left-0 w-full h-full z-[80]`}
            ></div>
        </>
    )
}
