'use client'
import Image from 'next/image'
import Link from 'next/link'
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from '../ui/navigation-menu'

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
const components = [
    {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description: 'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description: 'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description:
            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
]
export default function Nav({ setIsOpen }) {
    return (
        <nav className='flex w-full relative z-[1] justify-center pt-[1.5vw] max-md:pt-[5.8vw]'>
            <div className='w-[calc(100vw-12vw)] max-lg:w-[calc(100vw-8.54vw)] lg:bg-white rounded-[1vw] flex items-center justify-between h-fit lg:px-[1.88vw]'>
                <Link href={'/'}>
                    <Image
                        className='w-[4.75vw] h-[4.16vw] max-md:w-[18.13333vw] max-md:h-[15.8976vw] object-cover lg:my-[0.913vw]'
                        src='/images/logo.png'
                        width={80}
                        height={70}
                    />
                </Link>
                <div className='text-gray-scale-80 flex py-[1.06vw] max-lg:hidden'>
                    {listNav?.map((e) =>
                        e?.id === 3 ? (
                            <div key={e?.id}>
                                {/* <NavigationMenu>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger> */}
                                <Link
                                    href={e?.href || '/'}
                                    className='text-[0.875vw] transition duration-200 group relative font-medium uppercase leading-[1.57] tracking-[0.00219rem] p-[1.25vw] block hover:-translate-y-[0.5vw] hover:text-primary-50'
                                >
                                    {e?.title}
                                    <div className='w-[0.6vw] transition duration-500 group-hover:bg-primary-50 group-hover:bottom-[0.5vw] h-[0.6vw] bg-gray-300 rounded-full absolute left-1/2 -translate-x-1/2 bottom-0 opacity-0 group-hover:opacity-100'></div>
                                </Link>
                                {/* </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <p>lorem</p>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenu> */}
                            </div>
                        ) : (
                            <div key={e?.id}>
                                <Link
                                    href={e?.href || '/'}
                                    className='text-[0.875vw] transition duration-200 group relative font-medium uppercase leading-[1.57] tracking-[0.00219rem] p-[1.25vw] block hover:-translate-y-[0.5vw] hover:text-primary-50'
                                >
                                    {e?.title}
                                    <div className='w-[0.6vw] transition duration-500 group-hover:bg-primary-50 group-hover:bottom-[0.5vw] h-[0.6vw] bg-gray-300 rounded-full absolute left-1/2 -translate-x-1/2 bottom-0 opacity-0 group-hover:opacity-100'></div>
                                </Link>
                            </div>
                        ),
                    )}
                </div>
                <div className='flex gap-x-[0.5vw] max-lg:hidden'>
                    <div className='bg-primary-70 cursor-pointer rounded-full flex items-center justify-center w-[1.75vw] h-[1.75vw]'>
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
                    <div className='bg-primary-70 cursor-pointer rounded-full flex items-center justify-center w-[1.75vw] h-[1.75vw]'>
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
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='25'
                    viewBox='0 0 24 25'
                    fill='none'
                    className='lg:hidden max-md:w-[6.4vw] max-md:h-[6.4vw] cursor-pointer'
                    onClick={() => setIsOpen(true)}
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M23 4.57031H0.999998C0.447714 4.57031 0 5.01803 0 5.57031C0 6.12259 0.447714 6.57031 0.999998 6.57031H23C23.5523 6.57031 24 6.12259 24 5.57031C24 5.01803 23.5523 4.57031 23 4.57031ZM23 11.5703H1.00001C0.447718 11.5703 0 12.018 0 12.5703C0 13.1226 0.447718 13.5703 1.00001 13.5703H23C23.5523 13.5703 24 13.1226 24 12.5703C24 12.018 23.5523 11.5703 23 11.5703ZM1.00001 18.5703H23C23.5523 18.5703 24 19.018 24 19.5703C24 20.1226 23.5523 20.5703 23 20.5703H1.00001C0.447718 20.5703 0 20.1226 0 19.5703C0 19.018 0.447718 18.5703 1.00001 18.5703Z'
                        fill='white'
                    />
                </svg>
            </div>
        </nav>
    )
}
