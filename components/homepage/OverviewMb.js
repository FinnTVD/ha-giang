'use client'
import { useEffect, useRef, useState } from 'react'
import highLightImg from '@/public/icons/hightLight.svg'
import includedImg from '@/public/icons/included.svg'
import pickUpFromImg from '@/public/icons/pickUpFrom.svg'
import transportImg from '@/public/icons/transport.svg'
import excludedImg from '@/public/icons/EXCLUDED.svg'
import Image from 'next/image'
import rowUpImg from '@/public/icons/rowUp.svg'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useMediaQuery } from 'react-responsive'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const list = [
    { name: 'Information', id: 1, to: '#box-tab' },
    { name: 'Map', id: 2, to: '#mapId' },
    { name: 'Trip detail', id: 3, to: '#tourId' },
    { name: 'Book online', id: 4, to: '#bookingId' },
]

gsap.registerPlugin(ScrollTrigger)
const OverviewMb = ({ data }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const param = useParams()
    const parentRef = useRef(null)
    const [isFixed, setIsFixed] = useState(false)
    const [indexTab, setIndexTab] = useState(1)
    const [show, setShow] = useState(true)
    useEffect(() => {
        let ctx = gsap.context(() => {
            setTimeout(() => {
                gsap.matchMedia().add('(max-width: 767px)', () => {
                    gsap.to('#box-tab', {
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: 'top top',
                            end: '2000 top',
                            onToggle: (self) => {
                                if (self.isActive) {
                                    setIsFixed(true)
                                } else {
                                    window.scrollY < 900 && setIsFixed(false)
                                }
                            },
                        },
                    })
                })
            }, 500)
        }, parentRef)
        return () => {
            ctx.revert()
        }
    }, [])
    if (!isMobile) return
    return (
        <div
            ref={parentRef}
            className='hidden max-md:flex flex-col ml-[3.62vw] z-10 mt-[23vw]'
        >
            <div
                id='box-tab'
                className={`${
                    isFixed ? 'fixed left-0 top-0 bg-white px-[4.27vw] py-[2.13vw] w-full z-[99]' : ''
                } overflow-auto mb-[4.26vw] transition-all duration-500`}
            >
                <div className='flex gap-[3.2vw] mb-[1.6vw] w-[100vw] whitespace-nowrap'>
                    {list?.map((item) => (
                        <Link
                            data-src={true}
                            href={`/${param.slug}${item.to}`}
                            onClick={() => setIndexTab(item?.id)}
                            className={`${
                                isFixed ? 'text-[4.46vw]' : 'text-[3.46vw]'
                            } h-[6.4vw] pb-[1.6vw] w-[24.42vw] font-poppins text-center
          ${
              indexTab === item?.id
                  ? 'text-[#B34B1E] font-semibold border-b-[0.4vw] border-[#B34B1E]'
                  : 'font-normal text-[#898989]'
          }`}
                            key={item.id}
                        >
                            {item?.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={`${show ? '' : 'h-[40vw] overflow-hidden'}`}>
                <div>
                    <h2 className='text-[3.46vw] flex gap-[1.6vw] mb-[0.53vw] text-[#A1A1A1] uppercase'>
                        <Image
                            src={highLightImg}
                            alt='icon'
                        />
                        hight light:
                    </h2>
                    <ul className='pl-[5.86vw] list-disc flex flex-col gap-[0.53vw] mb-[6.4vw]'>
                        {data?.highlight.map((e, index) => (
                            <li
                                key={index}
                                className='text-[#2E2E2E]  font-semibold text-[3.73vw]'
                            >
                                {e?.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='text-[3.46vw] flex gap-[1.6vw] mb-[0.53vw] text-[#A1A1A1] uppercase'>
                        <Image
                            src={transportImg}
                            alt='icon'
                        />
                        TRANSPORT:
                    </h2>
                    <div className='pl-[5.86vw] list-disc flex flex-col gap-[0.53vw] mb-[6.4vw]'>
                        <span className='text-[#2E2E2E]  font-semibold text-[3.73vw]'>{data?.transport}</span>
                    </div>
                </div>
                <div>
                    <h2 className='text-[3.46vw] flex gap-[1.6vw] mb-[0.53vw] text-[#A1A1A1] uppercase'>
                        <Image
                            src={pickUpFromImg}
                            alt='icon'
                        />
                        PICK UP FROM:
                    </h2>
                    <div className='pl-[5.86vw] list-disc flex flex-col gap-[0.53vw] mb-[6.4vw]'>
                        <span className='text-[#2E2E2E]  font-semibold text-[3.73vw]'>{data?.pickUpFrom}</span>
                    </div>
                </div>
                <div>
                    <h2 className='text-[3.46vw] flex gap-[1.6vw] mb-[0.53vw] text-[#A1A1A1] uppercase'>
                        <Image
                            src={includedImg}
                            alt='icon'
                        />
                        INCLUDED:
                    </h2>
                    <ul className='pl-[5.86vw] list-disc flex flex-col gap-[0.53vw] mb-[6.4vw]'>
                        {data?.included?.map((e, index) => (
                            <li
                                key={index}
                                className='text-[#2E2E2E]  font-semibold text-[3.73vw]'
                            >
                                {e?.item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='text-[3.46vw] flex gap-[1.6vw] mb-[0.53vw] text-[#A1A1A1] uppercase'>
                        <Image
                            src={excludedImg}
                            alt='icon'
                        />
                        EXCLUDED:
                    </h2>
                    <ul className='pl-[5.86vw] list-disc flex flex-col gap-[0.53vw] mb-[6.4vw]'>
                        {data?.excluded?.map((e, index) => (
                            <li
                                key={index}
                                className='text-[#2E2E2E]  font-semibold text-[3.73vw]'
                            >
                                {e?.item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button
                onClick={() => setShow((pre) => !pre)}
                className='uppercase flex mx-auto items-center gap-[1.3vw] text-[#B34B1E] font-poppins font-medium text-[3.73vw]'
            >
                {show ? 'See less' : 'See more'}
                <Image
                    src={rowUpImg}
                    alt='arrow up'
                    className={show ? '' : 'rotate-180'}
                />
            </button>
        </div>
    )
}

export default OverviewMb
