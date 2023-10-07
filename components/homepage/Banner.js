'use client'

import Image from 'next/image'
import SlideBanner from './SlideBanner'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)
export default function Banner({ section1 }) {
    const parentRef = useRef(null)
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    useEffect(() => {
        let ctx = gsap.context(() => {
            setTimeout(() => {
                gsap.matchMedia().add('(min-width: 1024px)', () => {
                    gsap.to('#subtitle', {
                        color: '#fff',
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: 'top 60%',
                            end: 'top top',
                            scrub: 1,
                            once: true,
                        },
                    })
                    gsap.to('#title', {
                        color: '#fff',
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: 'top 60%',
                            end: 'top top',
                            scrub: 1,
                            once: true,
                        },
                    })
                    gsap.to('#text-vn', {
                        color: '#fff',
                        fontSize: '2.93169vw',
                        letterSpacing: '0.02931rem',
                        marginTop: '1.75vw',
                        transform: 'translateY(4vw)',
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: 'top 60%',
                            end: 'top top',
                            scrub: 1,
                            once: true,
                        },
                    })
                    gsap.to('#box-title', {
                        transform: 'translateY(4vw)',
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: 'top 60%',
                            end: 'top top',
                            scrub: 1,
                            once: true,
                        },
                    })
                    gsap.to('#box-slide', {
                        width: '100vw',
                        height: '100vh',
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: 'top 60%',
                            end: 'top 15%',
                            scrub: 1,
                            once: true,
                        },
                    })
                    gsap.to('#overlay', {
                        height: '100vh',
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: 'top 60%',
                            end: 'top 15%',
                            scrub: 1,
                            once: true,
                        },
                    })
                    gsap.to('#box-icon', {
                        opacity: 1,
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: 'top 60%',
                            end: 'top 15%',
                            scrub: 1,
                            once: true,
                        },
                    })
                    gsap.to('.left-images', {
                        transform: 'translateX(-100%)',
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: 'top 60%',
                            end: 'top top',
                            scrub: 1,
                            once: true,
                        },
                    })
                    gsap.to('.right-images', {
                        transform: 'translateX(100%)',
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: 'top 60%',
                            end: 'top top',
                            scrub: 1,
                            once: true,
                        },
                    })
                })
            }, 500)
        }, parentRef)
        return () => {
            ctx.revert()
        }
    }, [])
    return (
        <>
            <div className='h-[6.25vw] w-full max-md:hidden'></div>
            <section
                ref={parentRef}
                className='h-screen relative z-[5] overflow-hidden max-md:mt-[5.33vw]'
            >
                <div
                    id='box-title'
                    className={`text-center uppercase text-primary-70 w-full relative z-[5] font-heavitas max-md:mt-[5.33vw]`}
                >
                    <h3
                        id='subtitle'
                        className={`text-[1vw] leading-normal max-md:text-[3.2vw] font-extrabold mb-[0.75vw] max-md:mb-[2.13vw] max-md:text-white`}
                    >
                        {section1?.subTitle}
                    </h3>
                    <h2
                        id='title'
                        className={`text-[3vw] font-extrabold leading-[1] max-md:text-[6.4vw] max-md:leading-[1.17] max-md:text-white`}
                    >
                        {section1?.title}
                    </h2>
                </div>
                <div className='w-full lg:relative h-fit'>
                    <h2
                        id='text-vn'
                        className='font-tomatoes relative z-10 text-[16.0195vw] font-normal leading-normal tracking-[0.16019vw] text-[#ffd772] text-center mt-[2.19vw] max-md:text-[6.4vw] max-md:tracking-[0.064vw] max-md:text-white max-md:mt-[3.2vw]'
                    >
                        {section1?.heading}
                    </h2>
                    <div
                        id='box-slide'
                        className='h-[29.8125vw] w-[53vw] max-md:w-full max-md:h-[100vh] absolute bottom-[11vw] max-md:top-0 max-md:left-0 lg:translate-y-full left-1/2 lg:-translate-x-1/2'
                    >
                        <SlideBanner
                            section1={section1}
                            isMobile={isMobile}
                        />
                        <div
                            id='overlay'
                            className='absolute top-0 left-0 z-10 w-full h-0 opacity-50 bg-gradient-banner max-md:h-full'
                        ></div>
                    </div>
                </div>
                {!isMobile && (
                    <>
                        <Image
                            className='absolute opacity-40 left-images rounded-[1vw] top-[6.25vw] left-[-5.56vw] object-cover w-[15.5625vw] h-[15.5625vw]'
                            src={section1?.imageLeftUp?.sourceUrl || '/images/left-up.jpg'}
                            alt={section1?.imageLeftUp?.altText || section1?.imageLeftUp?.title}
                            width={300}
                            height={300}
                        />
                        <Image
                            className='object-cover absolute left-images opacity-40 rounded-[1vw] bottom-0 left-[-5.56vw] w-[23.25vw] h-[23.25vw]'
                            src={section1?.imageLeftDown?.sourceUrl || '/images/left-down.jpg'}
                            alt={section1?.imageLeftDown?.altText || section1?.imageLeftDown?.title}
                            width={400}
                            height={400}
                        />
                        <Image
                            className='object-cover right-images absolute opacity-40 rounded-[1vw] top-[6.25vw] right-[-4vw] w-[23.25vw] h-[23.25vw]'
                            src={section1?.imageRightUp?.sourceUrl || '/images/right-up.jpg'}
                            alt={section1?.imageRightUp?.altText || section1?.imageRightUp?.title}
                            width={400}
                            height={400}
                        />
                        <Image
                            className='object-cover absolute right-images opacity-40 rounded-[1vw] bottom-0 right-[-4vw] w-[15.5625vw] h-[15.5625vw]'
                            src={section1?.imageRightDown?.sourceUrl || '/images/right-down.jpg'}
                            alt={section1?.imageRightDown?.altText || section1?.imageRightDown?.title}
                            width={300}
                            height={300}
                        />
                    </>
                )}
            </section>
        </>
    )
}
