'use client'
import Image from 'next/image'
import Link from 'next/link'
import IconClose from '../icons/IconClose'
const listNav = [
    {
        id: 1,
        title: 'HOME',
        href: '/',
    },
    {
        id: 2,
        title: 'ABOUT US',
        href: '/about-us',
    },
    {
        id: 3,
        title: 'TOUR',
        href: '/tour',
    },
    {
        id: 4,
        title: 'DESTINATIONS',
        href: '/',
    },
    {
        id: 5,
        title: 'BLOG',
        href: '/',
    },
    {
        id: 6,
        title: 'FAQ',
        href: '/faq',
    },
    {
        id: 7,
        title: 'CONTACT',
        href: '/contact',
    },
    {
        id: 8,
        title: 'VIETNAM CHEERS HOSTEL',
        href: '/viet-nam-cheers-hostel',
    },
]

export default function MenuRes({ isOpen, setIsOpen, header, allTourHG }) {
    return (
        <article
            className={`${
                isOpen ? 'translate-x-0' : 'translate-x-[110%]'
            } fixed top-0 bottom-0 left-0 z-50 w-full h-screen bg-white lg:hidden pt-[9.067vw] px-[12.13vw] transition-all duration-300`}
        >
            <Image
                className='z-0 object-cover'
                src={'/images/bg-nav-res.png'}
                alt='background res'
                fill
                sizes='100vw'
            />
            {/* <Image
                onClick={() => setIsOpen(false)}
                className='absolute top-[8.53vw] right-[4.27vw] object-cover z-10 cursor-pointer'
                src={'/images/close-res.svg'}
                alt='close res'
                width={40}
                height={40}
            /> */}
            <div
                onClick={() => setIsOpen(false)}
                className='absolute top-[8.53vw] right-[4.27vw] object-cover z-10 cursor-pointer'
            >
                <IconClose className={'w-[8.53vw] h-[8.53vw]'} />
            </div>
            <div className='relative z-10 w-full'>
                <ul className='flex flex-col items-center gap-y-[6.4vw]'>
                    {listNav?.map((e, index) => (
                        <li
                            key={index}
                            className='w-fit h-fit'
                        >
                            <Link
                                className='uppercase font-heavitas text-[5.33vw] font-normal leading-[1] text-gray-scale-80 block text-center'
                                href={e?.id === 8 ? header?.vietnamCheersHostel?.url : e?.href || '/'}
                            >
                                {e?.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-x-[3.47vw] justify-center mt-[5.33vw]'>
                    <Link
                        href={header?.facebook?.url || '/'}
                        className='bg-primary-70 cursor-pointer rounded-full flex items-center justify-center w-[7.46vw] h-[7.46vw]'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                        >
                            <path
                                d='M6.13242 14.2214H8.79912V8.88142H11.2018L11.4658 6.22787H8.79912V4.88802C8.79912 4.51983 9.09758 4.22135 9.46578 4.22135H11.4658V1.55469H9.46578C7.62478 1.55469 6.13242 3.04707 6.13242 4.88802V6.22787H4.79908L4.53516 8.88142H6.13242V14.2214Z'
                                fill='white'
                            />
                        </svg>
                    </Link>
                    <Link
                        href={header?.youtube?.url || '/'}
                        className='bg-primary-70 cursor-pointer rounded-full flex items-center justify-center w-[7.46vw] h-[7.46vw]'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='10'
                            viewBox='0 0 14 10'
                            fill='none'
                        >
                            <path
                                d='M7.00075 9.56399H6.98741C6.94608 9.56399 2.81075 9.55599 1.76741 9.27266C1.1937 9.11812 0.745647 8.66979 0.591414 8.09599C0.4038 7.03759 0.313207 5.96419 0.320747 4.88932C0.3159 3.81266 0.408954 2.7378 0.598747 1.67799C0.757221 1.10366 1.2033 0.65329 1.77608 0.489323C2.79075 0.222656 6.81208 0.222656 6.98275 0.222656H6.99675C7.03875 0.222656 11.1847 0.230656 12.2174 0.513989C12.7899 0.669329 13.2371 1.11672 13.3921 1.68932C13.5857 2.75168 13.6765 3.83019 13.6634 4.90999C13.6681 5.98532 13.5748 7.05886 13.3847 8.11732C13.2285 8.69039 12.7802 9.13772 12.2067 9.29266C11.1934 9.56132 7.17141 9.56399 7.00075 9.56399ZM5.66741 2.89266L5.66408 6.89266L9.13875 4.89266L5.66741 2.89266Z'
                                fill='white'
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
