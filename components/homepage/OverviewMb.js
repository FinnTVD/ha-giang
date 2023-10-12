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
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
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
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
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
    <section
      ref={parentRef}
      className='hidden max-md:flex flex-col ml-[3.62rem] z-10 mt-[23rem] font-poppins'
    >
      <div
        id='box-tab'
        className={`${
          isFixed ? 'fixed left-0 top-0 bg-white px-[2.13em] py-[2.13rem] w-full z-[99]' : '!shadow-none'
        } overflow-hidden mb-[4.26rem] transition-all duration-500 pl-[1rem]`}
      >
        s
        <div className='flex mb-[1.6rem] w-[100rem] whitespace-nowrap'>
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
      <div className={`${show ? '' : 'h-[40rem] overflow-hidden'}`}>
        <div>
          <h2 className='text-[3.46rem] flex gap-[1.6rem] mb-[0.53rem] text-[#A1A1A1] uppercase'>
            <Image
              src={highLightImg}
              alt='icon'
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
              src={transportImg}
              alt='icon'
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
              src={pickUpFromImg}
              alt='icon'
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
                src={includedImg}
                alt='icon'
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
              src={excludedImg}
              alt='icon'
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
        className='uppercase flex mx-auto items-center gap-[1.3rem] text-[#B34B1E] font-poppins font-medium text-[3.73rem]'
      >
        {show ? 'See less' : 'See more'}
        <Image
          src={rowUpImg}
          alt='arrow up'
          className={show ? '' : 'rotate-180'}
        />
      </button>
    </section>
  )
}

export default OverviewMb
