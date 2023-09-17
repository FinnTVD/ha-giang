import Image from 'next/image'
import Link from 'next/link'

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

export default function Nav() {
    return (
        <nav className='flex w-full relative z-[1] justify-center pt-[1.5vw]'>
            <div className='w-[calc(100vw-12vw)] bg-white rounded-[1vw] flex items-center justify-between h-fit px-[1.88vw]'>
                <Image
                    className='w-[4.75vw] h-[4.16vw] object-cover my-[0.913vw]'
                    src='/images/logo.png'
                    width={80}
                    height={70}
                />
                <ul className='text-gray-scale-80 flex py-[1.06vw] font-poppins'>
                    {listNav?.map((e) => (
                        <li key={e?.id}>
                            <Link
                                href={e?.href || '/'}
                                className='text-[0.875vw] font-medium uppercase leading-[1.57] tracking-[0.00219rem] p-[1.25vw]'
                            >
                                {e?.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-x-[0.5vw]'>
                    <div className='bg-primary-70 rounded-full flex items-center justify-center w-[1.75vw] h-[1.75vw]'>
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
                    </div>
                    <div className='bg-primary-70 rounded-full flex items-center justify-center w-[1.75vw] h-[1.75vw]'>
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
                    </div>
                </div>
            </div>
        </nav>
    )
}
