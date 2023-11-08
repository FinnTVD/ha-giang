'use client'
import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger as ScrollTrigger1 } from 'gsap/ScrollTrigger'
import useStore from '@/app/(store)/store'
import ScrollTrigger from 'react-scroll-trigger'

const list = [
  { name: 'Information', id: 1, to: '#box-tab' },
  { name: 'Map', id: 2, to: '#mapId' },
  { name: 'Trip detail', id: 3, to: '#tourId' },
  { name: 'Book online', id: 4, to: '#bookingId' },
]

gsap.registerPlugin(ScrollTrigger1)
const OverviewMb = ({ data }) => {
  const param = useParams()
  const parentRef = useRef(null)
  const [isFixed, setIsFixed] = useState(false)
  const indexTab = useStore((state) => state.indexTab)
  const setIndexTab = useStore((state) => state.setIndexTab)
  const [show, setShow] = useState(true)
  useEffect(() => {
    let ctx = gsap.context(() => {
      setTimeout(() => {
        gsap.matchMedia().add('(max-width: 767px)', () => {
          gsap.to('#box-tab', {
            marginBottom: 0,
            paddingBottom: 0,
            paddingTop: 0,
            boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 8px',
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
  return (
    <section
      ref={parentRef}
      className='max-md:flex flex-col ml-[3.62rem] z-10 mt-[23rem] font-poppins md:hidden'
    >
      <div
        id='box-tab'
        className={`${
          isFixed
            ? 'fixed left-0 top-0 bg-white pl-[2.13rem] pr-[2.13rem] py-[2.13rem] w-full z-[99]'
            : '!shadow-none pl-[1rem]'
        } overflow-hidden mb-[4.26rem] transition-all duration-500 `}
      >
        <div className={`${isFixed ? '' : 'pr-[4.27rem]'} flex mb-[1.6rem] w-full whitespace-nowrap mt-[1rem]`}>
          {list?.map((item) => (
            <Link
              data-src={true}
              href={`/${param.slug}${item.to}`}
              onClick={() => setIndexTab(item?.id)}
              className={`text-[3.46rem] h-[6.4rem] pb-[1.6rem] w-[24.42rem] font-poppins text-center
            ${
              indexTab === item?.id
                ? 'text-[#B34B1E] font-semibold border-b-[0.4rem] border-[#B34B1E]'
                : 'font-normal text-[#898989]'
            }`}
              key={item.id}
            >
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={`${show ? '' : 'h-[40rem] overflow-hidden'} pr-[4.27rem] relative`}>
        <div
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)' }}
          className={`${show ? 'hidden' : ''} absolute bottom-[-1rem] left-0 w-full h-[6.27rem] z-[5]`}
        ></div>
        <div>
          <h2 className='text-[3.46rem] flex gap-[1.6rem] mb-[0.53rem] text-[#A1A1A1] uppercase'>
            <Image
              className='w-[4.27rem] h-[4.27rem] object-contain'
              src={'/images/hightLight.svg'}
              alt='icon'
              width={36}
              height={36}
            />
            hight light:
          </h2>
          <ul className='pl-[5.86rem] list-disc flex flex-col gap-[0.53rem] mb-[6.4rem]'>
            {data?.highlight.map((e, index) => (
              <li
                key={index}
                className='text-[#2E2E2E]  font-semibold text-[3.73rem]'
              >
                {e?.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='text-[3.46rem] flex gap-[1.6rem] mb-[0.53rem] text-[#A1A1A1] uppercase'>
            <Image
              className='w-[4.27rem] h-[4.27rem] object-cover'
              src={'/images/transport.svg'}
              alt='icon'
              width={36}
              height={36}
            />
            TRANSPORT:
          </h2>
          <div className='pl-[5.86rem] list-disc flex flex-col gap-[0.53rem] mb-[6.4rem]'>
            <span className='text-[#2E2E2E]  font-semibold text-[3.73rem]'>{data?.transport}</span>
          </div>
        </div>
        <div>
          <h2 className='text-[3.46rem] flex gap-[1.6rem] mb-[0.53rem] text-[#A1A1A1] uppercase'>
            <Image
              className='w-[4.27rem] h-[4.27rem] object-cover'
              src={'/images/pickUpFrom.svg'}
              alt='icon'
              width={36}
              height={36}
            />
            PICK UP FROM:
          </h2>
          <div className='pl-[5.86rem] list-disc flex flex-col gap-[0.53rem] mb-[6.4rem]'>
            <span className='text-[#2E2E2E]  font-semibold text-[3.73rem]'>{data?.pickUpFrom}</span>
          </div>
        </div>
        <ScrollTrigger onEnter={() => setIndexTab(1)}>
          <div>
            <h2 className='text-[3.46rem] flex gap-[1.6rem] mb-[0.53rem] text-[#A1A1A1] uppercase'>
              <Image
                className='w-[4.27rem] h-[4.27rem] object-cover'
                src={'/images/included.svg'}
                alt='icon'
                width={36}
                height={36}
              />
              INCLUDED:
            </h2>
            <ul className='pl-[5.86rem] list-disc flex flex-col gap-[0.53rem] mb-[6.4rem]'>
              {data?.included?.map((e, index) => (
                <li
                  key={index}
                  className='text-[#2E2E2E]  font-semibold text-[3.73rem]'
                >
                  {e?.item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollTrigger>
        <div>
          <h2 className='text-[3.46rem] flex gap-[1.6rem] mb-[0.53rem] text-[#A1A1A1] uppercase'>
            <Image
              className='w-[4.27rem] h-[4.27rem] object-cover'
              src={'/images/EXCLUDED.svg'}
              alt='icon'
              width={36}
              height={36}
            />
            EXCLUDED:
          </h2>
          <ul className='pl-[5.86rem] list-disc flex flex-col gap-[0.53rem] mb-[6.4rem]'>
            {data?.excluded?.map((e, index) => (
              <li
                key={index}
                className='text-[#2E2E2E]  font-semibold text-[3.73rem]'
              >
                {e?.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => setShow((pre) => !pre)}
        className='uppercase flex mx-auto relative z-10 items-center gap-[1.3rem] text-[#B34B1E] font-poppins font-medium text-[3.73rem]'
      >
        {show ? 'See less' : 'See more'}
        <Image
          src={'/images/rowUp.svg'}
          alt='arrow up'
          width={36}
          height={36}
          className={`${show ? '' : 'rotate-180'} w-[2.38rem] h-[1.29rem] object-cover`}
        />
      </button>
    </section>
  )
}

export default OverviewMb
