'use client'

import { Fragment, useEffect, useState } from 'react'
import SubTitle from '../global/SubTitle'
import ItemLane from './ItemLane'
import Image from 'next/image'
import Button from '../global/Button'
import { useMediaQuery } from 'react-responsive'
import { useParams } from 'next/navigation'
import IconBtnLeft from '../icons/IconBtnLeft'

const arr = [
    {
        id: 1,
        src: '/images/map1.png',
    },
    {
        id: 2,
        src: '/images/map2.png',
    },
    {
        id: 3,
        src: '/images/map3.png',
    },
]

const listAddress = [
    {
        id: 1,
        longLane: 129,
        listDistrict: ['Ha Giang', 'Tam Son', 'Yen Minh', 'Dong Van'],
    },
    {
        id: 2,
        longLane: 129,
        listDistrict: ['Dong Van', 'Lung Cu', 'Ma Pi Lang', 'Nho Que', 'Du Gia'],
    },
    {
        id: 3,
        longLane: 129,
        listDistrict: ['Meo Vac', 'Mau Due', 'Lung Tam', 'Quan Ba', 'Ha Giang'],
    },
]

export default function BestTripEver({ data }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const param = useParams()

    const [count, setCount] = useState(0)
    const [prev, setPrev] = useState(arr[count]?.src)
    const [next, setNext] = useState(arr[count + 1]?.src)
    // const [animation, setAnimation] = useState(null)
    const [indexCurrent, setIndexCurrent] = useState(1)
    const [indexMb, setIndexMb] = useState(0)

    useEffect(() => {
        setPrev(arr[count]?.src)
        setNext(arr[count]?.src)
    }, [count])

    let dataLength = 0
    let dataArr
    if (data) {
        dataLength = data?.listDay?.length
        dataArr = new Array(dataLength - 1).fill(0)
    }

    // useEffect(() => {
    //     const elementToRemove = document.querySelectorAll('canvas')
    //     if (elementToRemove?.length > 1) {
    //         elementToRemove[0]?.remove()
    //     }
    //     let a = new hoverEffect({
    //         parent: document.querySelector('.boxMap'),
    //         intensity1: 1,
    //         intensity2: 1,
    //         speedIn: 0.5, // speed change
    //         speedOut: 0.5, // speed change
    //         hover: false,

    //         image1: prev,
    //         image2: next,
    //         displacementImage: '/displacement/12.png',
    //     })
    //     setAnimation(a)
    // }, [next, prev])

    // useEffect(() => {
    //     const elementToRemove = document.querySelectorAll('canvas')
    //     if (elementToRemove?.length >= 2) {
    //         setTimeout(() => {
    //             elementToRemove[0]?.remove()
    //         }, 100)
    //     }
    // }, [next, prev])

    return (
        <section
            className='mt-[6.25vw] px-[6.25vw] max-md:mt-[16vw] max-md:px-[4.27vw] flex justify-between max-md:flex-col bg-white'
            id='mapId'
        >
            <div>
                <SubTitle
                    title={data?.subtitle}
                    subTitle={data?.title}
                />
                {isMobile && (
                    <div className='flex items-center mt-[5.3vw]'>
                        <div class='boxMap relative h-[77.6vw] w-[91.4vw]'>
                            {arr.map((item, index) => (
                                <Image
                                    key={index}
                                    src={item.src}
                                    width={343}
                                    height={291}
                                    className={`${
                                        index === indexMb ? 'opacity-100' : 'opacity-0'
                                    } absolute w-full h-full object-contain transition-all duration-300`}
                                ></Image>
                            ))}
                        </div>
                    </div>
                )}
                <div className='mt-[2.88vw] max-md:mt-[5.3vw]'>
                    <div>
                        <Image
                            style={{
                                transform: `translateX(${
                                    (indexCurrent - 1) * 12.2 + (indexCurrent === listAddress?.length ? 1 : 0) + 'vw'
                                }) ${indexCurrent === listAddress?.length ? 'rotateY(180deg)' : ''}`,
                            }}
                            className={` w-[3.37vw] h-[2.25vw] object-contain ml-[1.2vw] transition-all duration-300 max-md:w-[6.4vw] max-md:h-auto max-md:hidden`}
                            src={'/images/motor.svg'}
                            alt='motor'
                            width={60}
                            height={40}
                            quality={100}
                        />
                        <Image
                            style={{
                                transform: `translateX(${indexMb * 33.2 + 'vw'}) ${
                                    indexMb === data?.listDay?.length - 1 ? 'rotateY(180deg)' : ''
                                }`,
                            }}
                            className={`md:hidden object-contain ml-[8.8vw] transition-all duration-300 w-[6.4vw] h-auto`}
                            src={'/images/motor.svg'}
                            alt='motor'
                            width={60}
                            height={40}
                            quality={100}
                        />
                    </div>
                    <div className='flex items-center ml-[12vw] gap-[3.2vw] md:hidden'>
                        {dataArr?.map((item, indx) => (
                            <Fragment key={indx}>
                                <svg
                                    className='w-[2.1vw]'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='8'
                                    height='8'
                                    viewBox='0 0 8 8'
                                    fill='none'
                                >
                                    <circle
                                        cx='4'
                                        cy='4'
                                        r='3'
                                        stroke='#B34B1E'
                                        stroke-width='2'
                                    />
                                </svg>
                                <div className='relative overflow-hidden'>
                                    <svg
                                        className='w-[24.5vw]'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='94'
                                        height='3'
                                        viewBox='0 0 94 3'
                                        fill='none'
                                    >
                                        <path
                                            d='M1 1.07812H93'
                                            stroke='#B34B1E'
                                            stroke-opacity='0.26'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-dasharray='10 10'
                                        />
                                    </svg>
                                    <div
                                        className={`${
                                            indx <= indexMb - 1 ? 'translate-x-0' : 'translate-x-[-100%]'
                                        } absolute w-full h-[0.5vw] top-0 left-0 bg-[#B34B1E] transition-all duration-300`}
                                    ></div>
                                </div>
                            </Fragment>
                        ))}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='8'
                            height='8'
                            viewBox='0 0 8 8'
                            fill='none'
                        >
                            <circle
                                cx='4'
                                cy='4'
                                r='3'
                                stroke='#B34B1E'
                                stroke-width='2'
                            />
                        </svg>
                    </div>
                    <div className='flex gap-x-[5.13vw] relative w-fit'>
                        {data?.listDay?.map((e, index) => (
                            <ItemLane
                                indexCurrent={indexCurrent}
                                data={e}
                                key={index}
                                length={data?.listDay?.length}
                                index={index}
                                setIndexCurrent={setIndexCurrent}
                            />
                        ))}
                        <div className='md:hidden mt-[5.3vw]'>
                            <div className='flex gap-[7.5vw]'>
                                {data?.listDay?.map((e, index) => (
                                    <div
                                        onClick={() => setIndexMb(index)}
                                        className={`${
                                            index === indexMb ? 'bg-[#B34B1E]' : 'bg-[#F9F9F9]'
                                        } md:hidden w-[25.3vw] h-[15.46vw] rounded-[2vw] flex flex-col justify-center items-center`}
                                    >
                                        <span
                                            className={`${
                                                index === indexMb ? 'text-white' : 'text-[#898989]'
                                            } text-[3.7vw] leading-[1.42] gap-[1vw] font-bold`}
                                        >
                                            {' '}
                                            DAY {index + 1}{' '}
                                        </span>
                                        <span
                                            className={`${
                                                index === indexMb ? 'text-white' : 'text-[#898989]'
                                            } text-[3.2vw]`}
                                        >
                                            {' '}
                                            {e?.distanceLength}{' '}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className='mt-[3.7vw]'>
                                {data?.listDay?.map((e, index) => (
                                    <div
                                        className={`${
                                            index === indexMb ? 'block' : 'hidden'
                                        } flex gap-[2.1vw] flex-wrap`}
                                    >
                                        {e?.listProvince?.map((item) => (
                                            <div className='w-[29vw] h-[7.4vw] flex-shrink-0 text-[#2E2E2E] text-[3.4vw] bg-[#F2FFBF] flex items-center justify-center font-medium rounded-[1vw]'>
                                                {item.province}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                // animation.previous()
                                if (count > 0) {
                                    setCount(count - 1)
                                }
                                if (indexCurrent > 1) {
                                    setIndexCurrent(indexCurrent - 1)
                                }
                            }}
                            className='p-[0.75vw] absolute top-[1.8vw] left-0 -translate-x-full z-[5] max-md:hidden'
                        >
                            <IconBtnLeft className={'w-[1.82vw] h-[0.82vw]'} />
                        </button>
                        <button
                            onClick={() => {
                                // animation.next()
                                if (count < 2) {
                                    setCount(count + 1)
                                }
                                if (indexCurrent < 3) {
                                    setIndexCurrent(indexCurrent + 1)
                                }
                            }}
                            className='p-[0.75vw] absolute top-[1.8vw] right-0 translate-x-full z-[5] max-md:hidden'
                        >
                            <IconBtnLeft className={'w-[1.82vw] h-[0.82vw] rotate-180'} />
                        </button>
                    </div>
                </div>
                <div className='flex justify-center mt-[2.5vw] max-md:mt-[5.3vw]'>
                    <Button
                        primary={true}
                        content={'book now'}
                        className={'px-[2vw] py-[1vw]'}
                        href={`/${param.slug}#bookingId`}
                    />
                </div>
            </div>
            {!isMobile && (
                <div className='flex items-center'>
                    <div class='boxMap relative h-[45vw] w-[45vw]'>
                        {arr.map((item, index) => (
                            <Image
                                key={index}
                                src={item.src}
                                width={900}
                                height={716}
                                className={`${
                                    index === indexCurrent - 1 ? 'opacity-100' : 'opacity-0'
                                } absolute w-full h-full object-contain transition-all duration-300`}
                            ></Image>
                        ))}
                        {/* <Image src='/images/map1.png' width={900} height={716}></Image>
                        <Image src='/images/map1.png' width={900} height={716}></Image>
                        <Image src='/images/map1.png' width={900} height={716}></Image> */}
                    </div>
                </div>
            )}
        </section>
    )
}
