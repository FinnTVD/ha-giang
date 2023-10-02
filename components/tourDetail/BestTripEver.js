'use client'

import hoverEffect from 'hover-effect'
import { useEffect, useState } from 'react'
import SubTitle from '../global/SubTitle'
import ItemLane from './ItemLane'
import Image from 'next/image'
import Button from '../global/Button'
import { useMediaQuery } from 'react-responsive'
import { useParams } from 'next/navigation'

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
    const [animation, setAnimation] = useState(null)
    const [indexCurrent, setIndexCurrent] = useState(1)

    useEffect(() => {
        setPrev(arr[count]?.src)
        setNext(arr[count]?.src)
    }, [count])

    useEffect(() => {
        const elementToRemove = document.querySelectorAll('canvas')
        if (elementToRemove?.length > 1) {
            elementToRemove[0]?.remove()
        }
        let a = new hoverEffect({
            parent: document.querySelector('.boxMap'),
            intensity1: 1,
            intensity2: 1,
            speedIn: 0.5, // speed change
            speedOut: 0.5, // speed change
            hover: false,

            image1: prev,
            image2: next,
            displacementImage: '/displacement/12.png',
        })
        setAnimation(a)
    }, [next, prev])

    useEffect(() => {
        const elementToRemove = document.querySelectorAll('canvas')
        if (elementToRemove?.length >= 2) {
            setTimeout(() => {
                elementToRemove[0]?.remove()
            }, 100)
        }
    }, [next, prev])

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
                    <div className='flex justify-center'>
                        <div className='flex items-center'>
                            <div class='boxMap relative h-[45vw] w-[45vw]'></div>
                        </div>
                    </div>
                )}
                <div className='mt-[2.88vw]'>
                    <div>
                        <Image
                            style={{
                                transform: `translateX(${
                                    (indexCurrent - 1) * 12.2 + (indexCurrent === listAddress?.length ? 1 : 0) + 'vw'
                                }) ${indexCurrent === listAddress?.length ? 'rotateY(180deg)' : ''}`,
                            }}
                            className={` w-[3.37vw] h-[2.25vw] object-contain ml-[1.2vw] transition-all duration-300`}
                            src={'/images/motor.svg'}
                            alt='motor'
                            width={60}
                            height={40}
                            quality={100}
                        />
                    </div>
                    <div className='flex gap-x-[5.13vw] relative w-fit'>
                        {data?.listDay?.map((e, index) => (
                            <ItemLane
                                indexCurrent={indexCurrent}
                                data={e}
                                key={index}
                                length={data?.listDay?.length}
                                index={index}
                            />
                        ))}

                        <button
                            onClick={() => {
                                animation.previous()
                                if (count > 0) {
                                    setCount(count - 1)
                                }
                                if (indexCurrent > 1) {
                                    setIndexCurrent(indexCurrent - 1)
                                }
                            }}
                            className='p-[0.75vw] absolute top-[1.8vw] left-0 -translate-x-full z-[5]'
                        >
                            <Image
                                className='object-contain w-[1.82vw] h-[0.82vw]'
                                src={'/images/btn-left.svg'}
                                alt='btn-slide'
                                width={36}
                                height={18}
                            />
                        </button>
                        <button
                            onClick={() => {
                                animation.next()
                                if (count < 2) {
                                    setCount(count + 1)
                                }
                                if (indexCurrent < 3) {
                                    setIndexCurrent(indexCurrent + 1)
                                }
                            }}
                            className='p-[0.75vw] absolute top-[1.8vw] right-0 translate-x-full z-[5]'
                        >
                            <Image
                                className='object-contain w-[1.82vw] h-[0.82vw] rotate-180'
                                src={'/images/btn-left.svg'}
                                alt='btn-slide'
                                width={36}
                                height={18}
                            />
                        </button>
                    </div>
                </div>
                <div className='flex justify-center mt-[2.5vw]'>
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
                    <div class='boxMap relative h-[45vw] w-[45vw]'></div>
                </div>
            )}
        </section>
    )
}
