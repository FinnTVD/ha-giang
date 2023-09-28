'use client'

import hoverEffect from 'hover-effect'
import { useEffect, useState } from 'react'
import SubTitle from '../global/SubTitle'
import ItemLane from './ItemLane'
import Image from 'next/image'

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

export default function BestTripEver() {
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
            // intensity: 0,
            intensity1: 1,
            intensity2: 1,
            // angle2: Math.PI / 2,
            speedIn: 0.5, // speed change
            speedOut: 0.5, // speed change
            hover: false,

            image1: prev,
            image2: next,
            // image3: map3,
            //   displacementImage:
            //     "https://images.pexels.com/photos/1097203/pexels-photo-1097203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?raw=true",
            // displacementImage: "/images/map2.png",
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
        <section className='mt-[6.25vw] px-[6.25vw] flex justify-between'>
            <div>
                <SubTitle
                    title={'BEST TRIP EVER'}
                    subTitle={'HA GIANG CHEERS TOUR'}
                />
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
                        {/* <div className='flex items-center'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div> */}
                    </div>
                    <div className='flex gap-x-[5.13vw] relative'>
                        {listAddress?.map((e, index) => (
                            <ItemLane
                                indexCurrent={indexCurrent}
                                setIndexCurrent={setIndexCurrent}
                                data={e}
                                key={index}
                                length={listAddress?.length}
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
                {/* <div class='flex gap-x-[1.5vw]'>
                    <button
                        // onClick={() => setIsHover(!isHover)}
                        onClick={() => {
                            animation.previous()
                            if (count > 0) {
                                setCount(count - 1)
                            }
                        }}
                        type='button'
                        name=''
                        id=''
                        class='btn btn-primary'
                    >
                        Previous
                    </button>
                    <button
                        // onClick={() => setIsHover(!isHover)}
                        onClick={() => {
                            animation.next()
                            if (count < 2) {
                                setCount(count + 1)
                            }
                        }}
                        type='button'
                        name=''
                        id=''
                        class='btn btn-primary'
                    >
                        Next
                    </button>
                </div> */}
            </div>
            <div className='flex items-center'>
                <div class='boxMap relative h-[45vw] w-[45vw]'></div>
            </div>
        </section>
    )
}
